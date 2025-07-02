import { useState } from "react";

export  default function Count(){
    let [count, setCount] = useState(0);
    function incCount(){
        setCount(count = count + 1);
        console.log(count);
    }
    function decCount(){
        setCount(count = count - 1);
    }
    function resetCount(){
        setCount(count = 0)
    }
    return(
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount}>Increase</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decCount}>Decrease</button>
        </div>
    )
}