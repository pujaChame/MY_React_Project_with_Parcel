import { useEffect } from "react";

const UseEffect_CleanUp_Function=()=>{
   
    useEffect(()=>{
       const timer=setInterval(() => {
        console.log("Timer running");
       }, 1000);

    //    return(()=>{
    //     clearInterval(timer)
    //    })
   })
  
}

export default UseEffect_CleanUp_Function;