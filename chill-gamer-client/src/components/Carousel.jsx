import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Carousel = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/Y2n00ww/cyber-hunter.jpg",
      title: "Cyber Hunter",
      reviewSummary:
        "A fast-paced, futuristic shooter with cutting-edge graphics and intense multiplayer action. However, the game's server stability can be a challenge, affecting the experience.",
      rating: 5,
    },
    {
      image: "https://i.ibb.co.com/Jtf1ScB/Galactic-Conquerer.jpg",
      title: "Galactic Conquerer",
      reviewSummary:
        "A space strategy game that mixes base building with real-time combat. It offers an immersive universe, but the learning curve is steep for newcomers to the genre.",
      rating: 5,
    },
    {
      image: "https://i.ibb.co.com/fF2Jyn3/Wastland-Survivors.jpg",
      title: "Wastland Survivors",
      reviewSummary:
        "A post-apocalyptic survival game where players must manage resources and fend off mutated creatures. While it’s enjoyable, the repetitive gameplay can become tedious.",
      rating: 5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel relative object-contain mt-5 rounded-xl w-full md:h-[300px] lg:h-[500px] h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex lg:pt-20 pt-6 justify-center">
            <div className="text-center text-white md:px-4">
              {/* "Most Rated" Label */}
              <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm inline-block mb-2">
                Most Rated
              </div>
              <h2
                className="lg:text-5xl md:text-3xl text-xl font-semibold lg:pb-4"
                style={{ minHeight: "30px" }} 
              >
                <Typewriter
                  words={[slide.title]} 
                  loop={false} 
                  cursor
                  cursorStyle="🎮"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="lg:text-lg mt-2 w-11/12 md:w-2/3 mx-auto">
                {slide.reviewSummary}
              </p>
              <div className="mt-2 flex items-center justify-center">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`text-lg ${
                      starIndex < slide.rating
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-2 top-1/2">
        <button
          className="btn btn-sm md:btn-lg bg-opacity-15 text-white hover:text-black"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
        >
          ❮
        </button>
        <button
          className="btn btn-sm md:btn-lg bg-opacity-15 text-white hover:text-black"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
