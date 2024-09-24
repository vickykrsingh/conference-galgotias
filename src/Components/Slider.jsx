import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,             // For navigation dots below the slider
    infinite: true,         // Infinite loop
    speed: 500,             // Transition speed
    slidesToShow: 1,        // Number of slides to show at a time
    slidesToScroll: 1,      // Number of slides to scroll at a time
    autoplay: true,         // Autoplay slides
    autoplaySpeed: 3000,    // Autoplay speed in milliseconds
    pauseOnHover: false,
  };

  // Example navbar height for calculating full-screen size minus navbar
  const navbarHeight = 60;

  return (
    <div
      className="slider-container relative"
      style={{
        height: `calc(100vh - ${navbarHeight}px)`, // Full screen minus navbar height
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="/slider3.webp"
            alt="Slide 1"
            style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-4xl font-bold mb-4">International Conference on Next Gen Engineering</h1>
            <p className="text-lg">
            International Conference on Next Gen Engineering : Bridging
            Innovation & Sustainability (ICNGEBIS)
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="/slider2.jpeg"
            alt="Slide 2"
            style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-4xl font-bold mb-4">International Conference on Next Gen Engineering</h1>
            <p className="text-lg">
            International Conference on Next Gen Engineering : Bridging
            Innovation & Sustainability (ICNGEBIS)
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="/slider1.jpg"
            alt="Slide 3"
            style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-4xl font-bold mb-4">International Conference on Next Gen Engineering</h1>
            <p className="text-lg">
            International Conference on Next Gen Engineering : Bridging
            Innovation & Sustainability (ICNGEBIS)
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
