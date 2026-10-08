import { useState } from "react"

const UseState_Counter=()=>{
    const [count,setCount]=useState(0);
    const[preCount,setPreCount]=useState(0)
    const increase=()=>{
        setPreCount(count);
        setCount(count+1)
    }

    const decrese=()=>{
        setPreCount(count);
        setCount(count-1);
    }
    return (
        <>
        
        <button onClick={increase}>Increase</button>
        <h2>Count:{count}</h2>
        <h2>PrevCount:{preCount}</h2>
        <button onClick={decrese}>Decrease</button>
        </>
    )
}
export default UseState_Counter;