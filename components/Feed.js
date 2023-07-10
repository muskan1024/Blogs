import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'

export default function Feed() {

    const [blogPosts, setBlogPosts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/getPost');
                const data = await response.json();
                if (response.ok) {
                    setBlogPosts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogPosts();
    }, []);


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/getCategory');
                const data = await response.json();
                if (response.ok) {
                    setCategory(data.data);
                } else {
                    console.error('Failed to fetch category');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);


    return (
        <div>
            <div className=' h-96'>
                <img className='w-[100%] h-[100%] relative z-10 bg-blue-300' src='Blogging-removebg-preview.png' />
            </div>
            <h1 className='relative z-10 text-4xl font-bold text-black p-4 text-center'>Blogs</h1>
            <div className="relative z-10 grid gap-10 mx-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 bg-blue-200 p-4 rounded-lg">
                {blogPosts.map((post) => (
                    <a href='ai'>
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black shadow-lg  shadow-black h-fit rounded-lg overflow-hidden mb-4 hover:-mt-2 hover:p-1 contrast-50 hover:filter-none"
                    >
                        <img
                            src={post.Image}
                            alt="Blog Post"
                            className="w-full h-56 object-cover hover:h-60 "
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4 text-white">{post.title}</h2>
                            <div className="flex items-center text-gray-600 text-sm mb-2">
                                <AiOutlineCalendar className="mr-2" />
                                {post.date}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm pb-2 pl-5">
                                {post.category}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                                <FiUser className="mr-2" />
                                {post.author}
                            </div>
                            <p className="text-gray-700 mt-4"></p>
                            <a href='ai'>
                                <button className="bg-[#FF6701] bg-opacity-90 text-white px-4 py-2 rounded-md mt-4 hover:bg-[#FF6701]">
                                    Read More
                                </button>
                            </a>
                        </div>
                    </motion.div>
                    </a>
                ))}
            </div>
            <h1 className='relative z-10 text-4xl font-bold text-black p-4 text-center'>Categories</h1>
            <div className="relative z-10 grid gap-10 mx-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-blue-200 p-4 rounded-lg mb-7">
                {category.map((category) => (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black shadow-lg shadow-black h-fit rounded-lg overflow-hidden  hover:rounded-full mb-6 hover:text-center"
                    >
                        <a href='/tech'>
                            <img
                                src={category.categoryImage}
                                alt="Blog Post"
                                className="w-full h-52 object-cover "
                            />
                        </a>
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4 text-white">{category.categoryName}</h2>
                            <p className="text-gray-700 mt-4"></p>
                            <button className="bg-[#FF6701] bg-opacity-80 text-white px-4 py-2 rounded-md mt-4 hover:bg-[#FF6701]">
                                <a href='/tech'>
                                    Read More</a>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}