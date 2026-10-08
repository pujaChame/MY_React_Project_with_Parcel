import { useState } from "react";

const Counter=()=>{
   const[count,setCount]=useState(0);
    return(
        <div>
         <button onClick={()=>{setCount(count+1)}}>Increase</button>
          <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        <h3>Count:{count}</h3>

        </div>
    )
}
export  default Counter;

//In the Above example count is state, setcount method is used to update state 
// and useState intialvalue is 0.
//What happens when setCount() is called?=>Calling the state setter tells React
// that the state has changed and the component needs to render again.