import React from 'react'
import { testimonialData } from "../data/data";

const Testimonial = () => {
    return (
        <section className="p-5 md:max-w-8xl max-w-full max-w-8xl mx-auto bg-neutral-950 mt-20">
            <div className="heading-div text-center mb-5">
                <p className="heading-2">{testimonialData.subHeading}</p>
                <h2 className="sub-heading-2">{testimonialData.heading}</h2>
            </div>

            <div className="mx-auto w-fit sm:w-[60%] md:w-[60%] ">
                <div className='flex items-center justify-center gap-5 md:flex-row flex-col'>
                    {testimonialData.testimonialCard.map((item) => {
                        const Stars = item.stars.icon;
                        return (
                            <div key={item.id} className='p-8 bg-neutral-900 border border-neutral-600 rounded-md text-white'>
                                <div className="flex gap-1 mb-5">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Stars
                                            key={i}
                                            className={i < item.stars.number ? "text-(--tertiary)" : "text-gray-300"}
                                            size={16}
                                        />
                                    ))}
                                </div>
                                <p className='text-neutral-400 mb-5'>"{item.review}"</p>
                                <div className='flex items-center gap-5 mt-3'>
                                    <img src={item.image} alt={item.name} className='w-8 h-8 rounded-full object-cover' />
                                    <div>
                                        <p>{item.name}</p>
                                        <p className='text-xs text-neutral-400'>{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Testimonial