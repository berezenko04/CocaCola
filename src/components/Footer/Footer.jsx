import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './Footer.module.scss'

import Logo from '../../components/Logo/Logo'
import { ReactComponent as TwitterIcon } from '../../assets/icons/socials/twitter.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/icons/socials/youtube.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/socials/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/socials/instagram.svg'


const Footer = () => {

    const footerCategories = [
        { title: 'Студія', links: ['Проекти', 'Проекти'] },
        { title: 'Меню', links: ['About', 'Portfolio', 'Contract'] },
        { title: 'Знайдіть нас тут', links: ['Ukraine', 'Перегляд на картах'] }
    ]

    const socialIcons = [
        <TwitterIcon />, <YoutubeIcon />, <FacebookIcon />, <InstagramIcon />
    ];

    const theme = useSelector((state) => state.theme.theme);

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
                                        <li
                                            key={index}
                                            className={theme === 'light' ? styles.footer__left__categories__item__light : styles.footer__left__categories__item__dark}
                                        >
                                            <Link
                                                to=''
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
                            <li
                                key={index}
                                className={theme === 'light' ? styles.footer__socials__light : styles.footer__socials__dark}
                            >
                                <a target='_blank' href=''>{icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer >
        </div >
    )
}

export default Footer
