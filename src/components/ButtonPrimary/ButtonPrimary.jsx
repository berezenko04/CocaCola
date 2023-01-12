import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './ButtonPrimary.module.scss'

const ButtonPrimary = ({ link, text }) => {
    return (
        <Link to={link} className={styles.button}>
            {text}
        </Link>
    )
}

ButtonPrimary.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string
}

export default ButtonPrimary
