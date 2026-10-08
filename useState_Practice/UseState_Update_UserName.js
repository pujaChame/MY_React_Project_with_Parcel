import { useState } from "react";

const UseState_Update_UserName=()=>{

   
    const[user,setUser]=useState({
    name:"Puja",
    age:25
   })
    return(
        <>
          <button onClick={()=>setUser({...user,name:"Rahul"})}>Change Name</button>
          <h3>Name:{user.name}</h3>
          <h3>Age:{user.age}</h3>
        </>
    )
}
export default UseState_Update_UserName;