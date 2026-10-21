import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./CardBeam.css";

// Path array referencing all 7 uploaded images from the public directory
const cardImages = [
  "/my-card-1.png",
  "/my-card-2.png",
  "/my-card-3.png",
  "/my-card-4.png",
  "/my-card-5.png",
  "/my-card-6.png",
  "/my-card-7.png",
];

function generateCode(width, height) {
  const library = [
    "// staffzone • matrix stream",
    "const SCAN = 8; const FX = 35;",
    "function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }",
    "const renderState = { active: true, rate: 60 };",
  ];
  for (let i = 0; i < 15; i++) {
    library.push(`const node_${i} = ${i * 14} * 0.5;`);
  }
  let flow = library.join(" ").replace(/\s+/g, " ").trim();
  while (flow.length < width * height) {
    flow += " " + library[Math.floor(Math.random() * library.length)];
  }
  let out = "";
  let offset = 0;
  for (let r = 0; r < height; r++) {
    out += flow.slice(offset, offset + width) + "\n";
    offset += width;
  }
  return out;
}

export default function CardBeam() {
  const particleCanvasRef = useRef(null);
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 5;

    let animationFrameId;
    const animate = () => {
      particles.rotation.y += 0.0015;
      particles.rotation.x += 0.0008;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const updateClipping = () => {
      const container = containerRef.current;
      const line = lineRef.current;
      if (!container || !line) return;

      const lineRect = line.getBoundingClientRect();
      const scannerX = lineRect.left + lineRect.width / 2;
      const wrappers = container.querySelectorAll(".card-wrapper");

      wrappers.forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const normalCard = wrapper.querySelector(".card-normal");
        const asciiCard = wrapper.querySelector(".card-ascii");
        if (!normalCard || !asciiCard) return;

        const cardLeft = rect.left;
        const cardRight = rect.right;
        const cardWidth = rect.width;

        if (scannerX >= cardLeft && scannerX <= cardRight) {
          const intersect = ((scannerX - cardLeft) / cardWidth) * 100;
          normalCard.style.clipPath = `inset(0 ${100 - intersect}% 0 0)`;
          asciiCard.style.clipPath = `inset(0 0 0 ${intersect}%)`;
        } else if (scannerX > cardRight) {
          normalCard.style.clipPath = `inset(0 0 0 0)`;
          asciiCard.style.clipPath = `inset(0 100% 0 0)`;
        } else {
          normalCard.style.clipPath = `inset(0 100% 0 0)`;
          asciiCard.style.clipPath = `inset(0 0 0 0)`;
        }
      });
    };

    const interval = setInterval(updateClipping, 16);
    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      clearInterval(interval);
    };
  }, []);

  const asciiText = generateCode(42, 12);

  return (
    <div className="beam-wrapper">
      <div className="beam-container" ref={containerRef}>
        <canvas ref={particleCanvasRef} id="particleCanvas" />
        <div className="scanner-line" ref={lineRef} />
        <div className="card-stream">
          <div className="card-line css-animated">
            {[...cardImages, ...cardImages].map((imgSrc, idx) => (
              <div className="card-wrapper" key={idx}>
                {/* Clean Image View (Left Side) */}
                <div className="card card-normal">
                  <img
                    src={imgSrc}
                    alt={`Card ${idx + 1}`}
                    className="card-custom-image"
                  />
                </div>

                {/* Scanned Matrix Conversion View (Right Side) */}
                <div className="card card-ascii">
                  <pre className="ascii-content">{asciiText}</pre>
                  <img
                    src={imgSrc}
                    alt={`Card Scanned ${idx + 1}`}
                    className="card-custom-image ascii-bg-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
