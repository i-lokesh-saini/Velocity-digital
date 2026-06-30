import { HiTrendingUp } from "react-icons/hi";
import { LuBrainCircuit, LuLayoutTemplate, LuPalette, LuMail, LuZap, LuFilePenLine, LuSearch, LuBriefcaseMedical, LuBuilding2, LuCloud, LuShoppingCart, LuLandmark, LuGraduationCap, LuPlane, LuUtensils, } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { TbTopologyStar3 } from "react-icons/tb";


export const siteMetadata = {
    title: "Velocity Digital",
    faviconHref: "/react.svg",
}

export const brandName = {
    brandName: "Velocity Digital",

}

export const navlinks = [
    { id: 1, title: "Home", src: "#home" },
    { id: 2, title: "About", src: "#about" },
    { id: 3, title: "Services", src: "#services" },
    { id: 4, title: "Our work", src: "#work" },
    { id: 5, title: "Team", src: "#team" },
    { id: 6, title: "Contact", src: "#contact" },
]

export const homeData = {
    subHeading: "Data-Driven Digital Marketing",
    heading: ["Scale Your Business With", "DIGITAL MARKETING", "That Delivers Results"],
    description: "From SEO and paid advertising to conversion-focused websites, we help ambitious businesses attract qualified leads, increase revenue, and achieve sustainable growth through proven digital strategies.",
    button1: "Get Started",
    button2: "View Work",
}

export const aboutData = {
    subHeading: "WHO ARE WE",
    heading: "Built For Brands That Demand Excellence",
    aboutCardsInfo: [
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
    ],

    aboutbenifites: [
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
}

export const serviceData = {
    subHeading: "OUR SERVICES",
    heading: "Performance Engines Tailored To Your Needs",
    serviceCard: [
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
}

export const workFlowData = {
    heading: "Our Proven Growth Framework",
    description: "A systematic approach to scaling that minimizes risk and maximizes performance at every stage.",
    flowTab: [
        {
            id: "01",
            title: "Audit",
            description: "Deep dive into current assets and performance gaps.",
        },
        {
            id: "02",
            title: "Strategy",
            description: "Custom roadmap aligned with high-level business goals.",
        },
        {
            id: "03",
            title: "Setup",
            description: "Infrastructure deployment and tracking calibration.",
        },
        {
            id: "04",
            title: "Launch",
            description: "Live execution and continuous monitoring.",
        },
        {
            id: "05",
            title: "Scale",
            description: "Data-led optimization to compound growth.",
        },
    ]
}

export const ourWorkData = {
    subHeading: "",
    heading: "",
    card1: {
        bgImage: "/public/work.png",
        title: "E-Commerce Brand",
        result: "+412% Revenue Growth",
        workGrowth: [
            {
                id: 1,
                number: "5.4x",
                title: "ROAS INCREASE",
            },
            {
                id: 2,
                number: "-38%",
                title: "CPA REDUCTION",
            },
            {
                id: 3,
                number: "240K",
                title: "NEW LEADS",
            }
        ],
        moreInfo: [
            {
                id: 1,
                number: "+287%",
                title: "Lead Growth",
                description: "Managed SEO & Content strategy for a B2B SaaS platform.",
            },
            {
                id: 2,
                number: "8.2x",
                title: "Ad Spend ROI",
                description: "Aggressive multi-channel scaling for a premium retail brand.",
            }
        ],
    },

}

export const fieldsData = {
    heading: "Industries We Scale",
    description: "Deep domain expertise across high-growth verticals.",
    tabs: [
        {
            id: 1,
            icon: LuBriefcaseMedical,
            title: "Healthcare",
        },
        {
            id: 2,
            icon: LuBuilding2,
            title: "Real Estate",
        },
        {
            id: 3,
            icon: LuCloud,
            title: "SaaS",
        },
        {
            id: 4,
            icon: LuShoppingCart,
            title: "Retail",
        },
        {
            id: 5,
            icon: LuLandmark,
            title: "Fintech",
        },
        {
            id: 6,
            icon: LuGraduationCap,
            title: "Edtech",
        },
        {
            id: 7,
            icon: LuPlane,
            title: "Travel",
        },
        {
            id: 8,
            icon: LuUtensils,
            title: "Hospitality",
        },
    ]
}

export const teamData = {
    subHeading: "Meet The Experts",
    heading: "The Architects of Growth",
    members: [
        {
            id: 1,
            image: "/public/member-1.png",
            name: "Alex Sterling",
            role: "Founder & CEO",
        },
        {
            id: 2,
            image: "/public/member-2.png",
            name: "Sarah Chen",
            role: "Performance Lead",
        },
        {
            id: 3,
            image: "/public/member-3.png",
            name: "Marcus Thorne",
            role: "SEO Director",
        },
        {
            id: 4,
            image: "/public/member-4.png",
            name: "Elena Rodriguez",
            role: "Creative Strategist",
        },
    ],
}