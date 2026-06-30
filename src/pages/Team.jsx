import React, { useState } from 'react';
import { teamData } from '../data/data';

const Team = () => {

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section id='team' className='px-5 md:pt-24 pb-20 pt-20 md:max-w-8xl max-w-full mx-auto  '>
            <div className="heading-div">
                <h6 className="sub-heading">{teamData.subHeading}</h6>
                <h2 className="heading">{teamData.heading}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-white w-11/12 mx-auto">
                {teamData.members.map((item) => (
                    <div className="bg-neutral-900 px-2 pt-5 pb-2 rounded-md scale-90 hover:scale-100 transition-all duration-700 hover" key={item.id} onMouseEnter={() => setHoveredCard(item.id)} onMouseLeave={() => setHoveredCard(null)}>
                        <img src={item.image} alt={item.image.split("/").pop().split(".")[0]} className={`px-2 rounded-md  ${hoveredCard === null ? "grayscale-0" : hoveredCard === item.id ? "grayscale-0" : "grayscale"} `} />
                        <h6 className='p-2 text-xl text-slate-200'>{item.name}</h6>
                        <p className="p-2 pt-0 text-xs text-(--primary)">{item.role}</p>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Team