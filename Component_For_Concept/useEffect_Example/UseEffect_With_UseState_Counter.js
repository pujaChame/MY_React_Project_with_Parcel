import { useEffect, useState } from "react";

const UseEffect_With_UseState_Counter = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        console.log("Count Changed",count)
    },[count])
    
    return (
        <>
        <h3>{count}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>Count Increase</button>
        </>
    )

}

export default UseEffect_With_UseState_Counter;