import React from 'react'
import { fieldsData } from '../data/data'

const Field = () => {
    return (
        <section className="px-5 py-20 md:pt-16 md:max-w-8xl max-w-full max-w-8xl mx-auto bg-neutral-950 mt-20">
            <div className="heading-div text-center mb-5">
                <h2 className="text-white text-2xl md:text-4xl font-extrabold mb-4">{fieldsData.heading}</h2>
                <p className="text-neutral-400 text-base md:text-lg w-[50%] m-auto">{fieldsData.description}</p>
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