import {useState}  from 'react'
export function Toggle()
{
    let [state,setState]=useState(false);
    let [msg,setMsg]=useState("Show msg");
    return(
        <>
        <button onClick={()=>{
            setState(!state);
            msg=="Show msg"?setMsg("Hide msg"):setMsg("Show msg");
        }}>{msg}</button>
        <p>{state&&<p>Hi!How are you</p>}</p>
        </>
    )
}