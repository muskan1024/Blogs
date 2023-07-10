import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';


export default function allBlogs() {

    const [blogPosts, setBlogPosts] = useState([]);

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

    return (
        <div className='bg-blue-100 h-screen'>
            <h1 className='relative z-10 text-4xl font-bold p-4 text-center'>All Blogs</h1>

            <div className="relative z-10 grid gap-10 mx-4 grid-cols-1 md:grid-cols-3 mb-6 lg:grid-cols-3 bg-blue-200 p-4 rounded-lg">
                {blogPosts.map((post) => (
                    <a href='ai'>
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black shadow-lg shadow-black h-fit rounded-lg overflow-hidden mb-4 hover:-mt-2 "
                    >
                        <img
                            src={post.Image}
                            alt="Blog Post"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4 text-white">{post.title}</h2>
                            <div className="flex items-center text-gray-600 text-sm mb-2">
                                <AiOutlineCalendar className="mr-2" />
                                {post.date}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                                <FiUser className="mr-2" />
                                {post.author}
                            </div>
                            <p className="text-gray-700 mt-4"></p>
                            <button className="bg-[#FF6701] bg-opacity-90 text-white px-4 py-2 rounded-md mt-4 hover:bg-[#FF6701]">
                                Read More
                            </button>
                        </div>
                    </motion.div>
                    </a>
                ))}
            </div>
        </div>
    )
}
