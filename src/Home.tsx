import React, { useState, useEffect, useRef } from "react";

export const Home: React.FC = (props) =>{

   const [text,setText] = useState('Guest');
   const [show,setShow] = useState(true);
   const [count,setCount] = useState(1);
   const storeIntervel = useRef<any>(null);
   const number = useRef(0);
   const inputRef = useRef<any>(null);
   document.title = `hello ${text}`;

// Added useRef use cases with timeIntervel & inputRef
   const [timer,settimer] = useState(0);
   const startTimer = ()=>{
   storeIntervel.current = setInterval(()=>{
        settimer(prev => prev + 1 );
    },1000)
   }
   const stopTimer = ()=>{
    clearInterval(storeIntervel.current);
    settimer(0);
    number.current += 1;
   }

   const focus =() =>{
     console.log(inputRef.current.value);
     inputRef.current.focus();
   }

  

    return (<>
    <div>
       { show &&
        <input type='text' name='username' value={text} onChange={(e)=> setText(e.target.value)}/>
        }
        <div>Hello {text} Welcome to reactjs. </div>
        <button value='hide' onClick={()=> {setShow(prve => !prve)}}>submit</button>
    

    </div>
    <div>
      <button onClick={()=> {startTimer()}}>start</button>
      <button onClick={()=> {stopTimer()}}>stop</button>
      <div>{timer}</div>
      <div>number : {number.current}</div>

    </div>
    <div>
        <input type="text" ref={inputRef} ></input>
        <button onClick={()=> {focus()}} >focus</button>
    </div>
        
    </>)

}
