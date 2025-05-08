import LoginCards from "../../components/Cards/Cards-login/LoginCards";
import Navbar from "../../components/Navbar/Navbar";

export default function Login(){
    return(
        <>
            <Navbar/>
            <div className="containerlogin">
                <LoginCards/>
            </div>
        </>
    )
}   