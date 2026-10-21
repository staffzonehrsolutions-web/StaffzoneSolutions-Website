import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./CardBeam.css";

export default function CardBeam() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(30);
  const particleCanvasRef = useRef(null);
  const scannerCanvasRef = useRef(null);

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
      if (isPlaying) {
        particles.rotation.y += 0.002;
        particles.rotation.x += 0.001;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [isPlaying]);

  return (
    <div className="beam-wrapper">
      <div className="controls">
        <button className="control-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
        <button className="control-btn" onClick={() => setSpeed(30)}>
          🔄 Reset
        </button>
      </div>

      <div className="speed-indicator">
        Speed: <span>{speed}</span> px/s
      </div>

      <div className="beam-container">
        <canvas ref={particleCanvasRef} id="particleCanvas" />
        <canvas ref={scannerCanvasRef} id="scannerCanvas" />

        <div className="scanner-line" />

        <div className="card-stream">
          <div className={`credit-card ${isPlaying ? "moving" : "paused"}`}>
            <div className="card-chip" />
            <div className="card-number">1234 5678 9000 0000</div>
            <div className="card-name">Staffzone</div>
          </div>
        </div>
      </div>
    </div>
  );
}
