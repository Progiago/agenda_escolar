import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Calendar from "../../components/Calendar/Calendar";
import "./Home.css"

export default function Home() {
    return (
        <>
            <div className="navigation-home">
                <Navbar />
            </div>
            <main className="main-container">
                <div className="aside-navigation">
                    <Sidebar />
                </div>
                <div>
                    <h2  className="title">Agendar Reuniões</h2>
                     <div className="container-select">
                        <select className="select" name="" id="">
                            <option value="">Escolha a turma</option>
                        </select>
                        <select className="select" name="" id="">
                            <option value="">Data e hora</option>
                        </select>
                    </div>    
                    
                </div>
    
                <div className="calendar-container">
                    <Calendar />
                    
                </div>
               
            </main>







        </>
    )
}