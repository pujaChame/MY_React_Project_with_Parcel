import { useContext } from "react";
import { Link } from "react-router-dom";
import UserCotext from "../../utils/UserContext";
import UserContext from "../../utils/UserContext";

const UseState_Header = () => {
   const data=useContext(UserContext)
     
    return (
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/boolean-comp">Boolean</Link>
                </li>
                <li>
                    <Link to="dark-mode">Dark Mode</Link>
                </li>
                <li>
                    <Link to="/usestate-with-props">UseState_With_Props</Link>
                </li>
                <li>
                    <Link to="/functional-state">Functional_State</Link>
                </li>
                <li>
                    {data.loggedInUser}
                </li>
            </ul>
        </div>
    )
}
export default UseState_Header;