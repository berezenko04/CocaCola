import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import Logo from '../../components/Logo/Logo'
import { setPageId } from '../../redux/slices/pageSlice'
import { setTheme } from '../../redux/slices/themeSlice'
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg'

const Header = () => {

    const currentPage = useSelector((state) => state.page.currentPage);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const navLinks = [
        { name: 'Головна', link: '/CocaCola' },
        { name: 'Наші бренди', link: '/CocaCola/brands' },
        { name: 'Дізнайся про нас', link: '/CocaCola/contact' }
    ];

    return (
        <header>
            <div className="container">
                <nav>
                    <Link to='/CocaCola'>
                        <Logo />
                    </Link>
                    <ul>
                        {navLinks.map((obj, index) => (
                            <li key={index} className={theme === 'light' ? styles.light : styles.dark}>
                                <Link
                                    className={theme === 'light' ? (currentPage === index ? styles.lightLink : '') : (currentPage === index ? styles.darkLink : '')}
                                    to={obj.link}
                                    onClick={() => dispatch(setPageId(index))}
                                >
                                    {obj.name}
                                </Link>
                            </li>
                        ))}
                        <li className={styles.themeSwitch} onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
                            {theme === 'light' ? <MoonIcon className={styles.moon} /> : <SunIcon className={styles.sun} />}
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header
