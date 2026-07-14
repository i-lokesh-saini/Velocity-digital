import React from 'react'

const Metrix = ({ study }) => {
    return (
        <section id='metrics'>
            {/* Metrics */}
            {study.metrics && (
                <div className="px-5 md:px-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {study.metrics.map((m, i) => (
                        <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 ">
                            <p className="text-white text-base font-semibold">{m.label}</p>
                            <h3 className="text-(--tertiary) text-2xl md:text-3xl font-bold mb-1">{m.value}</h3>
                            {m.description && <p className="text-neutral-400 font-normal text-sm mt-1">{m.description}</p>}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Metrix