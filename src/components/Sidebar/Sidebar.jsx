import "./Sidebar.css"
import { FaHome } from "react-icons/fa";
import { PiDesk, PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
const Sidebar = () => {
    return(
        <aside className="nav-container">
            <nav className="nav">
                <div className="container-list">
                    <FaHome />
                    <a href="" className="link">Home</a>
                    <div className="sep"></div>
                </div>
                <div className="container-list">
                    <PiDesk />
                    <a href="" className="link">Turmas</a>
                    <div className="sep"></div>
                </div>
                <div className="container-list">
                    <PiStudentBold />
                    <a href="" className="link">Alunos</a>
                    <div className="sep"></div>
                </div>
                <div className="container-list">
                    <GiTeacher />
                    <a href="" className="link">Professores</a>
                    <div className="sep"></div>
                </div>
            </nav>
        </aside>
    )
}


export default Sidebar