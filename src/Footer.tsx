import logo from './assets/logo-text.png'
const Footer = () => {
    return (
        <footer className='my-20'>
            <div className="divider mb-15 border-white opacity-50"></div>

            <div className='md:grid grid-cols-2 container mx-auto'>
                 <div className='flex flex-col justify-center items-center space-y-3 text-center md:space-y-3 '>
                    <img src={logo} alt="" />
                    <p className='max-w-130 text-gray-500'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className='flex gap-4 mt-5 font-semibold'>
                        <span>Github</span>
                       <span className="before:content-['•'] before:mr-4 md:before:content-['']">Twitter</span>
                        <span className="before:content-['•'] before:mr-4 md:before:content-['']">Linkedin</span>
                    </div>
                </div>
                <div className='hidden md:flex justify-between'>
                    <div>
                        <h3 className='font-semibold'>PRODUCT</h3>
                        <div className='flex flex-col mt-2 text-gray-500'>
                            <span>Home</span>
                            <span>Technologies</span>
                            <span>Projects</span>
                        </div>

                    </div>
                    <div>
                        <h3 className='font-semibold'>COMPANY</h3>
                        <div className='flex flex-col mt-2 text-gray-500'>
                            <span>About</span>
                            <span>Contact</span>
                            <span>Careers</span>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold'>LEGAL</h3>
                        <div className='flex flex-col mt-2 text-gray-500'>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                </div>


            </div>
            <div className="divider mt-10 md:mt-20 border-white opacity-50"></div>

            <div className='flex justify-between container mx-auto text-gray-400'>
                <span>&copy; 2026 Dev Stack. All rights reserved.</span>
                <p className='flex gap-2'>
                    <span>Privacy</span>
                    <span>Terms</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;