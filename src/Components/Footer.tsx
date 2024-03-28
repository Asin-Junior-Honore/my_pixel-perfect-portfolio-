const Footer = () => {
    return (
        <div id='footer' className='p-padding border text-gray-300'>
            <div className='flex justify-center items-center'>
                <h3 className='text-sm sm:text-base lg:text-lg xl:text-xl text-center'>
                    Designed and Developed by Asin Junior Honore &copy; {new Date().getFullYear()}
                </h3>
            </div>
        </div>


    )
}

export default Footer