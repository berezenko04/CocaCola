import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './Home.module.scss'

import Layout from '../../layouts/mainLayout'
import CocaCola from '../../assets/img/coca-cola.webp'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import OurCompany from '../../assets/img/our-company.webp'
import AboutUs from '../../assets/img/learn-us.webp'
import Empty from '../../assets/img/empty.webp'
import Accordeon from '../../components/Accordeon/Accordeon'
import OurBrands from '../../components/OurBrands/OurBrands'


const Home = () => {

    const companyItemAchieves = [
        '200+', '800+', '300+', '130+'
    ];

    const theme = useSelector((state) => state.theme.theme);



    return (
        <Layout>
            <>

                <section className={styles.enjoy}>
                    <div className="container">
                        <div className={styles.enjoy__wrapper}>
                            <div className={styles.enjoy__content}>
                                <h1>Відчуй смак насолоди</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                                <ButtonPrimary
                                    text={'Дізнатися більше'}
                                    link={'/CocaCola/brands'}
                                />
                            </div>
                            <img src={CocaCola} alt="CocaCola" />
                        </div>
                    </div>
                </section>
                <section className={styles.company}>
                    <div className="container">
                        <div className={styles.company__wrapper}>
                            <img src={OurCompany} alt="Our Company" />
                            <div className={styles.company__content}>
                                <h2>Наша компанія</h2>
                                <div className={styles.company__content__body}>
                                    <div className={styles.company__content__body__left}>
                                        {companyItemAchieves.map((achieve, index) => (
                                            <div key={index} className={styles.company__content__body__left__item}>
                                                <span>{achieve}</span>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.company__content__body__right}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                                            lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                                            vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                                            fermentum dui faucibus in ornare quam
                                        </p>
                                        <ButtonPrimary
                                            text={'Переглянути'}
                                            link={'/CocaCola/brands'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.aboutUs}>
                    <div className="container">
                        <div className={styles.aboutUs__wrapper}>
                            <div className={styles.aboutUs__content}>
                                <div className={styles.aboutUs__content__top}>
                                    <h2>Дізнайся про нас</h2>
                                    <p>Відкрий для себе нашу історію, місію, цінності,
                                        як ми працюємо та розвиваємося в Україні та світі.
                                    </p>
                                </div>
                                <div className={styles.aboutUs__content__article}>
                                    <p>В Україні «Кока-Кола» однією з перших міжнародних компаній виявила
                                        зацікавленість працювати на місцевому ринку. Компанія інвестує в
                                        економіку нашої країни від 1992 року.
                                        Перший завод в Україні відкрився у Львові 1994 року. А вже 1998 року
                                        на повну потужність запрацював новозбудований завод компанії
                                        «Кока-Кола Беверіджиз Україна» біля міста Бровари, на Київщині.
                                    </p>
                                    <ButtonPrimary
                                        text={'Читати далі'}
                                        link={''}
                                    />
                                </div>

                            </div>
                            <img src={AboutUs} alt="About Us" />
                        </div>
                    </div>
                </section>
                <OurBrands />
                <section className={styles.news}>
                    <div className="container">
                        <div className={styles.news__wrapper}>
                            <div className={styles.news__top}>
                                <h2>Новини</h2>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit ut aliquam,
                                    purus sit amet luctus venenatis
                                </p>
                            </div>
                            <div className={styles.news__content}>
                                <article className={styles.news__content__article}>
                                    <div className={styles.news__content__article__head}>
                                        <span>25.07.2021</span>
                                        <h3>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            ut aliquam, purus sit amet luctus venenatis
                                        </h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                        rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
                                        est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                                        scelerisque fermentum dui faucibus in ornare quam viverra
                                    </p>
                                    <Link to='' className={styles.news__content__article__link}>Read more</Link>
                                </article>
                                <img src={Empty} alt="News" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.form} ${theme === 'light' ? styles.form__light : styles.form__dark}`}>
                    <div className="container">
                        <div className={styles.form__wrapper}>
                            <h2>Залиште заявку</h2>
                            <div className={styles.form__content}>
                                <p>
                                    Залиште заявку і отримаєте безкоштовний напій
                                    з вашим надписом на пляшці.
                                </p>
                                <ButtonPrimary
                                    text={'Подати заявку'}
                                    link={''}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.questions}>
                    <div className="container">
                        <div className={styles.questions__wrapper}>
                            <div className={styles.questions__top}>
                                <h2>Часті питання</h2>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit ut aliquam
                                </p>
                            </div>
                            <div className={styles.questions__accordeons}>
                                <Accordeon />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Layout >
    )
}

export default Home
