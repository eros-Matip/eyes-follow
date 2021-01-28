import logo from "./logo.svg";
import "./App.css";

function App() {
  // function loop() {
  //   clear();

  //   drawEye(200, height / 2, 60);
  //   drawEye(380, height / 2, 60);
  // }

  // function drawEye(x, y, r) {
  //   fill("white");
  //   ellipse(x, y, r * 2);

  //   drawEyePupil(x, y, 0.75 * r, 0.5 * r);
  // }

  // // Draw eyes that follow the mouse position
  // function drawEyePupil(x1, y1, r, pr) {
  //   var angle = atan2(mouseY - y1, mouseX - x1);

  //   var x2 = x1 + r * cos(angle);
  //   var y2 = y1 + r * sin(angle);

  //   fill("black");
  //   ellipse(x2, y2, pr);
  // }

  return (
    <div class="container">
      <div class="chicken">
        <div class="head">
          <div class="crown">
            <div class="crown-p crown-p-one"></div>
            <div class="crown-p crown-p-two"></div>
            <div class="crown-p crown-p-three"></div>
          </div>
          <div class="eye eye-left">
            <div class="eye-inner"></div>
          </div>
          <div class="eye eye-right">
            <div class="eye-inner"></div>
          </div>
          <div class="nose"></div>
        </div>
        <div class="body">
          <div class="hand hand-left"></div>
          <div class="hand hand-right"></div>
        </div>
        <div class="foot foot-left"></div>
        <div class="foot foot-right"></div>
      </div>
    </div>
  );
}

export default App;
