
import './error.css'

import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='container-error'>
            <img src='404-error.png' alt='Página não encontrada' />
            <h1>Página não encontrada!</h1>

            <Link to={"/"}>
                Voltar para Página Inicial
            </Link>
        </div>
    )
}