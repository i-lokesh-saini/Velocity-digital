import { HiTrendingUp } from "react-icons/hi";
import { LuBrainCircuit, LuLayoutTemplate, LuPalette, LuMail, LuZap, LuFilePenLine, LuSearch, } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { TbTopologyStar3 } from "react-icons/tb";



export const siteMetadata = {
    title: "Velocity Digital",
    faviconHref: "/react.svg",
}

export const navlinks = [
    { id: 1, title: "Home", src: "#home" },
    { id: 2, title: "About", src: "#about" },
    { id: 3, title: "Services", src: "#services" },
    { id: 4, title: "Our work", src: "#work" },
    { id: 5, title: "Team", src: "#team" },
    { id: 6, title: "Contact", src: "#contact" },
]

export const aboutCardsInfo = [
    {
        id: 1,
        title: "Our Journey",
        body: "Founded in 2018, Velocity Digital was born from a simple realization: the gap between data and execution was widening. We bridged that gap with a team of elite strategists and technologists focused purely on performance.",
        border: "border-l-white"
    },
    {
        id: 2,
        title: "Mission & Vision",
        body: "Our mission is to turn complex digital ecosystems into predictable growth engines. We envision a world where brands lead with intelligence, moving beyond guesswork to absolute market dominance.",
        border: "border-l-[var(--tertiary)]"
    },
]

export const benifites = [
    {
        id: 1,
        icon: LuBrainCircuit,
        title: "Strategic Thinking",
        description: "Every move is backed by deep data analysis and market intelligence."
    },
    {
        id: 2,
        icon: FaRegEye,
        title: "Radical Transparency",
        description: "Zero hidden fees, zero vanity metrics. Just real, verifiable results."
    },
    {
        id: 3,
        icon: IoSpeedometerOutline,
        title: "Agile Execution",
        description: "Rapid testing and scaling to capitalize on market opportunities."
    },
    {
        id: 4,
        icon: HiTrendingUp,
        title: "Long-Term Growth",
        description: "We build sustainable pipelines, not just temporary spikes."
    },
]

export const serviceInfo = [
    {
        id: 1,
        icon: LuSearch,
        title: "Search Engine Optimization",
        description: "Dominating search landscapes through technical excellence and content authority.",
    },
    {
        id: 2,
        icon: HiCursorArrowRipple,
        title: "Perfomance Marketing",
        description: "High-ROAS paid campaigns across Google, Meta, and emerging channels.",
    },
    {
        id: 3,
        icon: TbTopologyStar3,
        title: "Social Media Management",
        description: "Building community and driving acquisition through social strategy.",
    },
    {
        id: 4,
        icon: LuFilePenLine,
        title: "Content & Copywriting",
        description: "Narrative-driven content that educates, engages, and converts.",
    },
    {
        id: 5,
        icon: LuLayoutTemplate,
        title: "Web Design & Development",
        description: "High-conversion landing pages and premium brand experiences.",
    },
    {
        id: 6,
        icon: LuPalette,
        title: "Branding & Creative Strategy",
        description: "Visual identities that resonate with your target audience.",
    },
    {
        id: 7,
        icon: LuMail,
        title: "Email Marketing",
        description: "Automated flows that nurture leads and maximize customer LTV.",
    },
    {
        id: 8,
        icon: LuZap,
        title: "Conversion Rate Optimization",
        description: "A/B testing and behavioral analysis to squeeze every drop of value.",
    },
]
