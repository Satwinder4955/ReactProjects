import { useEffect, useRef, useState } from "react";

function Information(){
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);
    const [activeBtn , setActiveBtn] = useState('');

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

    useEffect(() => {
        nameRef.current.focus()
    }, []);
    
    return (
        <div>
            <h1>Information</h1>
      <div className="form-control">
        <input ref={nameRef} type="text" placeholder="Name" />
      </div>
      <div className="form-control">
        <input ref={ageRef} type="text" placeholder="Age" />
      </div>
      <div className="form-control">
        <input ref={genderRef} type="text" placeholder="Gender" />
      </div>
      <div className="form-control">
        <input ref={stateRef} type="text" placeholder="State" />
      </div>
      <div className="form-control">
        <input ref={countryRef} type="text" placeholder="Country" />
      </div>
      <div className="btn-container">
        <button
          className={activeBtn === "name" ? "active" : null}
          onClick={nameHandle}
        >
          Name
        </button>
        <button
          className={activeBtn === "age" ? "active" : null}
          onClick={ageHandle}
        >
          Age
        </button>
        <button
          className={activeBtn === "gender" ? "active" : null}
          onClick={genderHandle}
        >
          Gender
        </button>
        <button
          className={activeBtn === "state" ? "active" : null}
          onClick={stateHandle}
        >
          State
        </button>
        <button
          className={activeBtn === "country" ? "active" : null}
          onClick={countryHandle}
        >
          Country
        </button>
      </div>
        </div>
        )
}

export default Information;
