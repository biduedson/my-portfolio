import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

function Informationcontainer() {
    return (
        <section id='information-container'>
            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>(11)93223-7059</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>E-mail</h3>
                    <p>biduzao.bidu21@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p>Francisco Morato / SP</p>
                </div>
            </div>
        </section>
    )
}

export default Informationcontainer
