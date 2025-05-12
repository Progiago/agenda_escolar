import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Calendar from "../../components/Calendar/Calendar";
import "./Home.css"

export default function Home(){
    return(
        <>
            <div className="navigation-home">
                <Navbar />
            </div>
            <main className="main-container">
            <div className="aside-navigation">
                    <Sidebar />     
            </div>
            <div className="calendar-container">
                <div><h2>Agendar Reuniões</h2></div>
                <select name="" id="">Digite seu horario</select>
                <select name="" id=""></select>
                <Calendar/> 
            </div>
            </main>
            
            
            


            
            
        </>
    )
}