import styles from './Brand.module.scss'

import Layout from '../../layouts/MainLayout'
import OurBrands from '../../components/OurBrands/OurBrands'
import ColaEnergyItem from '../../components/CocaEnergyItem/ColaEnergyItem'
import ColaEnergy from '../../assets/img/cola-energy.webp'
import { useSelector } from 'react-redux'

const Brand = () => {

    const peculiaritiesWithSugar = [
        'Напиток доступен в баночке 250мл',
        'Напиток не содержит таурин',
        'Относится к версии напитка с сахаром.'
    ];

    const peculiaritiesWithoutSugar = [
        'Напиток доступен в баночке 250мл',
        'Напиток не содержит таурин',
        'Относится к версии напитка без сахара.'
    ];

    const theme = useSelector((state) => state.theme.theme);

    return (
        <Layout>
            <>
                <section className={styles.head}>
                    <div className="container">
                        <div className={styles.head__wrapper}>
                            <h1>Coca-Cola Energy</h1>
                            <p>Первый энергетический напиток под брендом Coca‑Cola Energy.
                                Напиток доступен в двух вариантах: с сахаром, без сахара и калорий.
                            </p>
                        </div>
                    </div>
                </section>
                <ColaEnergyItem
                    title={'«Кока-Кола Энерджи»'}
                    imgSrc={'./src/assets/img/cola-energy-light.webp'}
                    peculiarities={peculiaritiesWithSugar}
                />
                <section className={`${styles.colaInUkraine} ${theme === 'light' ? styles.colaInUkraine__light : styles.colaInUkraine__dark}`}>
                    <div className="container">
                        <div className={styles.colaInUkraine__wrapper}>
                            <img src={ColaEnergy} alt="Coca-Cola Energy" />
                            <div className={styles.colaInUkraine__content}>
                                <h3>Зустрічай Coca-Cola Energy в Україні</h3>
                                <div className={styles.colaInUkraine__content__text}>
                                    <p>Зустрічай Coca-Cola Energy в Україні</p>
                                    <p>Зустрічай Coca‑Cola Energy — перший енергетичний напій під брендом Coca‑Cola.</p>
                                    <p>Освіжайся та заряджайся зі смаком Coca‑Cola!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ColaEnergyItem
                    title={'«Кока-Кола Энерджи Без сахара»'}
                    imgSrc={'./src/assets/img/cola-energy-dark.webp'}
                    peculiarities={peculiaritiesWithoutSugar}
                    reversed
                />
                <OurBrands className={styles.brands} />
            </>
        </Layout >
    )
}

export default Brand
