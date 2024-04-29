import Footer from '@/layout/footer/footer'
import Header from '@/layout/header/header'
import React from 'react'
import TerminalsArea from './terminals-area'
import TerminalsBanner from './terminals-banner'

const Terminals = (props) => {
    return (
        <>
            <Header />
            <TerminalsBanner />
            <TerminalsArea {...props} />
            <Footer />
        </>
    )
}

export default Terminals
