import "./Sidebar.css"
import { FaHome } from "react-icons/fa";
import { PiDesk, PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return(
        <aside className="side-container">
            <nav className="sidenav-container">
                <div className="icon-container">
                    <FaHome className="icon"/>
                    <Link to={"/Home"} className="link">Home</Link>
               
                </div>
                <div className="sep"></div>
                <div className="icon-container">
                    <PiDesk className="icon"/>
                    <Link to={"/Home"} className="link">Turmas</Link>
                </div>
                <div className="sep"></div>
                <div className="icon-container">
                    <PiStudentBold className="icon"/>
                    <Link to={"/Alunos"} className="link">Aluno</Link>
                </div>
                <div className="sep"></div>
                <div className="icon-container">
                    <GiTeacher className="icon"/>
                    <Link to={"/Home"} className="link">professor</Link>
                </div>
                <div className="sep"></div>
            </nav>
        </aside>
    )
}


export default Sidebar