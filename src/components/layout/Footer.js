import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
    return (
        <footer>
            <h3 className={styles.social_list}>This is website Footer</h3>
            <ul className={styles.social_list}>
                <li> 
                    <FaLinkedin />
                </li>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
                <li>
                    <FaTiktok />
                </li>
            </ul>
        </footer>
    )
}

export default Footer;