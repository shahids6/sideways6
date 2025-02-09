import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

export const useTitleAnimation = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        // Set initial state
        gsap.set(titleRef.current, {
          x: -100,
          opacity: 0,
          backgroundPositionX: "100%"
        });

        // Animate title
        gsap.to(titleRef.current, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          backgroundPositionX: "0%",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        });
      }

      if (subtitleRef.current) {
        // Set initial state
        gsap.set(subtitleRef.current, {
          opacity: 0,
          y: 55
        });

        // Animate subtitle
        gsap.to(subtitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { titleRef, subtitleRef };
};
