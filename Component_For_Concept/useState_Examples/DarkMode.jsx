import { useState } from "react";

const Dark_Mode=()=>{
    
    const[IsDark,setDark]=useState(true);
    return(
        <div style={{ background:IsDark?"black":"White",
                      color:IsDark? "white":"black",
                       padding: "30px" }}>
            <button onClick={()=>setDark(!IsDark)}>
                Toggle Button
            </button>
        </div>
    )
}
export  default Dark_Mode;