import { useEffect, useRef, useState } from "react";
import styles from "./CursorBubble.module.css";

export default function CursorBubble() {
  const bubbleRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const frame = useRef();
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches || reducedMotion.matches) return undefined;

    const render = () => {
      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;
      if (bubbleRef.current) bubbleRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      frame.current = requestAnimationFrame(render);
    };
    const move = (event) => {
      target.current = { x: event.clientX, y: event.clientY };
      setVisible(true);
      setInteractive(Boolean(event.target.closest("a, button, input, textarea, select, [role='button']")));
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame.current = requestAnimationFrame(render);
    return () => { window.removeEventListener("pointermove", move); document.documentElement.removeEventListener("mouseleave", leave); cancelAnimationFrame(frame.current); };
  }, []);

  return <span ref={bubbleRef} className={`${styles.bubble} ${visible ? styles.visible : ""} ${interactive ? styles.interactive : ""}`} aria-hidden="true" />;
}
