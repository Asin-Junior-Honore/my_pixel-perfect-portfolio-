import React from 'react'
import Form from './Form'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import contactMe from "../Assets/contact-me2.png"

const Contact = () => {
  return (
    <div id='Contact' className='border p-padding'>
      <div className=''> <h1 className='text-5xl font-bold text-center text-white'>Contact Me</h1></div>
      <div className='contact flex justify-between items-center mt-20 '>
        <div className='contact1 p-4 rounded-lg text-white'>
          <div className='contactme-div'> <img className='image rounded-md' src={contactMe} alt='contact me' /> </div>
          <h1 className='font-bold text-3xl pb-2'>Asin Junior Honore</h1>
          <p className='font-normal text-lg'>I am available for freelance work. Connect<br />with me via WhatsApp or call in to my account.</p>

          <div className='py-3'>
            <p>  Phone: +234 911 812 9406</p>
            <p>Email: asinhonore823@gmail.com</p>
          </div>

          <div>
            <h5>Connect with me:</h5>
            <div className='flex mt-8 mb-5 '>

              <a className='btn-hover social  btn-box-shadow' href='https://www.instagram.com/asin_tech/' rel='noopener' target='_blank'> <FaInstagram /></a>
              <a className='btn-hover social  btn-box-shadow' href='https://twitter.com/Asin_tech' rel='noopener' target='_blank'><FaTwitter /></a>
              <a className='btn-hover social  btn-box-shadow' href='https://www.linkedin.com/in/asin-honore-6427042a2/' rel='noopener' target='_blank'><FaLinkedinIn /></a>

            </div>
          </div>
        </div>
        <div className='contact2'>
          <Form />
        </div>


      </div>



    </div>
  )
}

export default Contact