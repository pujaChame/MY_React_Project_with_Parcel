import { useState } from "react";

const calculateInitialValue=()=>{
    console.log("Lazy Initialization");
    return 100;
}
const Lazy_initialization=()=>{
    const[value,setValue]=useState(calculateInitialValue)
    return(
        <>
        <h2>{value}</h2>
        <button onClick={()=>{setValue(value+1)}}>Initial Value</button>
        </>
    )
}
export default Lazy_initialization;