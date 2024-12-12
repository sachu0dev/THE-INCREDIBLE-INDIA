"use client";
import Descrition from "@/components/Descrition";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <Intro />
      <Descrition />
      <Projects />
    </div>
  );
};

export default page;
