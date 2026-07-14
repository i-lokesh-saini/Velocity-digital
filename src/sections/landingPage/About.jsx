import React from 'react'
import { aboutData } from '../../data/data';




const About = () => {
    return (
        <section id='about' className='p-5 md:max-w-8xl max-w-full mx-auto bg-neutral-950 '>
            <div className="heading-div">
                <h6 className="sub-heading">{aboutData.subHeading}</h6>
                <h2 className="heading">{aboutData.heading}</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5 px-2 py-10 md:px-10">
                {
                    aboutData.aboutCardsInfo.map((cards) => (
                        <div key={cards.id} className={`p-5 md:p-10 border-l-4 ${cards.border} bg-neutral-900 rounded-lg`}>
                            <h3 className='text-white text-lg mb-3 font-bold md:text-2xl'>{cards.title}</h3>
                            <p className='text-gray-400  text-sm md:text-base'>{cards.body}</p>
                        </div>
                    ))
                }
            </div>
            <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-8 px-2">
                {aboutData.aboutbenifites.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div className="text-center flex flex-col items-center p-5 gap-2 bg-neutral-900 rounded-md w-full" key={item.id}>
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