import React from 'react'
import { fieldsData } from '../../data/data'

const Field = () => {
    return (
        <section className="p-5 md:max-w-8xl max-w-full max-w-8xl mx-auto bg-neutral-950">
            <div className="heading-div text-center mb-5">
                <h2 className="heading-2">{fieldsData.heading}</h2>
                <p className="sub-heading-2">{fieldsData.description}</p>
            </div>
            <div className="w-4/5 m-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {fieldsData.tabs.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div className="text-white flex flex-col justify-center gap-5 text-center bg-neutral-900 py-10 rounded-sm border-2 border-stone-700 hover:scale-105 transition-all duration-700" key={item.id}>
                            <Icon className="text-3xl m-auto" />
                            <p className="text-xl font-semibold">{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Field