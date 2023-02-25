import './Skills.scss'
import React, {useEffect, useState} from 'react'
import {Tooltip as ReactTooltip} from 'react-tooltip'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import {AppWrap , MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'


const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  const query = '*[_type == "experiences"]'
  const skillQuery = '*[_type == "skills"]'

  client.fetch(query).then((data) => {

    console.log(data)
    setExperience(data)
  })

  client.fetch(skillQuery).then((data) => {
    setSkills(data)
  })
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.imgUrl)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
              {/* {console.log( 'here' ,experience.works)} */}
            {experience?.map((experience) => (
            
              <motion.div
                className='app__skills-exp-item'
                key={experience.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experience.works.map((work) => (
                      <>
                      <motion.div
                       whileInView={{opacity: [0, 1]}}
                       transition={{duration: 0.5}}
                       className="app__skills-exp-work"
                      data-tip
                      data-for= {work.name}
                      key={work.name}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
        
                        <p className='p-text'>{work.company}</p>

                        <h5 className='p-text'>{work.desc}</h5>
                      </motion.div>
                      {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip> */}
                      </>
                  ))}

                </motion.div>
              </motion.div>
            
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')

