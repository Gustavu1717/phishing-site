import './index.scss';

export default function Cabecalho() {
    return (
        <main className='pagina-cabecalho'>

            <div className='cab-principal'>
                <div className='cab-imagem'>
                    <img alt='logo' src='./assets/images/instagram.png' />
                </div>

                <div className='cab-busca'>
                    <img alt='lupa' src='./assets/images/lupa.png'/>
                    <input type='text' placeholder='Pesquisar' />
                </div>

                <div className='cab-itens'>
                    <button id='um'>Entrar</button>
                    <button id='dois'>Cadastre-se</button>
                </div>
            </div>
        </main>
    )
}