import "./Alunos.css"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import AlunosCards from "../../components/Cards/Cards-alunos/AlunosCards"
export default function Alunos(){
    return(
        <>
        <Navbar/>
        <div className="aside-navigation">
            <Sidebar />
        </div>
        <div className="container-card">
            <AlunosCards />
        </div>
       
        </>
    )
}