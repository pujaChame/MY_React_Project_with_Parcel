import { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";

const Dark_Mode=()=>{
    const data=useContext(UserContext);

    const[IsDark,setDark]=useState(true);
    return(
        <div style={{ background:IsDark?"black":"White",
                      color:IsDark? "white":"black",
                       padding: "30px" }}>
             <h3>{data.loggedInUser}</h3> 
             <br></br>         
            <button onClick={()=>setDark(!IsDark)}>
                Toggle Button
            </button>

        </div>
    )
}
export  default Dark_Mode;