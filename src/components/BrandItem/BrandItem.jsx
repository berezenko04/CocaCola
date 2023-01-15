import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './BrandItem.module.scss'

const BrandItem = ({ imgSrc, alt, icon }) => {
    return (
        <Link to=''>
            <div className={styles.item}>
                <img src={imgSrc} alt={alt} />
                <div className={styles.item__icon}>{icon}</div>
            </div>
        </Link>
    )
}

BrandItem.propTypes = {
    imgSrc: PropTypes.string,
    alt: PropTypes.string,
    icon: PropTypes.element
}

export default BrandItem
