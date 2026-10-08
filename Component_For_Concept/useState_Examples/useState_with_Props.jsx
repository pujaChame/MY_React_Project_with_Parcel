import { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";

const UseState_With_Props = ({ name, age }) => {
    const data=useContext(UserContext)
    const [uname, setName] = useState(data.loggedInUser)
    return (
        <>
           
            <button onClick={() => setName(data.loggedInUser)}>Change Name</button>
             <h1>Hello {uname}</h1>
            <br></br>
            <input onChange={(e)=>{setName(e.target.value)}}/>
        </>
    )
}
export default UseState_With_Props;

//here i am using props getting name from props that gives to the usestate when i clicked 
//button it will set the name asprashant usinfg the setName method that will update UI &
//then render on the UI.