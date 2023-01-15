import styles from './OurBrands.module.scss'


import BrandItem from '../../components/BrandItem/BrandItem'
import { ReactComponent as CocaColaIcon } from '../../assets/icons/coca-cola.svg'
import { ReactComponent as FantaIcon } from '../../assets/icons/fanta.svg'
import { ReactComponent as SpriteIcon } from '../../assets/icons/sprite.svg'
import { ReactComponent as SchweppesIcon } from '../../assets/icons/schweppes.svg'


const OurBrands = () => {

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
                                imgSrc={`images/${obj.imgUrl}`}
                                alt={obj.alt}
                                icon={obj.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}


export default OurBrands
