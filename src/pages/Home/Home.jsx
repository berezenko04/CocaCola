import { Link } from 'react-router-dom'

import styles from './Home.module.scss'

import Layout from '../../layouts/mainLayout'
import CocaCola from '../../assets/img/coca-cola.webp'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import OurCompany from '../../assets/img/our-company.webp'
import AboutUs from '../../assets/img/learn-us.webp'
import BrandItem from '../../components/BrandItem/BrandItem'
import Empty from '../../assets/img/empty.webp'

import { ReactComponent as CocaColaIcon } from '../../assets/coca-cola.svg'
import { ReactComponent as FantaIcon } from '../../assets/fanta.svg'
import { ReactComponent as SpriteIcon } from '../../assets/sprite.svg'
import { ReactComponent as SchweppesIcon } from '../../assets/schweppes.svg'

const Home = () => {

    const companyItemAchieves = [
        '200+', '800+', '300+', '130+'
    ];

    const brands = [
        {
            imgUrl: 'cola.webp',
            alt: 'CocaCola',
            icon: <CocaColaIcon />
        },
        {
            imgUrl: 'fanta.webp',
            alt: 'Fanta',
            icon: <FantaIcon />
        },
        {
            imgUrl: 'sprite.webp',
            alt: 'Sprite',
            icon: <SpriteIcon />
        },
        {
            imgUrl: 'schweppes.webp',
            alt: 'Schweppes',
            icon: <SchweppesIcon />
        }
    ]

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
                <section className={styles.brands}>
                    <div className="container">
                        <div className={styles.brands__wrapper}>
                            <div className={styles.brands__top}>
                                <h2>Наші бренди</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit ut aliquam, purus sit amet luctus venenatis
                                </p>
                            </div>
                            <div className={styles.brands__list}>
                                {brands.map((obj, index) => (
                                    <BrandItem
                                        key={index}
                                        imgSrc={`./src/assets/img/${obj.imgUrl}`}
                                        alt={obj.alt}
                                        icon={obj.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
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
                <section className={styles.form}>
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
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    )
}

export default Home
