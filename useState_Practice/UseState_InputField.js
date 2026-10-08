import { useState } from "react";

const UseState_InputField=()=>{
   const [uName,setName]=useState("");
    return(
        <>
        Enter Your Name : <input type="text" onChange={(event)=>setName(event.target.value)}/>  
           <h3>My Name Is: {uName}</h3>
        </>
    )
}
export default  UseState_InputField;