import { FaHtml5, FaReact, FaFigma, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiCss3, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FiFramer } from 'react-icons/fi';
import { TbBrandNextjs } from "react-icons/tb"; // Imported next to use TiFlowSwitch as the icon for Next.js
import { motion } from 'framer-motion';

const Skills = () => {

  const skills = [
    { id: 1, icon: <FaHtml5 />, name: "Html" },
    { id: 2, icon: <SiCss3 />, name: "Css" },
    { id: 3, icon: <SiJavascript />, name: "Javascript" },
    { id: 4, icon: <SiTypescript />, name: "Typescript" },
    { id: 5, icon: <FaReact />, name: "React" },
    { id: 6, icon: <SiTailwindcss />, name: "Tailwind" },
    { id: 7, icon: <FiFramer />, name: "F.motion" },
    { id: 8, icon: <FaFigma />, name: "Figma" },
    { id: 9, icon: <FaGitAlt />, name: "Git" },
    { id: 10, icon: <FaGithub />, name: "Github" },
    { id: 11, icon: <FaNpm />, name: "N.P.manager" },
    { id: 12, icon: <TbBrandNextjs />, name: "Next.js" },
  ];


  const skillAnimate = {
    offscreen: {
      opacity: 0, translateX: -50, translateY: -50
    },
    onscreen: (key: number) => ({
      opacity: 1, translateX: 0, translateY: 0, transition: {
        duration: 0.2, delay: key * 0.05,
      }
    }),

  }


  return (
    <div id='Skills' className='border  p-padding'>
      <div> <h1 className='text-5xl font-bold text-center text-white'>My Tools</h1></div>
      <div className='iconsparent grid grid-cols-4 gap-6 place-items-center mt-20'>
        {skills.map((skill, i) => (
          <motion.div className='box btn-box-shadow' key={skill.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            custom={i}
            variants={skillAnimate}
          >
            <div className='ricons'>
              {skill.icon}
              <p className='icons-name uppercase pt-3 font-light'>{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills