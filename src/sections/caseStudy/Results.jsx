import React from 'react'

const Results = ({ study }) => {
    return (
        <section id='results'>
            {/* Results */}
            {study.results && (
                <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Results</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((r, i) => (
                            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 text-center">
                                <h3 className="text-(--tertiary) text-xl md:text-2xl font-bold mb-1">{r.value}</h3>
                                <p className="text-neutral-400 text-base font-medium">{r.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Results