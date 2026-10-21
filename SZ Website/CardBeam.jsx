import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./CardBeam.css";

const cardData = [
  { number: "1234 5678 9000 0001", name: "STAFFZONE 01" },
  { number: "1234 5678 9000 0002", name: "STAFFZONE 02" },
  { number: "1234 5678 9000 0003", name: "STAFFZONE 03" },
  { number: "1234 5678 9000 0004", name: "STAFFZONE 04" },
];

export default function CardBeam() {
  const particleCanvasRef = useRef(null);

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

    const particleCount = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0x8888ff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 5;

    let animationFrameId;
    const animate = () => {
      particles.rotation.y += 0.002;
      particles.rotation.x += 0.001;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="beam-wrapper">
      <div className="beam-container">
        <canvas ref={particleCanvasRef} id="particleCanvas" />

        <div className="scanner-line" />

        <div className="card-stream">
          <div className="card-line css-animated">
            {cardData.map((card, idx) => (
              <div className="credit-card" key={`card-1-${idx}`}>
                <div className="card-chip" />
                <div className="card-number">{card.number}</div>
                <div className="card-name">{card.name}</div>
              </div>
            ))}
            {cardData.map((card, idx) => (
              <div className="credit-card" key={`card-2-${idx}`}>
                <div className="card-chip" />
                <div className="card-number">{card.number}</div>
                <div className="card-name">{card.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
