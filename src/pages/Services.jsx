import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { serviceInfo } from '../data/data'

const Services = () => {
    return (
        <section id='services' className='px-5 pt-12 md:pt-16 md:max-w-8xl max-w-full max-w-8xl mx-auto'>
            <div className="text-left md:px-10 px-2 py-10">
                <h6 className="sub-heading">Our services</h6>
                <h2 className="heading">Performance Engines Tailored To Your Needs</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-2 md:mx-8'>
                {serviceInfo.map((item) => (
                    <div className="bg-gray-900 border-0 border-gray-200 rounded-lg hover:border-2 transition-all duration-300 p-10" key={item.id}>
                        <div className=" ">
                            <div className="bg-gray-500 p-2 w-fit rounded-md">
                                {<item.icon className='text-2xl text-white font-medium' />}
                            </div>
                            <h6 className="text-lg w-2/3 text-white text-left">{item.title}</h6>
                        </div>
                        <p className='text-gray-300 text-base mb-2'>{item.description}</p>
                        <button type='button' className='flex items-center gap-2 text-base font-semibold text-(--primary) hover:text-white'>Learn More <span><FaArrowRight className='text-sm' /></span> </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services