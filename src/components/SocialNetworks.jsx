import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/edson-gomes-5307b21a2/' },
    { name: "github", icon: <FaGithub />, link: 'https://github.com/biduedson' },
    { name: "instagran", icon: <FaInstagram />, link: 'https://www.instagram.com/biduedson/' }

]

function SocialNetworks() {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks
