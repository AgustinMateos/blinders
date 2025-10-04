"use client";

import { BigShoulders } from "@/app/ui/fonts";
import { useRef, useState, useEffect } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function SplitVideo({ videoLeftSrc, videoRightSrc }) {
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState("left");
  const [showText, setShowText] = useState(true); // State to control text visibility

  // Detect screen size (mobile and tablet)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide text after 5 seconds on mobile and tablet
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowText(false);
      }, 5000); // 5000ms = 5 seconds
      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [isMobile]);

  // Play videos and keep them in sync for desktop
  useEffect(() => {
    if (!isMobile) {
      const leftVideo = leftVideoRef.current;
      const rightVideo = rightVideoRef.current;

      if (leftVideo && rightVideo) {
        const playVideos = async () => {
          try {
            await Promise.all([
              leftVideo.play().catch((error) => console.error("Left video play failed:", error)),
              rightVideo.play().catch((error) => console.error("Right video play failed:", error)),
            ]);
          } catch (error) {
            console.error("Video playback error:", error);
          }
        };

        playVideos();

        const syncVideos = () => {
          if (Math.abs(leftVideo.currentTime - rightVideo.currentTime) > 0.1) {
            rightVideo.currentTime = leftVideo.currentTime;
          }
        };

        leftVideo.addEventListener("timeupdate", syncVideos);
        return () => leftVideo.removeEventListener("timeupdate", syncVideos);
      }
    }
  }, [isMobile]);

  // Handle video playback for mobile (play active, pause inactive)
  useEffect(() => {
    if (isMobile) {
      const activeVideo = currentImage === "left" ? leftVideoRef.current : rightVideoRef.current;
      const inactiveVideo = currentImage === "left" ? rightVideoRef.current : leftVideoRef.current;

      if (activeVideo) {
        activeVideo.play().catch((error) => console.error("Active video play failed:", error));
      }
      if (inactiveVideo) {
        inactiveVideo.pause();
      }
    }
  }, [currentImage, isMobile]);

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const CustomHandle = () => (
    <div
      style={{
        width: "80px",
        height: "100%",
        background: "transparent",
        borderRadius: "4px",
        cursor: "cell",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="/SubtractRed.svg" alt="logo" width="30" height="30" style={{ display: "block" }} />
    </div>
  );

  // Mobile and tablet view with Swiper
  if (isMobile) {
    return (
      <div
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            pointerEvents: "none",
            zIndex: 10,
            width: "100%",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            opacity: showText ? 1 : 0, // Control opacity for fade effect
            transition: "opacity 1s ease-in-out", // Smooth fade transition
          }}
        >
          <div className={`${BigShoulders} font-bold text-[54px] leading-none tracking-normal uppercase`}>
            CREATIVIDAD SIN LÍMITES
          </div>
        </div>

        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
          speed={1000}
          touchReleaseOnEdges={true}
          mousewheel={{ releaseOnEdges: true }}
          onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex === 0 ? "left" : "right")}
          style={{ width: "100vw", height: "100vh" }}
        >
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <video
                ref={leftVideoRef}
                src={videoLeftSrc}
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <video
                ref={rightVideoRef}
                src={videoRightSrc}
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
          </SwiperSlide>
        </Swiper>

       <div
  style={{
    position: "absolute",
    bottom: "20px",
    left: "20px",
    right: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
    pointerEvents: "none",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      pointerEvents: "auto",
    }}
  >
    <img
      src={currentImage === "left" ? "/SubtractRed.svg" : "/Subtract.svg"}
      alt="Subtract"
      width={40}
      height={30}
      style={{ display: "block" }}
    />
    <span
      style={{
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        display: "inline-block",
      }}
    >
      {currentImage === "left" ? "Art" : "Corp"}
    </span>
  </div>
</div>
      </div>
    );
  }

  // Desktop view
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          pointerEvents: "none",
          zIndex: 10,
          width: "100%",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className={`${BigShoulders} font-bold text-[94px] leading-none tracking-normal uppercase`}>
          CREATIVIDAD SIN LÍMITES
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textAlign: "center",
          pointerEvents: "none",
          zIndex: 10,
          width: "100%",
          padding: "1rem 0",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <div style={{ fontSize: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a
            href="#artistas"
            style={{
              color: position > 50 ? "red" : position === 50 ? "#FFFFFF" : "white",
              textDecoration: "none",
              marginRight: "1rem",
              pointerEvents: "auto",
            }}
            className={`${BigShoulders} font-bold text-[54px] leading-none tracking-normal uppercase`}
          >
            ARTISTAS
          </a>
          <img
            src={position < 50 || position > 50 ? "/SubtractRed.svg" : "/Subtract.svg"}
            alt="Subtract"
            style={{ width: "57px", height: "44px", margin: "0 1rem", display: "block" }}
          />
          <a
            href="#empresas"
            style={{
              color: position < 50 ? "red" : position === 50 ? "#FFFFFF" : "white",
              textDecoration: "none",
              pointerEvents: "auto",
            }}
            className={`${BigShoulders} font-bold text-[54px] leading-none tracking-normal uppercase`}
          >
            EMPRESAS
          </a>
        </div>
      </div>

      <ReactCompareSlider
        position={position}
        handle={<CustomHandle />}
        onPositionChange={handlePositionChange}
        style={{
          width: "100%",
          height: "100%",
        }}
        itemOne={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <video
              ref={leftVideoRef}
              src={videoLeftSrc}
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        }
        itemTwo={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <video
              ref={rightVideoRef}
              src={videoRightSrc}
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        }
      />
    </div>
  );
}

export default SplitVideo;