import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiNavigation } from 'react-icons/bi';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { projectData } from './proectsData';

const Projects = () => {
  return (
    <motion.div
      id='Projects'
      className='border p-padding'
      initial={{ opacity: 0, y: -20 }} // Initial animation settings
      animate={{ opacity: 1, y: 0 }} // Animation settings when component mounts
      transition={{ duration: 0.5, delay: 0.2 }} // Animation transition duration and delay
    >
      <div>
        <h1 className='text-5xl font-bold text-center text-white'>My Projects</h1>
      </div>

      <motion.div
        className='projects rounded-lg grid grid-cols-3 gap-8 place-items-center mt-20'
        initial={{ opacity: 0 }} // Initial animation settings
        animate={{ opacity: 1 }} // Animation settings when component mounts
        transition={{ duration: 1.5, delay: 0.4 }} // Animation transition duration and delay
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className='projects-holder rounded-lg p-4'
            whileHover={{ scale: 1.05 }} // Scale animation on hover
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }} // Initial animation settings for sliding effect
            animate={{ opacity: 1, x: 0 }} // Animation settings when component mounts
            transition={{ duration: 0.5, delay: index * 0.1 }} // Animation transition duration and delay
            viewport={{ once: true }} // Animate only once when in view
          >
            <div className=''><img className='image rounded-md h-[100%] w-[100%]' src={project.image} alt={project.title} loading='lazy' /></div>

            <div className='glinks flex py-4 justify-between'>
              <a href={project.githubLink} rel='noopener' target='_blank'><FaGithub className='project-icon' /></a>
              <a href={project.liveLink} rel='noopener' target='_blank'><BiNavigation className='project-icon' /></a>
            </div>

            <div>
              <p className='p-desc text-center'>
                <span>{project.title}</span><br />
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
