import React from 'react'
import { motion } from 'framer-motion'

const FeaturedCard = () => {
    return (
        <div className='relative bg-[rgb(75,186,141)] w-full h-[10%] opacity-90 '>

            {/* <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 w-screen h-20">
                <img src='bg-gif2.gif' alt='background-img' className=' w-full h-full' />
            </motion.div>   */}
            {/* <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className='relative z-10' */}
                {/* // className="w-full h-full object-cover" */}
                {/* > */}
                {/* <h1 className='text-4xl font-bold text-white p-4 text-center'>Categories</h1> */}
            {/* </motion.div> */}
        </div>
    )
}

export default FeaturedCard