import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'

const Footer = () => {

    const footerCategories = [
        { title: 'Студія', links: ['Проекти', 'Проекти'] },
        { title: 'Меню', links: ['About', 'Portfolio', 'Contract'] },
        { title: 'Знайдіть нас тут', links: ['Ukraine', 'Перегляд на картах'] }
    ]

    const socialIcons = [
        <TwitterIcon />, <YoutubeIcon />, <FacebookIcon />, <InstagramIcon />
    ];

    return (
        <div className="container">
            <footer className={styles.footer}>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__left}>
                        <Logo />
                        <div className={styles.footer__left__categories}>
                            {footerCategories.map((obj, index) => (
                                <ul className={styles.footer__left__categories__item} key={index}>
                                    <li><span>{obj.title}</span></li>
                                    {obj.links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                to=''
                                                className={styles.footer__left__categories__item__link}
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <ul className={styles.footer__socials}>
                        {socialIcons.map((icon, index) => (
                            <li key={index}><Link to=''>{icon}</Link></li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
