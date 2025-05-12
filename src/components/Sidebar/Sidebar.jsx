import "./Sidebar.css"
import { FaHome } from "react-icons/fa";
import { PiDesk, PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
const Sidebar = () => {
    return(
        <aside className="side-container">
            <nav className="sidenav-container">
                <div className="icon-container">
                    <FaHome className="icon"/>
                    <a href="" className="link">Home</a>
               
                </div>
                <div className="sep"></div>
                <div className="icon-container">
                    <PiDesk className="icon"/>
                    <a href="" className="link">Turmas</a>
                </div>
                <div className="sep"></div>
                <div className="icon-container">
                    <PiStudentBold className="icon"/>
                    <a href="" className="link">Aluno</a>
                </div>
                <div className="sep"></div>
                <div className="icon-container">
                    <GiTeacher className="icon"/>
                    <a href="" className="link">professor</a>
                </div>
                <div className="sep"></div>
            </nav>
        </aside>
    )
}


export default Sidebar