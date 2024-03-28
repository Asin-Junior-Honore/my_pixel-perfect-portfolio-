import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import { HashLink as Link } from 'react-router-hash-link';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const [showmenu, setShowmenu] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const showNav = () => {
    if (window.scrollY >= 300) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }

  }
  window.addEventListener('scroll', showNav)

  const pageLink = [

    { title: "Home", direct: "#Home" },
    { title: "About", direct: "#About" },
    { title: "Skills", direct: "#Skills" },
    { title: "Projects", direct: "#Projects" },
    { title: "Contact", direct: "#Contact" }
  ]
  const toggleMenu = () => {
    setShowmenu((prevshowmenu) => !prevshowmenu)
  }
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },

  }


  const mobilelinkanimate = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1]
      }
    }, open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1]
      }
    }
  }

  const containerAnimate = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      }
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      }
    }
  }


  return (


    <Router>
      <div className="App ">

        <div className={navbar ? 'navbar active py-3 bg-clip-padding blur-background-filter flex justify-between items-center bg-opacity-80 px-7' : 'navbar flex justify-between items-center bg-opacity-80  py-10 px-7'}>
          <div className='logo'>
            <h1 className='text-white text-5xl font-bold' >Asin</h1>
          </div>
          <div className='navs'>
            <ul className='flex m-0 p-0 justify-center '>
              <li className='li'>
                <Link className="links" to="#" smooth>
                  Home
                </Link>
              </li>

              <li className='li'>
                <Link className="links" to="#About" smooth>
                  About
                </Link>
              </li>

              <li className='li'>
                <Link className="links" to="#Skills" smooth>
                  Skills
                </Link>
              </li>
              <li className='li'>
                <Link className="links" to="#Projects" smooth>
                  Projects
                </Link>
              </li>

              <li className='li'>
                <Link className="links" to="#Contact" smooth>
                  contact
                </Link>
              </li>


            </ul>
          </div>
          <div >
            <Link to="#Contact" smooth>
              <button className='contactbtn btn-box-shadow py-3 px-6 rounded-md btn-hover'>Contact me</button>
            </Link>
          </div>
          <RiMenu3Fill className='burger-menu  cursor-pointer' onClick={toggleMenu} />

          <AnimatePresence>

            {
              showmenu && (
                <motion.div
                  variants={menuVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className='navappear h-screen origin-top fixed w-full top-0 left-0  bg-[#212428]'>
                  <div className='flex h-full flex-col'>
                    <div className='flex justify-between items-center py-7 px-7'>
                      <div className='logo'>
                        <h1 className='text-white text-4xl font-bold' >Asin</h1>
                      </div>
                      <MdOutlineClose className='burger-menu cursor-pointer' onClick={toggleMenu} />
                    </div>


                    <motion.div
                      variants={containerAnimate}
                      initial="initial"
                      animate="open"
                      exit="initial"
                      className='flex h-full justify-center flex-col items-center gap-6'>
                      {
                        pageLink.map((page, index) => {
                          return (
                            <li key={index} onClick={toggleMenu} className='list-none text-white text-3xl font-bold tracking-[2px]'>
                              <Link to={`${page.direct}`} >
                                <div className='overflow-hidden'>
                                  <motion.div
                                    variants={mobilelinkanimate}
                                  >
                                    {page.title}
                                  </motion.div>
                                </div>
                              </Link>
                            </li>
                          )
                        })
                      }

                    </motion.div>


                  </div>

                </motion.div>

              )
            }
          </AnimatePresence>


        </div>
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />

      </div>
    </Router >
  );
}

export default App;
