import React from 'react'

const NavBar = () => {
  return (
    <div className='relative w-full h-fit bg-white shadow-2xl  opacity-90 z-40'>
        <div className='w-full h-full text-center p-2 flex justify-between  px-auto'>
            <img src='/logo1.png' alt='logo' className='relative h-12 pl-5'/>
            <div className=' grid gap-4 grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-center '>
            <a href='/'><h1 className='text-3xl hover:bg-gray-100 hover:rounded-3xl hover:py-1'>Home</h1></a>
            <a href='allBlogs'><h1 className='text-3xl hover:bg-gray-100 hover:rounded-3xl hover:py-1'>Blogs</h1></a>
            <a href='allCategories'><h1 className='text-3xl hover:bg-gray-100 hover:rounded-3xl hover:py-1 '>Categories</h1></a>
            <a href='admin'><button className='text-white font-bold text-xl rounded p-1 px-4 hover:bg-sky-700 hover:rounded-3xl hover:py-1 bg-sky-500'>For Admin</button></a>
            </div>
        </div>
    </div>
  )
}

export default NavBar