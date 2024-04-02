import { useEffect, useRef, useState } from "react";

function Information(){
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = stateRef(null);
    const [activeBtn , setActiveBtn] = '';

    const nameHandle = () =>{
        nameRef.current.focus();
        setActiveBtn("name");
    }
    const ageHandle = () =>{
        ageRef.current.focus();
        setActiveBtn("age");
    }
    const genderHandle = () =>{
        genderRef.current.focus();
        setActiveBtn("gender");
    }
    const stateHandle = () =>{
        stateRef.current.focus();
        setActiveBtn("state");
    }
    const countryHandle = () =>{
        countryRef.current.focus();
        setActiveBtn("country");
    }
}

