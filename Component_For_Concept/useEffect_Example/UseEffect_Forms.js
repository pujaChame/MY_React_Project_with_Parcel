import { useEffect, useState } from "react"

const UseEffect_Forms=()=>{
   // let count=10;
    const[count,setCount]=useState(0);
    useEffect(()=>{
       setTimeout(()=>{
        console.log("Call or Run After Every Render")
       },2000)
        //console.log("Call or Run After Every Render")
    })

    useEffect(()=>{
         document.title="React Learning"
        console.log("Run After Intial Render");
    },[])

    useEffect(()=>{
        console.log("Call Or Run When Count Changes");
    },[count])
 return(
    <><h4>{count}</h4>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    </>
 )
}
export default UseEffect_Forms;