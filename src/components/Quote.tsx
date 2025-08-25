import QuoteIcon from '../../public/qoute.svg'
import Image from 'next/image'

const Quote = ()=>{
    return(
        <>
         <section className="py-10 lg:py-15">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-center">
                  <div className="w-fit px-4 mx-auto">
                    <div className="border border-grey px-6 py-4 lg:px-10 lg:py-6 relative">
                        <div className='absolute top-0 left-4 translate-y-[-50%] bg-[#f3f3f3] dark:bg-light-black'><Image src={QuoteIcon} className="w-6 h-6 m-1 md:m-2" alt=""/></div>
                        <h3 className='mb-0'>With great power comes great electricity bill.</h3>
                    </div>
                    <div className="w-fit ms-auto border border-grey border-t-0 px-6 py-3 lg:px-8 lg:py-4 relative">
                        <div className='absolute top-0 right-4 translate-y-[-50%] bg-[#f3f3f3] dark:bg-light-black'><Image src={QuoteIcon} className="w-6 h-6 m-1 md:m-2" alt=""/></div>
                        <h3 className='mb-0'>- Dr. Who</h3>
                    </div>
                  </div>
                </div>
            </div>
         </section>
        </>
    )

}

export default Quote