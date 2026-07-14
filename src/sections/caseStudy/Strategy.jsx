import React from 'react'

const Strategy = ({ study }) => {
    return (
        <section id='strategy'>
            {/* Strategy */}
            {study.strategy && (
                <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Our Strategy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {study.strategy.map((s, i) =>
                            typeof s === 'string' ? (
                                <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
                                    <p className="text-white font-medium">{s}</p>
                                </div>
                            ) : (
                                <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
                                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                                    <p className="text-gray-400 text-sm">{s.description}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Strategy