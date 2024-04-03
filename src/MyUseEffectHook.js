import { useEffect, useState } from "react";
import Child from './Child';

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

}