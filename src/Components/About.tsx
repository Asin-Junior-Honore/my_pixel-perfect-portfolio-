import React from 'react'
import honore from "../Assets/Dev-Honore.jpg"
const About = () => {
  return (
    <div id='About' className='flex justify-between items-center p-padding flex-row-reverse border'>
      <div className='aboutmewriteup  w-7/12 '>
        <p className='py-4 font-normal text-color'>VISIT MY PORTFOLIO & HIRE ME</p>
        <h1 className='text-5xl font-bold pb-4 text-white'>About Me</h1>
        <p className='aboutmepara'>
          Greetings! I'm Asin Junior Honore
          Passionate front-end developer specializing in HTML, CSS, and <br /> JavaScript, dedicated to creating visually appealing and user-friendly websites. With a focus on<br /> clean and efficient code, I bring a
          keen eye for design and a commitment to delivering seamless<br /> digital experiences. Proficient in responsive web development and constantly staying updated on<br /> industry trends, I thrive on turning ideas into interactive realities. Collaborative by nature,<br /> I enjoy working in dynamic teams to bring innovative solutions to the forefront. Let's build<br />  captivating web interfaces that leave a lasting impression!
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
