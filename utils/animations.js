import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useTitleAnimation = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        // Set initial state
        gsap.set(titleRef.current, {
          x: -100,
          opacity: .5,
          backgroundPositionX: "100%"
        });

        // Animate title
        gsap.to(titleRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          backgroundPositionX: "0%",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 20%",
            toggleActions: 'play play reverse reverse',
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
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 90%",
            end: "top 20%",
            toggleActions: 'play play reverse reverse',
          }
        });
      }
    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
