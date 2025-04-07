import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import chickwithU from "../../assets/images/chickwithU.png";
import "./Hero.css";

export const Hero = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const headings = ["Every Student's", "Education Platform", "In The World"];
  const description = "Your journey to excellence starts here. Explore a world of possibilities and shape the future you deserve.";

  useEffect(() => {
    if (currentStep <= headings.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1800); // Smooth transition timing
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="Hero">
      <ul className="HeroTextContainer">
        {headings.map((text, index) => (
          <li key={index} className={`HeroTitle ${index <= currentStep ? "visible" : "hidden"}`}>
            <h1
              style={{ fontSize: "4rem" }}
              className={index === 0 ? "PrimaryColor" : index === 1 ? "SecondaryColor" : "AccentColor"}
            >
              {index === currentStep ? (
                <Typewriter words={[text]} typeSpeed={50} cursor cursorStyle="|" />
              ) : (
                text
              )}
            </h1>
          </li>
        ))}

        {/* H6 is always in the DOM but hidden until needed */}
        <li className={`HeroDescription ${currentStep > headings.length - 1 ? "visible" : "hidden"}`}>
          <h6>
            {currentStep >= headings.length ? (
              <Typewriter words={[description]} typeSpeed={35} cursor cursorStyle="|" />
            ) : (
              ""
            )}
          </h6>
        </li>

        {!props.temp && (
          <li>
            <Link to="/login">
              <button className="Start">Start</button>
            </Link>
          </li>
        )}
      </ul>
      <img src={chickwithU} alt="Girl with Logo" className="Mascot" />
    </div>
  );
};
