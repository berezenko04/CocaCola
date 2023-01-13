import { useSelector } from 'react-redux'

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import { ReactComponent as LogoGradientIcon } from '../../assets/icons/logo-gradient.svg'


const Logo = () => {

    const theme = useSelector((state) => state.theme.theme);

    return (
        <>
            {theme === 'light' ? <LogoIcon /> : <LogoGradientIcon />}
        </>
    )
}

export default Logo
