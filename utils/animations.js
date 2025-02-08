import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export const useTitleAnimation = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    if (titleRef.current) {
      // Set initial state
      gsap.set(titleRef.current, {
        x: -100,
        backgroundPositionX: "100%"
      });

      // Animate title
      gsap.to(titleRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        backgroundPositionX: "0%",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom",
          end: "top 10vh",
          scrub: 1,
          toggleActions: "restart pause reverse pause"
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
          scrub: 1,
          toggleActions: "restart pause reverse pause"
        }
      });
    }

    return () => {
      if (titleRef.current || subtitleRef.current) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, { scope: titleRef });

  return { titleRef, subtitleRef };
};
