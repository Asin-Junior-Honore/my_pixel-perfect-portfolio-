import React from 'react'
import honore from "../Assets/Dev-Honore.jpg"
const About = () => {
  return (
    <div id='About' className='flex justify-between items-center p-padding flex-row-reverse border'>
      <div className='aboutmewriteup  w-7/12 '>
        <p className='py-4 font-normal text-color'>VISIT MY PORTFOLIO & HIRE ME</p>
        <h1 className='text-5xl font-bold pb-4 text-white'>About Me</h1>
        <p className='aboutmepara'>
          Greetings! I'm Asin Junior Honore, a passionate front-end developer specializing in HTML, CSS, and JavaScript. I am dedicated to creating visually appealing and user-friendly websites that engage and inspire users. With a keen eye for design and a commitment to delivering seamless digital experiences, I strive to exceed expectations with every project.
          <br />

          I have a strong focus on writing clean and efficient code to ensure optimal performance and maintainability. My expertise lies in responsive web development, allowing websites to adapt seamlessly across various devices and screen sizes. I am constantly staying updated on industry trends and emerging technologies to incorporate the latest innovations into my work.
          <br />

          I thrive on turning ideas into interactive realities, transforming concepts into captivating web interfaces that leave a lasting impression. As a collaborative team player, I enjoy working in dynamic environments where I can contribute my skills and creativity to bring innovative solutions to the forefront.

          <br />
          Let's collaborate to build exceptional web experiences that elevate brands and delight users!
        </p>

        <div className='my-5'>
          <a
            href='Resume icon.pdf'
            download="icon.pdf"
          ><button className='btn-box-shadow lg:px-10 py-3 rounded-md btn-hover px-7'>
              Download My Cv
            </button>  </a>
        </div>
      </div>

      <div className='aboutmeimage  rounded-lg'>

        <img src={honore} alt=' of honore' className='image rounded-lg' loading='lazy' />
      </div>


    </div>
  )
}

export default About
