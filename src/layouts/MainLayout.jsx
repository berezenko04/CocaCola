import PropTypes from 'prop-types'

import Header from '../components/Header/Header'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element
}


export default MainLayout
