import styles from './NotFound.module.scss'

import Layout from '../../layouts/MainLayout'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import { useSelector } from 'react-redux'

const NotFound = () => {

    const theme = useSelector((state) => state.theme.theme);

    return (
        <Layout>
            <section className={styles.notFound}>
                <div className="container">
                    <div className={styles.notFound__wrapper}>
                        <div className={styles.notFound__content}>
                            <h1>Whoops !
                                Something
                                went wrong
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut aliquam,
                                purus sit amet
                            </p>
                            <ButtonPrimary
                                text={'Go to the main page'}
                                link={'/'}
                            />
                        </div>
                        <div className={`${styles.notFound__error} ${theme === 'light' ? styles.notFound__error__light : styles.notFound__error__dark}`}>
                            <span>404</span>
                            <p>Error</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default NotFound
