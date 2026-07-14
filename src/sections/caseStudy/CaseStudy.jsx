import React from 'react';
import { useParams, Link } from 'react-router';
import { caseStudies } from '../../data/data';
import { LuArrowLeft } from "react-icons/lu";
import Hero from './Hero';
import Metrix from './Metrix';
import Challenge from './Challenge';
import Strategy from './Strategy';
import Results from './Results';
import Outcomes from './Outcomes';
import Testimonial from './Testimonial';
import Contact from '../landingPage/Contact';


const CaseStudy = () => {
    const { slug } = useParams();
    const study = caseStudies.find((c) => c.slug === slug);

    if (!study) {
        return (
            <section className="px-5 pt-32 pb-20 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Case study not found</h2>
                <Link to="/#work" className="text-(--primary) underline text-2xl">Back to home</Link>
            </section>
        );
    }

    return (
        <section className="pt-28 pb-20 bg-neutral-950 min-h-screen">
            <Hero study={study} />
            <Metrix study={study} />
            <Challenge study={study} />
            <Strategy study={study} />
            <Results study={study} />
            <Outcomes study={study} />
            <Testimonial study={study} />
            <Contact />
        </section>
    );
};

export default CaseStudy;