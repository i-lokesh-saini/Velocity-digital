import React from 'react';
import { useParams, Link } from 'react-router';
import { caseStudies } from '../data/data';
import { LuArrowLeft } from "react-icons/lu";

const CaseStudy = () => {
    const { slug } = useParams();
    const study = caseStudies.find((c) => c.slug === slug);

    // if (!study) {
    return (
        <section className="px-5 pt-32 pb-20 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Case study not found</h2>
            <Link to="/#work" className="text-(--primary) underline text-2xl">Back to home</Link>
        </section>
    );
    // }

    // return (
    //     <section className="pt-28 pb-20 bg-neutral-950 min-h-screen">
    //         {/* Hero */}
    //         <div className="px-5 md:px-20 max-w-6xl mx-auto">
    //             <Link to="/#work" className=" inline-flex items-center gap-2 text-neutral-400 hover:text-(--primary) mb-6 font-normal text-base">
    //                 <LuArrowLeft className='text-lg' /> Back to home
    //             </Link>
    //             <p className="sub-heading">{study.hero.badge}</p>
    //             <h1 className="text-white font-black text-3xl md:text-5xl leading-tight mb-4">{study.hero.title}</h1>
    //             <p className="text-gray-400 md:text-lg text-base mb-8 max-w-3xl">{study.hero.subtitle}</p>
    //             <div className="rounded-xl overflow-hidden mb-14">
    //                 <img src={study.hero.image} alt={study.hero.title} className="w-full h-[300px] md:h-[450px] object-cover" />
    //             </div>
    //         </div>

    //         {/* Metrics */}
    //         {study.metrics && (
    //             <div className="px-5 md:px-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
    //                 {study.metrics.map((m, i) => (
    //                     <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 text-center">
    //                         <h3 className="text-(--tertiary) text-2xl md:text-3xl font-bold mb-1">{m.value}</h3>
    //                         <p className="text-white text-sm font-semibold">{m.label}</p>
    //                         {m.description && <p className="text-gray-500 text-xs mt-1">{m.description}</p>}
    //                     </div>
    //                 ))}
    //             </div>
    //         )}

    //         {/* Challenge */}
    //         {study.challenge && (
    //             <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16">
    //                 <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
    //                     {typeof study.challenge === 'string' ? 'The Challenge' : study.challenge.title}
    //                 </h2>
    //                 <p className="text-gray-400 mb-4 max-w-3xl">
    //                     {typeof study.challenge === 'string' ? study.challenge : study.challenge.description}
    //                 </p>
    //                 {study.challenge.problems && (
    //                     <ul className="list-disc list-inside text-gray-400 space-y-1">
    //                         {study.challenge.problems.map((p, i) => <li key={i}>{p}</li>)}
    //                     </ul>
    //                 )}
    //             </div>
    //         )}

    //         {/* Strategy */}
    //         {study.strategy && (
    //             <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16">
    //                 <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Our Strategy</h2>
    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    //                     {study.strategy.map((s, i) =>
    //                         typeof s === 'string' ? (
    //                             <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
    //                                 <p className="text-white font-medium">{s}</p>
    //                             </div>
    //                         ) : (
    //                             <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
    //                                 <h3 className="text-white font-semibold mb-2">{s.title}</h3>
    //                                 <p className="text-gray-400 text-sm">{s.description}</p>
    //                             </div>
    //                         )
    //                     )}
    //                 </div>
    //             </div>
    //         )}

    //         {/* Results */}
    //         {study.results && (
    //             <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16">
    //                 <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Results</h2>
    //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //                     {study.results.map((r, i) => (
    //                         <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 text-center">
    //                             <h3 className="text-(--primary) text-xl md:text-2xl font-bold mb-1">{r.value}</h3>
    //                             <p className="text-gray-400 text-sm">{r.title}</p>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         )}

    //         {/* Outcome (for shorter entries) */}
    //         {study.outcome && (
    //             <div className="px-5 md:px-20 max-w-6xl mx-auto mb-16">
    //                 <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
    //                 <p className="text-gray-400 max-w-3xl">{study.outcome}</p>
    //             </div>
    //         )}

    //         {/* Testimonial */}
    //         {study.testimonial && (
    //             <div className="px-5 md:px-20 max-w-6xl mx-auto">
    //                 <div className="bg-neutral-900 border-l-4 border-(--tertiary) rounded-lg p-8">
    //                     <p className="text-white text-lg italic mb-4">"{study.testimonial.quote}"</p>
    //                     <p className="text-(--primary) font-semibold">{study.testimonial.name}</p>
    //                     <p className="text-gray-500 text-sm">{study.testimonial.position}</p>
    //                 </div>
    //             </div>
    //         )}
    //     </section>
    // );
};

export default CaseStudy;