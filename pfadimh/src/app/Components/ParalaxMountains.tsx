import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxMountains() {
  return (
    <main className="h-[300vh]">
      <ParallaxProvider>
        <header>
          <ParallaxBanner
            className="h-[100vh] bg-[#bbe8f6]"
            layers={[
              {
                image: "bg-1.jpg",
                translateY: [0, 50],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: "bg-2.png",
                translateY: [5, 45],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: "bg-3.png",
                translateY: [10, 30],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: "bg-4.png",
                translateY: [15, 25],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: "bg-5.png",
                translateY: [20, 20],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          />
        </header>
      </ParallaxProvider>
    </main>
  );
}
