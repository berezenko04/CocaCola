import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import Logo from '../../components/Logo/Logo'
import { setPageId } from '../../redux/slices/pageSlice'
import { setTheme } from '../../redux/slices/themeSlice'
import { setScrollYOffset } from '../../redux/slices/scrollSlice'
import { setIsMenuOpened } from '../../redux/slices/menuSlice'
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-hamburger.svg'
import { useEffect } from 'react'

const Header = () => {

    const currentPage = useSelector((state) => state.page.currentPage);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    const scrollYOffset = useSelector((state) => state.scroll.scrollYOffset);
    const isMenuOpened = useSelector((state) => state.menu.isMenuOpened);
    const scroll = scrollYOffset > 50;

    const navLinks = [
        { name: 'Головна', link: '/CocaCola/' },
        { name: 'Наші бренди', link: '/CocaCola/brands' },
        { name: 'Дізнайся про нас', link: '/CocaCola/contact' }
    ];

    window.onscroll = () => dispatch(setScrollYOffset(window.pageYOffset));

    const handleMenuClick = () => {
        dispatch(setIsMenuOpened(!isMenuOpened));
    }
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
        console.log(localStorage);
    }, [theme])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage])



    return (
        <header className={theme === 'light' ? (scroll ? styles.header__light : '') : (scroll ? styles.header__dark : '')}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <nav>
                        <Link to='/CocaCola/'>
                            <Logo />
                        </Link>
                        <ul className={styles.navbar}>
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
                            <li className={styles.menuBlock} onClick={handleMenuClick}>
                                <MenuIcon className={`${styles.menu} ${theme === 'light' ? styles.menu__light : styles.menu__dark}`} />
                            </li>
                        </ul>
                    </nav>
                    {isMenuOpened &&
                        <ul className={styles.menuBlock__opened}>
                            {navLinks.map((obj, index) => (
                                <li
                                    key={index}
                                    className={theme === 'light' ? styles.light : styles.dark}
                                    onClick={() => dispatch(setIsMenuOpened(false))}
                                >
                                    <Link
                                        className={theme === 'light' ? (currentPage === index ? styles.lightLink : '') : (currentPage === index ? styles.darkLink : '')}
                                        to={obj.link}
                                        onClick={() => dispatch(setPageId(index))}
                                    >
                                        {obj.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </header >
    )
}

export default Header
