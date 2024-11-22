import "./login.css"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <main>
            <section>
                <h1>Bem-Vindo!</h1>
                <label htmlFor="">Email</label>
                <input type="text" name="email" />
                <label htmlFor="">Senha</label>
                <input type="password" name="password" />
                <Link to="/home">
                    <button>Entrar</button>
                </Link>
                <Link to="/cadastrar">
                    <button>Cadastrar</button>
                </Link>
            </section>
        </main>
    )
}