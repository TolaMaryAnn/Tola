import React from 'react'
import { BsTwitter, bsInstagram, BsInstagram } from  'react-icons/bs';
import {BsLinkedin } from 'react-icons/bs';



const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
        <BsTwitter/>
    </div>

    <div>
        <BsInstagram/>
    </div>

    <div>
        <BsLinkedin/>
    </div>
    </div>
  )
}

export default SocialMedia
