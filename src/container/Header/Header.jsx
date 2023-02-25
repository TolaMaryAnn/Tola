import React from 'react'
import './Header.scss';
import { delay, motion } from 'framer-motion';
// import { AppWrap } from '../../wrapper'; 
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration:1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5}}
        className='app__header-info'
      
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className='p-text' style={{color:'white'}}>Hello, I am</p>
              <h1 className='head-text' >Omotola</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Frontend developer</p>
          </div>

        </div>

      </motion.div>



      <motion.div
         whileInView={{ opacity: [0, 1]}}
         transition={{ duration: 2, delayChildren: 0.5}}
         className='app__header-img'
      >
        <img style={{width:500,height:600}} src={images.profile} alt='profile'/>
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration:3, ease: 'easeInOut'}}
          
          
          className= 'overlay_circle'
          src={images.circle}
          alt= 'profile'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.sass, images.js]. map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// export default AppWrap(Header, 'home');
export default Header;