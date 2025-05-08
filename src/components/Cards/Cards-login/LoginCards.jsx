import "./LoginCards.css"


export default function(){
    return(
        <section className="container">
            <div className="cardlogin">
                <h3>Login</h3>
                <input className="input" type="text" />
                <h3>Senha</h3>
                <div>
                    <input className="input" type="text" />
                    <a href="Login">
                    <p className="containerinput">esqueceu a senha?</p>
                    </a>
                </div>
                <div className="entrarbutao">
                    <a href="#">
                        Entrar
                    </a>
                </div>
            </div>
        </section>

    )
}