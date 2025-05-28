import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Result from '../component/Result'

const ResultPage = () => {
    return (
        <div>
            <Header />
            <div className='max-w-[800px] mx-auto'>
                <Result />
                <Footer />
            </div>
        </div>
    )
}

export default ResultPage