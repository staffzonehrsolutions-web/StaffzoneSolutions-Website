import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./CardBeam.css";

const cardData = [
  { number: "1234 5678 9000 0001", name: "STAFFZONE 01" },
  { number: "1234 5678 9000 0002", name: "STAFFZONE 02" },
  { number: "1234 5678 9000 0003", name: "STAFFZONE 03" },
  { number: "1234 5678 9000 0004", name: "STAFFZONE 04" },
];

function generateCode(width, height) {
  const library = [
    "// staffzone • scanner matrix build",
    "const SCAN_WIDTH = 8; const FADE_ZONE = 35;",
    "function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }",
    "const now = () => performance.now();",
    "function drawParticle(ctx, p) { ctx.globalAlpha = clamp(p.a, 0, 1); }",
    "const state = { intensity: 1.2, particles: 2500 };",
  ];

  for (let i = 0; i < 20; i++) {
    library.push(`const v${i} = (${i + 1} + ${i * 3}) * 0.82;`);
  }

  let flow = library.join(" ").replace(/\s+/g, " ").trim();
  const totalChars = width * height;
  while (flow.length < totalChars + width) {
    flow += " " + library[Math.floor(Math.random() * library.length)];
  }

  let out = "";
  let offset = 0;
  for (let row = 0; row < height; row++) {
    let line = flow.slice(offset, offset + width);
    if (line.length < width) line += " ".repeat(width - line.length);
    out += line + (row < height - 1 ? "\n" : "");
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

    const particleCount = 450;
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
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 5;

    let animationFrameId;
    const animate = () => {
      particles.rotation.y += 0.0018;
      particles.rotation.x += 0.0009;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const updateCardClipping = () => {
      const container = containerRef.current;
      const line = lineRef.current;
      if (!container || !line) return;

      const lineRect = line.getBoundingClientRect();
      const scannerX = lineRect.left + lineRect.width / 2;
      const scannerWidth = 8;
      const scannerLeft = scannerX - scannerWidth / 2;
      const scannerRight = scannerX + scannerWidth / 2;

      const wrappers = container.querySelectorAll(".card-wrapper");

      wrappers.forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const cardLeft = rect.left;
        const cardRight = rect.right;
        const cardWidth = rect.width;

        const normalCard = wrapper.querySelector(".card-normal");
        const asciiCard = wrapper.querySelector(".card-ascii");

        if (!normalCard || !asciiCard) return;

        if (cardLeft < scannerRight && cardRight > scannerLeft) {
          const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
          const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);

          const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
          const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;

          normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
          asciiCard.style.setProperty("--clip-left", `${asciiClipLeft}%`);
        } else {
          if (cardRight < scannerLeft) {
            normalCard.style.setProperty("--clip-right", "100%");
            asciiCard.style.setProperty("--clip-left", "100%");
          } else if (cardLeft > scannerRight) {
            normalCard.style.setProperty("--clip-right", "0%");
            asciiCard.style.setProperty("--clip-left", "0%");
          }
        }
      });
    };

    const clippingInterval = setInterval(updateCardClipping, 16);

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      clearInterval(clippingInterval);
    };
  }, []);

  const asciiText = generateCode(45, 14);

  return (
    <div className="beam-wrapper">
      <div className="beam-container" ref={containerRef}>
        <canvas ref={particleCanvasRef} id="particleCanvas" />

        <div className="scanner-line" ref={lineRef} />

        <div className="card-stream">
          <div className="card-line css-animated">
            {[...cardData, ...cardData, ...cardData].map((card, idx) => (
              <div className="card-wrapper" key={idx}>
                <div className="card card-normal">
                  <div className="card-chip" />
                  <div className="card-number">{card.number}</div>
                  <div className="card-info">
                    <span className="card-holder">{card.name}</span>
                    <span className="card-expiry">12/28</span>
                  </div>
                </div>

                <div className="card card-ascii">
                  <pre className="ascii-content">{asciiText}</pre>
                  <div className="card-chip" />
                  <div className="card-number">{card.number}</div>
                  <div className="card-info">
                    <span className="card-holder">{card.name}</span>
                    <span className="card-expiry">12/28</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
