import { useEffect, useState } from "react";

const Child = () =>{
    const [count, setCount] = useState(1);

    useEffect(() =>{
        let myInterval = setInterval(() => {
            console.log("Interval is running..."+ count);
            setCount(count + 1);
        },1000);
        return()=>{
            clearInterval(myInterval) //cleanup function to run when the component unmounts
        } 
    },[count]);
    return(
        <>
        <h1>Child Component - {count}</h1>
        </>
    )
}

export default Child;