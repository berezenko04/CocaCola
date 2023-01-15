import PropTypes from 'prop-types'

import styles from './ColaEnergyItem.module.scss'

import { ReactComponent as BookmarkIcon } from '../../assets/icons/bookmark.svg'


const ColaEnergyItem = ({ title, imgSrc, peculiarities, reversed = false }) => {

    const nutritions = [
        'Объем на 100 мл',
        'Калории 179 кДж / 42 ккал',
        'Жиры 0г',
        'Углеводы 10,3г',
        'Сахара	10,3г',
        'Белки	0г',
        'Ниацин	1,6мг 9%**',
        'Витамин B6	0,15мг 7,5%**'
    ];

    return (
        <section className={styles.cola}>
            <div className="container">
                <div className={styles.cola__wrapper}>
                    <div className={styles.cola__top}>
                        <h2>{title}</h2>
                        <p>
                            Первый энергетический напиток под брендом Coca‑Cola.
                            Напиток доступен в баночках объемом 250 мл.
                        </p>
                    </div>
                    <div className={`${styles.cola__body} ${reversed ? styles.cola__body__reversed : styles.cola__body__default}`}>
                        <div className={styles.cola__body__content}>
                            <ul className={styles.cola__body__content__peculiarities}>
                                {peculiarities.map((item, index) => (
                                    <li key={index}>
                                        <BookmarkIcon />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.cola__body__content__composition}>
                                <h3>Состав</h3>
                                <p>
                                    очищенная вода, сахар, глюкоза, регуляторы кислотности
                                    (лимонная кислота, ортофосфорная кислота, гидрокарбонат натрия),
                                    натуральные ароматизаторы, краситель сахарный колер IV, кофеин (320 мг/л),
                                    консерванты (бензоат натрия, сорбат калия), витамины (ниацин, витамин В6),
                                    экстракт гуараны (11 мг/л).
                                </p>
                            </div>
                        </div>
                        <div className={styles.cola__body__image}>
                            <img src={imgSrc} alt="Coca-Cola Energy" />
                        </div>
                    </div>
                    <div className={styles.cola__info}>
                        <div className={styles.cola__info__nutritional}>
                            <h3>Пищевая ценность</h3>
                            <ul>
                                {nutritions.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.cola__info__recommend}>
                            <p>* рекомендуемая суточная потребность - 2500 ккал в соответствии с ТР ТС 022/2011</p>
                            <p>** от средней суточной потребности в витаминах в соответствии с ТР ТС 022/2011</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

ColaEnergyItem.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    peculiarities: PropTypes.array,
    reverse: PropTypes.bool
}

export default ColaEnergyItem
