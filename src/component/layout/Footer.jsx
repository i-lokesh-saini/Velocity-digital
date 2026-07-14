import React from 'react'
import { footerData } from '../../data/data'

const Footer = () => {
    return (
        <footer className='p-5 md:max-w-8xl max-w-full mx-auto bg-neutral-900'>
            <div className="grid md:grid-cols-4 grid-cols-1 items-center justify-evenly md:w-4/5 w-full mx-auto">
                <div className="p-5">
                    <h1 className='text-neutral-200 text-2xl font-black mb-2'>{footerData.section1.heading}</h1>
                    <p className='text-neutral-400 text-sm'>{footerData.section1.description}</p>
                </div>
                <div className="p-5">
                    <h1 className='text-neutral-200 font-bold mb-2 font-space'>{footerData.section2.heading}</h1>
                    <ul className='text-neutral-400 text-sm'>
                        {footerData.section2.list.map((item, index) => (
                            <li key={index + 1} className='hover:text-(--primary) transition-all duration-300 mb-1'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="p-5">
                    <h1 className='text-neutral-200 font-bold mb-2 font-space'>{footerData.section3.heading}</h1>
                    <ul className='text-neutral-400 text-sm'>
                        {footerData.section3.list.map((item, index) => (
                            <li key={index + 1} className='hover:text-(--primary) transition-all duration-300 mb-1'><a href={item.link}>{item.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="p-5">
                    <h1 className='text-neutral-200 font-bold mb-2 font-space'>{footerData.section4.heading}</h1>
                    <ul className='text-neutral-400 text-sm'>
                        {footerData.section4.list.map((item, index) => (
                            <li key={index + 1} className='hover:text-(--primary) transition-all duration-300 mb-1'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer