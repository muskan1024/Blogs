import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


export default function allCategories() {

    const [category, setCategory] = useState([]);
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
        <div className='bg-blue-100 h-screen'>
            <h1 className='relative z-10 text-4xl font-bold text-black p-4 text-center'>Categories</h1>
            <div className="relative z-10 grid gap-10 mx-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-blue-200 p-4 rounded-lg">
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
