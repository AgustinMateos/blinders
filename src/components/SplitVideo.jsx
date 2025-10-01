"use client";

import { useRef, useState, useEffect } from "react";
import { ReactCompareSlider } from "react-compare-slider";

function SplitVideo({ videoLeftSrc, videoRightSrc, posterLeft, posterRight }) {
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isLeftPlaying, setIsLeftPlaying] = useState(true); // Start playing by default
  const [isRightPlaying, setIsRightPlaying] = useState(true); // Start playing by default
  const [isMobile, setIsMobile] = useState(false);
  const [currentImage, setCurrentImage] = useState("left");
  const [autoInterval, setAutoInterval] = useState(null);

  // Detect screen size (mobile and tablet)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Include tablets (up to 1024px)
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide effect for mobile and tablet
  useEffect(() => {
    if (isMobile && !isLeftPlaying && !isRightPlaying && autoInterval === null) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev === "left" ? "right" : "left"));
      }, 3000); // Change every 3 seconds
      setAutoInterval(interval);
    } else if ((!isMobile || isLeftPlaying || isRightPlaying) && autoInterval !== null) {
      clearInterval(autoInterval);
      setAutoInterval(null);
    }

    return () => {
      if (autoInterval) {
        clearInterval(autoInterval);
      }
    };
  }, [isMobile, isLeftPlaying, isRightPlaying, autoInterval]);

  // Auto-play videos on mount and keep them in sync
  useEffect(() => {
    const leftVideo = leftVideoRef.current;
    const rightVideo = rightVideoRef.current;

    if (leftVideo && rightVideo) {
      leftVideo.play().catch((error) => console.error("Left video play failed:", error));
      rightVideo.play().catch((error) => console.error("Right video play failed:", error));

      // Keep videos in sync
      const syncVideos = () => {
        if (Math.abs(leftVideo.currentTime - rightVideo.currentTime) > 0.1) {
          rightVideo.currentTime = leftVideo.currentTime;
        }
      };

      leftVideo.addEventListener("timeupdate", syncVideos);
      return () => {
        leftVideo.removeEventListener("timeupdate", syncVideos);
      };
    }
  }, []);

  // Handle slider position change (desktop only)
  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  // Handle video toggle for mobile and tablet
  const handleVideoToggle = () => {
    if (currentImage === "left") {
      if (isLeftPlaying) {
        setIsLeftPlaying(false);
        if (leftVideoRef.current) leftVideoRef.current.pause();
      } else {
        setIsLeftPlaying(true);
        setIsRightPlaying(false);
        if (leftVideoRef.current) leftVideoRef.current.play();
        if (rightVideoRef.current) rightVideoRef.current.pause();
      }
    } else {
      if (isRightPlaying) {
        setIsRightPlaying(false);
        if (rightVideoRef.current) rightVideoRef.current.pause();
      } else {
        setIsRightPlaying(true);
        setIsLeftPlaying(false);
        if (rightVideoRef.current) rightVideoRef.current.play();
        if (leftVideoRef.current) leftVideoRef.current.pause();
      }
    }
  };

  // Pagination navigation for mobile
  const handleNext = () => {
    setCurrentImage(currentImage === "left" ? "right" : "left");
    setIsLeftPlaying(true);
    setIsRightPlaying(true);
    if (leftVideoRef.current) leftVideoRef.current.play();
    if (rightVideoRef.current) rightVideoRef.current.play();
  };

  const handlePrev = () => {
    setCurrentImage(currentImage === "left" ? "right" : "left");
    setIsLeftPlaying(true);
    setIsRightPlaying(true);
    if (leftVideoRef.current) leftVideoRef.current.play();
    if (rightVideoRef.current) rightVideoRef.current.play();
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
      <div>
        <img src="/SubtractRed.svg" alt="logo" width="30" height="30" style={{ display: "block" }} />
      </div>
    </div>
  );

  // Mobile and tablet view
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
        {/* Overlay text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            pointerEvents: "none",
            display: isLeftPlaying || isRightPlaying ? "none" : "block",
            zIndex: 10,
            width: "100%",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>CREATIVIDAD SIN LÍMITES</div>
        </div>

        {/* Image and Video Content */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {currentImage === "left" ? (
            <>
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
              />
              <img
                src={posterLeft}
                alt="Poster left"
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  display: isLeftPlaying ? "none" : "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  cursor: "pointer",
                }}
              />
            </>
          ) : (
            <>
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
              />
              <img
                src={posterRight}
                alt="Poster right"
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  display: isRightPlaying ? "none" : "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  cursor: "pointer",
                }}
              />
            </>
          )}
        </div>

        {/* Slider Controls (Vertical bar) */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            zIndex: 10,
          }}
        >
          <button
            onClick={handlePrev}
            style={{
              width: "5px",
              height: "60px",
              borderRadius: "28px",
              backgroundColor: currentImage === "right" ? "rgba(255, 255, 255, 0.5)" : "#D9D9D9",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            aria-label="Previous image"
          />
          <button
            onClick={handleNext}
            style={{
              width: "5px",
              height: "60px",
              borderRadius: "28px",
              backgroundColor: currentImage === "right" ? "#D9D9D9" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            aria-label="Next image"
          />
        </div>

        {/* Bottom Info Bar */}
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
          {/* Left: Subtract img + Name */}
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
              style={{ width: "40px", height: "30px", display: "block" }}
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

          {/* Right: Play/Close icon button */}
          <button
            onClick={handleVideoToggle}
            style={{
              backgroundColor: "transparent",
              padding: "8px",
              borderRadius: "4px",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "all 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
            aria-label={
              (currentImage === "left" && isLeftPlaying) || (currentImage === "right" && isRightPlaying)
                ? "Stop video"
                : "Play video"
            }
          >
            <span
              style={{
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                display: "inline-block",
              }}
            >
              {(currentImage === "left" && isLeftPlaying) || (currentImage === "right" && isRightPlaying)
                ? ""
                : "VER"}
            </span>
            <img
              src={
                (currentImage === "left" && isLeftPlaying) || (currentImage === "right" && isRightPlaying)
                  ? "/close-icon.svg"
                  : "/flecha.svg"
              }
              alt={
                (currentImage === "left" && isLeftPlaying) || (currentImage === "right" && isRightPlaying)
                  ? "Close video"
                  : "Play video"
              }
              style={{ width: "24px", height: "24px", display: "block" }}
            />
          </button>
        </div>
      </div>
    );
  }

  // Desktop view: ReactCompareSlider
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
      {/* Overlay text */}
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
        <div style={{ fontSize: "3rem", fontWeight: "bold" }}>CREATIVIDAD SIN LÍMITES</div>
      </div>

      {/* Overlay links */}
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
            />
          </div>
        }
      />
    </div>
  );
}

export default SplitVideo;