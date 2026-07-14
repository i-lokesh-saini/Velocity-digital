import React from 'react'

const Testimonial = ({ study }) => {
    return (
        <section id='testimonial' className='mb-10'>
            {/* Testimonial */}
            {study.testimonial && (
                <div className="px-5 md:px-20 max-w-6xl mx-auto">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Testimonial</h2>
                    <div className="bg-neutral-900 border-l-4 border-(--tertiary) rounded-lg p-8">
                        <p className="text-white text-lg italic mb-4">"{study.testimonial.quote}"</p>
                        <div className="flex gap-5 mt-5">
                            <img className='rounded-full w-10 h-10' src={study.testimonial.image} alt={study.testimonial.name} />
                            <div>
                                <p className="text-(--primary) font-semibold">{study.testimonial.name}</p>
                                <p className="text-gray-500 text-sm">{study.testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Testimonial