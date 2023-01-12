import styles from './Logo.module.scss'

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import { useSelector } from 'react-redux'

const Logo = () => {

    const theme = useSelector((state) => state.theme.theme);

    return (
        <LogoIcon className={theme === 'dark' ? styles.dark : ''} />
    )
}

export default Logo
