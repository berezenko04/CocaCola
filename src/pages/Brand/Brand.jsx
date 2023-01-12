import styles from './Brand.module.scss'

import Layout from '../../layouts/MainLayout'
import OurBrands from '../../components/OurBrands/OurBrands'

const Brand = () => {
    return (
        <Layout>
            <>
                <section>

                </section>
                <OurBrands className={styles.brands} />
            </>
        </Layout>
    )
}

export default Brand
