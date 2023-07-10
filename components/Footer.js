import React from 'react'
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <div>
            <div className='bg-blue-300 h-28 text-4xl p-4 shadow-inner shadow-blue-900 shadow-2xl '>
                <p className='text-2xl text-center font-bold text-slate-900 p-2'>Contact Me:</p>
                <div className='flex gap-6 justify-center '>
                    {/* <a href='https://www.instagram.com/'><FiInstagram className='hover:-mt-1 hover:text-sky-800' /></a> */}
                    <a href='https://github.com/muskan1024'><FiGithub className='hover:-mt-1 hover:text-white' /></a>
                    <a href='https://www.linkedin.com/in/muskan-shaikh-057441255/'><FiLinkedin className='hover:-mt-1 hover:text-white' /></a>
                    <a href='https://twitter.com/Muskan1024'><FiTwitter className='hover:-mt-1 hover:text-white' /></a>
                    <a href='mailto:shaikhmuskan1024@gmail.com'><FiMail className='hover:-mt-1 hover:text-white' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer