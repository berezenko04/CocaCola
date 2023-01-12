import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './ButtonPrimary.module.scss'
import { useSelector } from 'react-redux'



const ButtonPrimary = ({ link, text }) => {

    const theme = useSelector((state) => state.theme.theme);

    return (
        <Link to={link} className={`${styles.button} ${theme === 'light' ? styles.light : styles.dark}`}>
            {text}
        </Link>
    )
}

ButtonPrimary.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string
}

export default ButtonPrimary
