import React from 'react';
import { workFlowData } from '../data/data.js';

const WorkFlow = () => {
    return (
        <section className="px-5 py-12 md:pt-16 md:max-w-8xl max-w-full max-w-8xl mx-auto bg-neutral-950 mt-20">
            <div className="heading-div text-center mb-15">
                <h2 className="text-white md:text-4xl text-2xl font-extrabold mb-4 ">{workFlowData.heading}</h2>
                <p className="text-neutral-400 md:text-lg text-base md:w-[50%] m-auto w-3/4">{workFlowData.description}</p>
            </div>
            <div className="relative">
                <div className="absolute top-8 left-0 w-full timeline-connector hidden lg:block"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 md:gap-6 px-18">
                    {workFlowData.flowTab.map((item) => (
                        <div className="text-neutral-200 text-center" key={item.id}>
                            <p className="bg-neutral-800 w-fit mx-auto text-2xl text-neutral-50 font-semibold py-3 border-2 border-stone-500 px-4 mb-2 rounded-full hover:scale-110 ">{item.id}</p>
                            <h6 className="text-xl">{item.title}</h6>
                            <p className="w-[80%] m-auto">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkFlow