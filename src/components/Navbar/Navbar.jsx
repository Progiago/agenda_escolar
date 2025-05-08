import "./Navbar.css"
import avatar from "../../assets/do-utilizador.png"
import lista from "../../assets/lista-de-reproducao.png"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="logo">
                <a className="link" href="/">logo</a>
            </h1>
            <button className="button">
                <a href=""><img src={avatar} alt="Logo" width={"30px"} height={"30px"}/>
                <img src={lista} alt="Lista" width={"30px"} height={"30px"}/></a>
            </button>
        </nav>
    )
}


export default Navbar