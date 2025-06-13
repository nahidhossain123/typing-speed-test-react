import Header from '../component/Header'
import Footer from '../component/Footer'
import Result from '../component/Result'

const ResultPage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='max-w-[800px] w-full flex flex-col flex-1 justify-between mx-auto'>
                <Result />
                <Footer />
            </div>
        </div>
    )
}

export default ResultPage