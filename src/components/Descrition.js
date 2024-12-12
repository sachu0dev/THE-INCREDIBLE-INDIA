import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Descrition = () => {
  const phrases = [
    "India, a land of diversity,",
    "home to vibrant traditions and cultures,",
    "features breathtaking natural landscapes,",
    "like the majestic Himalayan ranges,",
    "and serene, sun-kissed beaches.",
    "Its rich heritage is unparalleled.",
  ];

  return (
    <div className="relative z-1 text-[3vw] text-white uppercase mt-[30vh] ml-[10vw]">
      {phrases.map((phrase, i) => (
        <AnimatedText key={i}>{phrase}</AnimatedText>
      ))}
    </div>
  );
};

const AnimatedText = ({ children }) => {
  const text = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      left: "-200px",
      opacity: 0,
    });
  }, []);
  return (
    <p className="relative m-0" ref={text}>
      {children}
    </p>
  );
};

export default Descrition;
