"use client";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax,
} from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import Image from "next/image";

import { useParallaxController } from "react-scroll-parallax";

export default function ParallaxMountains() {
  return (
    <div className="h-[100vh]">
      <ParallaxBanner
        className="h-[100vh] bg-[#bbe8f6] aspect-[2/1]"
        layers={[
          {
            image: "https://i.imgur.com/JuEP9bg.png",
            speed: -40,
          },
          {
            image: "https://i.imgur.com/lr3gurc.png",
            speed: -30,
          },
          {
            image: "https://i.imgur.com/lr3gurc.png",
            speed: -20,
          },
          {
            image: "https://i.imgur.com/iUHcYis.png",
            speed: -10,
          },
          {
            image: "https://i.imgur.com/SmAaims.png",
            speed: 0,
          },
        ]}
      />
    </div>
  );
}
