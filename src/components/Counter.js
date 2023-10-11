import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
    const [count, setCount] = useState(1); 
    const maxValue = 10;
    const inputValue = (e) => {
        setCount(Number(e.target.value))
    //    console.log(typeof e.target.value)
    }
    const increment = () => {
        
        setCount((prevCount) => {
            if (prevCount < maxValue) {
                return (prevCount += 1);
            }
            else {
                return (prevCount = maxValue);
            }
        });
    }

    const decrement = () => {
        setCount((prevCount) => {
            if (prevCount > 1 && prevCount <= maxValue) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
    }

    return (
        <div className="parentDiv">
            <div className="maindiv">
                <div className="counter">
                    <div>
                        <button onClick={decrement}> - </button>
                    </div>
                     <input type="text" onChange={inputValue} value={count}/> 
                    <div>
                        <button onClick={increment}> + </button>
                    </div>

                </div>
            </div>
        </div>

    );
}
