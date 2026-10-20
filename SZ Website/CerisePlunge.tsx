import { useEffect, useRef } from "react";

export default function CerisePlunge() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('lottie-player')) {
      const player = document.createElement('lottie-player');
      player.setAttribute('src', '/animation.json');
      player.setAttribute('background', 'transparent');
      player.setAttribute('speed', '1');
      player.setAttribute('loop', '');
      player.setAttribute('autoplay', '');
      (player as HTMLElement).style.width = '100%';
      (player as HTMLElement).style.height = '100%';
      containerRef.current.appendChild(player);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} />
  );
}
