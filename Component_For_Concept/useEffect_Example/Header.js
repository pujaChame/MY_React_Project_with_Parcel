import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div  className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ueseffect-form">UseEffect_Forms</Link>
                </li>
                <li>
                    <Link to="/ueseffect-clenup">UseEffect_CleanUp</Link>
                </li>
                <li>
                    <Link to="/useeffect-parent">UseEffect_Parents</Link>
                </li>
                <li>
                    <Link to="/useeffect-product">UseEffect_Product</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;