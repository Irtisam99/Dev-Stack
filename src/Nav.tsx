import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './assets/logo-text.png'

const Nav = () => {
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <nav className='flex justify-between border-amber-400 border items-center container mx-auto'>
                
                <GiHamburgerMenu className='md:hidden size-8'/>

                
                <img src={logo} alt="" className='ml-20 md:ml-0'/>

                <ul className='hidden md:flex gap-4'>
                    <li className='text-[#DB2777]'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className='flex gap-2'>
                    <button>Sign In</button>
                    <button className='bg-[#D91B7E] text-white rounded-3xl px-3 py-1'>Sign Up</button>
                </div>

            </nav>
              <div className="divider -mt-0.5"></div>

        </div>
    );
};

export default Nav;