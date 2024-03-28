import honore from "../Assets/Dev-Honore.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {

  return (
    <div id='Home' className='flex justify-between p-padding'>
      <div className='honore intro w-2/5 '>
        <div className='mynameb1 py-6 px-5  rounded-t-lg bshadow1'>
          <div className='bg-pink-500 rounded-full w-14 h-14 bg-opacity-40 flex items-center justify-center p-8'>   <FontAwesomeIcon className='iconu' icon={faUser} /></div>
          <div className='pt-4 pb-2 text-white'>
            <h1 className='text-6xl font-bold'>Hi, I’m <span className='text-[#ff014f]'> Asin</span> </h1>

            <p className='py-3 text-lg font-normal text-[#c4cfde]'>Front end developer
              with a passion for<br />crafting intuitive digital experiences.</p>
          </div>
          <div className='mediadetails1 -mt-3 '>
            <div className='mediadetails'>
              <FontAwesomeIcon className='icons' icon={faFile} />
              <p className='ml-1'>Web designer & developer</p>
            </div>

            <div className='mediadetails'>
              <FontAwesomeIcon className='icons' icon={faEnvelope} />
              <p>asinhonore823@gmail.com</p>
            </div>

            <div className='mediadetails'>
              <FontAwesomeIcon className='icons' icon={faLocationDot} />
              <p className='ml-2'>lagos,Nigeria</p>
            </div>
          </div>
        </div>
        <div className='mydetailsb2 pl-5 pb-7 py-3 mt-8 rounded-b-lg'>
          <p className=' text-lg font-normal py-6 text-white'>Download my curriculum vitae:</p>

          <div className='space-x-6  sm:flex'>
            <a
              href='Resume icon.pdf'
              download="icon.pdf"
            ><button className='btn-box-shadow lg:px-10 py-3 rounded-md btn-hover px-7'>
                Download Cv
              </button>  </a>
            <Link to="#Contact" smooth>
              <button className=' btn-box-shadow lg:px-10 py-3 rounded-md btn-hover px-7'>Contact me</button>
            </Link>
          </div>

        </div>
      </div>
      <div className='imgholder rounded-lg'>

        <img src={honore} alt='image of honore' className='image rounded-lg' loading='lazy' />

      </div>

    </div>
  )
}

export default Home