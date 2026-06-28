import React from 'react'
import { aboutCardsInfo, benifites } from '../data/data';




const About = () => {
    return (
        <section id='about' className='px-5 md:pt-24 pt-20 md:max-w-8xl max-w-full mx-auto '>
            <div className="text-left md:px-10 px-2">
                <h6 className="sub-heading"> WHO ARE WE</h6>
                <h2 className="heading"> Built For Brands That Demand Excellence</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5 px-2 py-10 md:px-10">
                {
                    aboutCardsInfo.map((cards) => (
                        <div key={cards.id} className={`p-5 md:p-10 border-l-4 ${cards.border} bg-gray-900 rounded-lg`}>
                            <h3 className='text-white text-lg mb-3 font-bold md:text-2xl'>{cards.title}</h3>
                            <p className='text-gray-400  text-sm md:text-base'>{cards.body}</p>
                        </div>
                    ))
                }
            </div>
            <div className=" flex flex-col md:flex-row gap-4 mx-2 md:mx-8">
                {benifites.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div className="text-center flex flex-col items-center p-5 gap-2 bg-gray-900 rounded-md w-full" key={item.id}>
                            <Icon className="text-white text-3xl" />
                            <h6 className="text-white font-semibold text-xl">{item.title}</h6>
                            <p className="text-gray-400 w-3/4">{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default About