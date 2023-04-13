import React from 'react'
import Navart from './Navart'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navart />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
