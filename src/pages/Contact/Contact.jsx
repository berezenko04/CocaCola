import { Link } from 'react-router-dom'

import styles from './Contact.module.scss'

import Layout from '../../layouts/MainLayout';
import ContactImage from '../../assets/img/contact.webp'
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg'
import { ReactComponent as PhoneIcon } from '../../assets/icons/calling.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/message.svg'
import { ReactComponent as ScrapIcon } from '../../assets/icons/scrap.svg'
import { useSelector } from 'react-redux';


export const Contact = () => {

    const list = [
        { title: 'Інформаційна лінія для споживачів', link: '' },
        { title: 'ТОВ "Кока-кола Україна Лімітед"', link: '' },
        { title: 'ТОВ «Кока-кола Беверіджзиз Україна Лімітед»', link: '' }
    ];

    const contactList = [
        { title: 'Гаряча лінія:', icon: <PhoneIcon />, path: '0800-30-80-08', link: 'tel:0800-30-80-08' },
        { title: 'Пошта:', icon: <MailIcon />, path: 'ccbu@cchellenic.com', link: 'mailto:ccbu@cchellenic.com' },
        { title: 'Веб-сайт:', icon: <ScrapIcon />, path: 'https://ua.cola-colahellenic.com/', link: 'https://ua.cola-colahellenic.com/' }
    ]


    const theme = useSelector((state) => state.theme.theme);

    return (
        <Layout>
            <>
                <div className="container">
                    <img className={styles.contactImage} src={ContactImage} alt="Contact" />
                    <section className={styles.contacts}>
                        <div className={styles.contacts__content}>
                            <div className={styles.contacts__content__head}>
                                <h1>Контакты</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                            </div>
                            <div className={styles.contacts__content__body}>
                                <ul className={styles.contacts__content__body__list}>
                                    {list.map((obj, index) => (
                                        <li key={index} className={styles.contacts__content__body__list__item}>
                                            <Link
                                                to={obj.link}
                                                className={styles.contacts__content__body__list__item__link}
                                            >
                                                {obj.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.contacts__content__body__contactList}>
                                    <div className={styles.contacts__content__body__contactList__address}>
                                        <div className={styles.contacts__content__body__contactList__address__top}>
                                            <LocationIcon className={styles.icon} />
                                            <p>Адресa:</p>
                                        </div>
                                        <span>
                                            Броварський район, Велика Димерка,
                                            51-й км Санкт-Петербурзького шосе, Київська обл.,
                                            07442, Україна
                                        </span>
                                    </div>
                                    <ul className={styles.contacts__content__body__contactList__info}>
                                        {contactList.map((obj, index) => (
                                            <li key={index}>
                                                {obj.icon}
                                                <p>{obj.title}</p>
                                                <a
                                                    target='_blank'
                                                    href={obj.link}
                                                    className={theme === 'light' ? styles.light : styles.dark}
                                                >
                                                    {obj.path}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20255.688596157335!2d30.861921378759764!3d50.60926083593123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d527ad86241deb%3A0x3ef448cf316dbfcc!2sIp%20%22Koka-Kola%20Beveridzhyz%20Ukraine%20Limited%22!5e0!3m2!1sen!2sua!4v1673606208578!5m2!1sen!2sua"
                            width="580"
                            height="700"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.contacts__map}
                        />
                    </section>
                </div>
            </>
        </Layout>
    )
}

export default Contact;