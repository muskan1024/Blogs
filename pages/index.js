import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import FeaturedCard from '@/components/FeaturedCard'
import Feed from '@/components/Feed'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <div className='bg-[rgb(11,17,33)]'>
    <div className='bg-blue-100'>
      {/* <motion.div className=''> */}
        {/* <div className='bg-[rgb(11,17,33)]'> */}
        {/* <img src='bg-gif2.gif' alt='background-img' className='fixed w-full h-full' />
      </motion.div> */}
        <NavBar />
        {/* <FeaturedCard /> */}
        <section>
          <Feed />
        </section>
        <Footer />

    </div>
  )
}
