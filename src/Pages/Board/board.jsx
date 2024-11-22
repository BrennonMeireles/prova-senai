import './board.css'

import { Link } from 'react-router-dom'

export default function Board() {
    return (
        <>
            <nav>
                <h1>Kan Ban</h1>
                <ul>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <Link to="/">
                        <li>Sair</li>
                    </Link>
                    <Link to="/cadastrar">
                        <li>Cadastrar</li>
                    </Link>
                </ul>

            </nav>
            <div className="board">
                <article>
                    <h1>A Fazer</h1>
                    <div>
                        <div className="card">
                            <h4>teste</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tortor non purus pulvinar efficitur iaculis in nisi. Aliquam erat volutpat. Etiam velit </p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <h4>teste</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tortor non purus pulvinar efficitur iaculis in nisi. Aliquam erat volutpat. Etiam velit </p>
                        </div>
                    </div>
                </article>
                <article>
                    <h1>Em Desenvolvimento</h1>
                    <div>
                        <div className="card">
                            <h4>teste</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tortor non purus pulvinar efficitur iaculis in nisi. Aliquam erat volutpat. Etiam velit </p>
                        </div>
                    </div>
                </article>
                <article>
                    <h1>Feito</h1>
                    <div>
                        <div className="card">
                            <h4>teste</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tortor non purus pulvinar efficitur iaculis in nisi. Aliquam erat volutpat. Etiam velit </p>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}