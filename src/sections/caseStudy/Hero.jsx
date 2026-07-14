import React from 'react'
import { Link } from 'react-router';
import { LuArrowLeft } from 'react-icons/lu';

const Hero = ({ study }) => {
    return (
        <section id='hero'>
            {/* Hero */}
            <div className="px-5 md:px-20 max-w-6xl mx-auto">
                <Link to="/" className=" inline-flex items-center gap-2 text-neutral-400 hover:text-(--primary) mb-6 font-normal text-base">
                    <LuArrowLeft className='text-lg' /> Back to home
                </Link>
                <p className="sub-heading">{study.hero.badge}</p>
                <h1 className="text-white font-black text-3xl md:text-5xl leading-tight mb-4">{study.hero.title}</h1>
                <p className="text-gray-400 md:text-lg text-base mb-8 max-w-3xl">{study.hero.subtitle}</p>
                <div className="rounded-xl overflow-hidden mb-14">
                    <img src={study.hero.image} alt={study.hero.title} className="w-full h-[300px] md:h-[450px] object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Hero