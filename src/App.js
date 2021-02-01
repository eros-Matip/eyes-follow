import React, { useEffect, useRef } from "react";
import "./App.css";
import Robot from "./img/robot.png";

function App() {
  const eyesRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector(".container");
    container.addEventListener("mousemove", (e) => {
      const eyes = document.querySelectorAll(".eye");
      [].forEach.call(eyes, function (eye) {
        // Get the mouse position on the horizontal axis
        let mouseX = eye.getBoundingClientRect().right;
        // If it's the left eye we need the left offset instead the right
        if (eye.classList.contains("eye-left")) {
          mouseX = eye.getBoundingClientRect().left;
        }
        // Now we also need the vertical offset
        let mouseY = eye.getBoundingClientRect().top;
        // Now we are going to calculate the radian value of the offset between the mouse and the eye
        let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
        // Let's convert this into a degree based value so we can use it in CSS
        let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 240;
        // Now all we have to do is add this degrees to our eye!
        eye.style.transform = `rotate(${rotationDegrees}deg)`;
      });
    });
  }, [eyesRef]);

  return (
    <div ref={eyesRef} className="container">
      <img src={Robot} className="robot"></img>
      <div className="head">
        <div className="eye ">
          <div className="eye-inner"></div>
        </div>
        <div className="eye ">
          <div className="eye-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
