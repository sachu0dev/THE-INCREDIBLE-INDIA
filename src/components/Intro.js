import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=400px",
        scrub: true,
      },
    });

    timeline
      .from(backgroundImage.current, {
        clipPath: "inset(15%)",
      })
      .to(
        introImage.current,
        {
          height: "200px",
        },
        0
      );
  }, []);
  return (
    <div className="">
      <div
        ref={backgroundImage}
        className="absolute h-[140vh] w-full filter brightness-50 top-0"
      >
        <Image
          className="object-cover"
          src={"/images/gate.jpg"}
          alt="background"
          fill={true}
        />
      </div>
      <div className="mt-[35vh] flex items-center justify-center">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.7"
          className="absolute w-[350px] h-[475px] filter brightness-40"
        >
          <Image
            className="object-cover object-top"
            src={"/images/intro.jpg"}
            alt="intro"
            fill={true}
          />
        </div>
        <h1 className="z-10 text-white text-[5vw] uppercase font-bold">
          The Incredible India
        </h1>
      </div>
    </div>
  );
};

export default Intro;
