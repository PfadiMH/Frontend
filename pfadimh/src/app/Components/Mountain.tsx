"use client";
import { ParallaxBanner, useParallaxController } from "react-scroll-parallax";
const Mountain = () => {
  const parallaxController = useParallaxController();

  return (
    <div className="" style={{ height: "600px" }}>
      <ParallaxBanner
        layers={[
          {
            image: "https://i.imgur.com/wPtBb2y.jpg",
            speed: -10,
          },
          { image: "https://i.imgur.com/0w4lsej.png", speed: -30 },
        ]}
        className="h-screen"
        onLoad={() => {
          parallaxController && parallaxController.update();
        }}
      />
    </div>
  );
};
export default Mountain;
