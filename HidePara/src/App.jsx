import "./App.css";
import { useState } from "react";
function App() {
  let [isHide, setIsHide] = useState(false);
  let showText = ()=> {
    setIsHide(!isHide);
    console.log(isHide);
  }
  return (
    <div>
      {isHide ? <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        dolorum recusandae. Cumque, impedit? Quod placeat, nostrum aspernatur
        odit sint velit quasi, error atque numquam consequatur, ipsam quam
        praesentium dicta magnam? 
      </p>  :   <span><i className="fa-solid fa-caret-down" onClick={showText}></i></span>}
    </div>
  );
}

export default App;
