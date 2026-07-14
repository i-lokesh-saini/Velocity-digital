import React from 'react'

const Outcomes = ({ study }) => {
    return (
        <section id='outcome mb-5'>
            {/* Outcome (for shorter entries) */}
            {study.outcome && (
                <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
                    <p className="text-gray-400 max-w-3xl">{study.outcome}</p>
                </div>
            )}
        </section>
    )
}

export default Outcomes