import { useState } from "react";

const Functional_State=()=>{
   const[count ,setCount]=useState(0);
  
   const increaseCount=()=>{
        setCount(preCount=>preCount+1);
   };
   
   return(
        <>
        <h3>{count}</h3>
        <button onClick={increaseCount }>Increase Value</button>
        </>
    )
}
export default Functional_State;