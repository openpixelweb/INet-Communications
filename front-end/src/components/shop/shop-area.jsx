
import React from "react";

// CCTV BACKGROUND VIDEO
const shopBackgroundVideo = "/assets/img/shop-cctv-background.mp4";



const ShopArea = () => {
  return (
    <section
      className="inet-shop-coming-soon"
      aria-labelledby="inet-shop-title"
    >
      {/* BACKGROUND CCTV VIDEO */}
      <div className="inet-shop-video-wrapper" aria-hidden="true">
        <video
          className="inet-shop-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        
          disablePictureInPicture
          disableRemotePlayback
        >
          <source
            src="/assets/img/shop-cctv-background.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* TRANSPARENT NAVY / PURPLE OVERLAY */}
      <div
        className="inet-shop-overlay"
        aria-hidden="true"
      />

    

      {/* PAGE CONTENT */}
      <div className="container inet-shop-container">
        <div className="inet-shop-content">
          <span className="inet-shop-status">
            <span className="inet-shop-status-dot" />
            UNDER DEVELOPMENT
          </span>

          <h1 id="inet-shop-title">
            This Page is
            <span>Under Development</span>
          </h1>

          <div
            className="inet-shop-heading-line"
            aria-hidden="true"
          >
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
