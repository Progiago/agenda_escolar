import "./Navbar.css"
import avatar from "../../assets/do-utilizador.png"
import lista from "../../assets/lista-de-reproducao.png"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="logo">
                <a className="link" href="/">logo</a>
            </h1>
            <div className="button">
                <a href=""><img src={avatar} alt="Logo" width={"15px"} height={"15px"}/>
                <img src={lista} alt="Lista" width={"15px"} height={"15px"}/>
                </a>
            </div>
        </nav>
    )
}


export default Navbar