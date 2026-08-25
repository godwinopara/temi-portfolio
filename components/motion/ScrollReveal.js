import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ScrollReveal() {
  const { asPath } = useRouter();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [...document.querySelectorAll("main > section, main > div > header, main > div > section")];
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.dataset.revealed = "true");
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.dataset.revealed = "true"; observer.unobserve(entry.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    elements.forEach((element, index) => { element.dataset.reveal = ""; element.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 70}ms`); observer.observe(element); });
    return () => observer.disconnect();
  }, [asPath]);

  return null;
}
