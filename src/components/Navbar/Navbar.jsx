import "./Navbar.css"
import avatar from "../../assets/do-utilizador.png"
import lista from "../../assets/lista-de-reproducao.png"
import { Link } from "react-router-dom"
const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="logo">
                <Link to="/" className={"link"}>Logo</Link>
            </h1>
            <div className="button">
                <Link to="/Login" href=""><img src={avatar} alt="Logo" width={"15px"} height={"15px"}/>
                <img src={lista} alt="Lista" width={"15px"} height={"15px"}/>
                </Link>
            </div>
        </nav>
    )
}


export default Navbar