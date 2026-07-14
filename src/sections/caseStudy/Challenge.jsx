import React from 'react'

const Challenge = ({ study }) => {
    return (
        <section id='challenge'>
            {/* Challenge */}
            {study.challenge && (
                <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16 flex flex-col md:flex-row">
                    <div>
                        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                            {typeof study.challenge === 'string' ? 'The Challenge' : study.challenge.title}
                        </h2>
                        <p className="text-neutral-200 mb-4 max-w-2xl font-normal">
                            {typeof study.challenge === 'string' ? study.challenge : study.challenge.description}
                        </p>
                        {study.challenge.problems && (
                            <ul className="list-disc list-inside text-neutral-400 space-y-1">
                                {study.challenge.problems.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        )}
                    </div>
                    <div className='p-5 overflow-hidden'>
                        <img src={study.challenge.image} alt={study.challenge.title} className="w-full h-full border border-neutral-400 rounded-md hover:scale-105 transition-all duration-500    " />
                    </div>
                </div>
            )}
        </section>
    )
}

export default Challenge