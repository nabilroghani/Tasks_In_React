import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("white");

  const handleRed = () => {
    setBgColor("red");
  };

  const handleGreen = () => {
    setBgColor("green");
  };

  const handleBlue = () => {
    setBgColor("blue");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎨 Color Changer</h2>

      <div
        style={{
          backgroundColor: bgColor,
          height: "150px",
          width: "100%",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      ></div>

      <button onClick={handleRed}>Red</button>
      <button onClick={handleGreen} style={{ margin: "0 10px" }}>Green</button>
      <button onClick={handleBlue}>Blue</button>
    </div>
  );
}

export default App;
