import { useEffect, useState } from "react";
import Child from "./Effect";

const MyUseEffectHook = ()=>{
const [count, setCount] = useState(0);
const [age,setAge] = useState(20);
const [isChild, setIsChild] = useState(false);

const increment = () =>{
    console.log("increment is called");
    setCount(count +1 );
}

const updateAge = () =>{
    console.log("updateAge is called");
    setAge(age +1 );
}

const show = () =>{
    setIsChild(true);
}

const hide = () =>{
    setIsChild(false);
}

useEffect(() => {
    console.log("fetch from database")
}, [count, age]);

return (
    <>
    <h1>UseEffect</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={updateAge}>UpdateAge</button>
    <button onClick={show}>Show</button>
    <button onClick={hide}>Hide</button>
    {isChild ? <Child/> : null}
    </>
)

}

export default MyUseEffectHook;