import "./App.css";
import React, { useEffect, useRef } from "react";

function App() {
  const eyesRef = useRef(null);
  useEffect(() => {
    console.log("eyesRef->", eyesRef);

    const container = document.querySelector(".container");
    container.addEventListener("mousemove", (e) => {
      const eyes = document.querySelectorAll(".eye");
      [].forEach.call(eyes, function (eye) {
        let mouseX = eye.getBoundingClientRect().right;
        if (eye.classList.contains("eye-left")) {
          mouseX = eye.getBoundingClientRect().left;
        }
        let mouseY = eye.getBoundingClientRect().top;
        let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
        let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 1;
        eye.style.transform = `rotate(${rotationDegrees}deg)`;
      });
    });
  }, [eyesRef]);

  return (
    <div ref={eyesRef} className="container">
      <div className="head">
        <div className="eye eye-left">
          <div className="eye-inner"></div>
        </div>
        <div className="eye eye-right">
          <div className="eye-inner"></div>
        </div>
        <div className="nose"></div>
      </div>
    </div>
  );
}

export default App;
