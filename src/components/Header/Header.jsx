import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { setPageId } from '../../redux/slices/pageSlice'


const Header = () => {

    const currentPage = useSelector((state) => state.page.currentPage);
    const dispatch = useDispatch();

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
                            <li key={index}>
                                <Link
                                    className={currentPage === index ? styles.active : ''}
                                    to={obj.link}
                                    onClick={() => dispatch(setPageId(index))}
                                >
                                    {obj.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                           
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header
