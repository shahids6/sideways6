import { useEffect } from "react";

export function useScrollScaleAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(2)';
          } else {
            entry.target.style.transform = 'scale(3)';
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const images = document.querySelectorAll('.backgroundImage');
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);
} 