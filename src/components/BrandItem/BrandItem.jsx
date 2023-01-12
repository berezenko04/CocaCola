import PropTypes from 'prop-types'

import styles from './BrandItem.module.scss'

const BrandItem = ({ imgSrc, alt, icon }) => {
    return (
        <div className={styles.item}>
            <img src={imgSrc} alt={alt} />
            <div className={styles.item__icon}>{icon}</div>
        </div>
    )
}

BrandItem.propTypes = {
    imgSrc: PropTypes.string,
    alt: PropTypes.string,
    icon: PropTypes.element
}

export default BrandItem
