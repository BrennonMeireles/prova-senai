import { Link } from "react-router-dom"

export function CadastrarPage() {
    return(
        <main>
            <section>
                <h1>Cadastro de Usuario</h1>
                <label htmlFor="">Nome</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Senha</label>
                <input type="password" />
                <Link to="/home">
                    <button>Cadastrar</button>
                </Link>
            </section>
        </main>
    )
}