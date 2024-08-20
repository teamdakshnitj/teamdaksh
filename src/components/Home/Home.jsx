/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import BgImage from "../../assets/i1.png"; // Your background image path
import "../../index.css";

// Define the background image style
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  filter: "brightness(60%)", // Darkens the background image
};

const Home = () => {
  return (
    <main style={bgImage} className="relative">
      <section className="relative min-h-[750px] w-full">
        {/* Smoke Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Dark overlay for aesthetic */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/smoke.png')] opacity-40 z-20"></div> {/* Smoke effect overlay */}
        
        <div className="container relative z-30">
          {/* Home section */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]"
          >
            {/* Text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 flex justify-center items-center">
              <h1 className="uppercase text-center w-72 sm:w-[500px] mb-20 md:mb-40 text-sm sm:text-lg cursor-pointer rounded-3xl p-1 sm:p-2 tracking-wide transform scale-125 translate-y-5">
                "Unleash the thrill of the terrain with unstoppable off-road&nbsp;prowess."
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
