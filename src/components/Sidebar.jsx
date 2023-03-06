
import SocialNetworks from './SocialNetworks'
import Informationcontainer from './Informationcontainer'

import Avatar from '../img/my_photo.jpg'

import '../styles/components/sidebar.sass'



const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <img src={Avatar} alt="Edson Gomes" />

            <p className="title">Edson Gomes</p>
            <p className='my-name'>Desenvolvedor</p>
            <SocialNetworks />
            <Informationcontainer />
            <a href="" className='btn'>
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar
