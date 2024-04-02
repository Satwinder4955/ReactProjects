import {useState} from 'react';

const MyComponent = () =>{
    const [count, setCount ] =useState(0);

    const increment =() =>{
        setCount(count + 1);
    }

    const decrement =() =>{
        setCount(count - 1);
    }

    const reset =() =>{
        setCount(0);
    }

    return(
        <div>
            <div style= {{fontSize: "40px", fontWeight: "bold", color: "red"}}>
                {count}
            </div>
            <button style={{ backgroundColor: "darkGreen", color: "white" } }onClick={increment}>Increment</button>
            <button style={{ backgroundColor: "darkRed", color: "white" }} onClick={decrement}>Decrement</button>
            <button style={{ backgroundColor: "darkCyan", color: "white" }} onClick={reset}>Reset</button>
        </div>
    )
}

export default MyComponent;
