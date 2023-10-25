"use client";
import { ParallaxBanner } from "react-scroll-parallax";

import mountain1 from "../assets/1.png";
import mountain2 from "../assets/2.png";
import mountain3 from "../assets/3.png";
import mountain4 from "../assets/4.png";
import mountain5 from "../assets/5.png";

export default function ParallaxMountains() {
  return (
    <div className="h-screen ">
      <ParallaxBanner
        className="h-screen"
        layers={[
          {
            image: mountain5.src,
            translateY: [0, 50],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },

          {
            image: mountain4.src,
            translateY: [5, 45],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },

          {
            image: mountain3.src,
            translateY: [10, 30],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            speed: 20,
            children: (
              <div className="absolute inset-0 flex items-center">
                <h1 className="text-9xl text-center w-full text-white font-bold">
                  Pfadi MH
                </h1>
              </div>
            ),
          },
          {
            image: mountain2.src,
            translateY: [10, 20],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: mountain1.src,
            translateY: [5, 0],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
        ]}
      />
    </div>
  );
}
