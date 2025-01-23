import { useState } from "react";

const Counter = () => {
    const [count, setCount]=useState(0);

    const Adding =() =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const Substracting = () =>{
        const newSubstract = count - 1;
        setCount(newSubstract);
    }
    
    return (
        <div>
            <button onClick={Substracting}>Substract</button>
            <h4>Counter: {count}</h4>
            <button onClick={Adding}>Add</button>
        </div>
    );
};

export default Counter;