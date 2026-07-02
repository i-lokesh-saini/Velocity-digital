import { HiTrendingUp } from "react-icons/hi";
import { LuBrainCircuit, LuLayoutTemplate, LuPalette, LuMail, LuZap, LuFilePenLine, LuSearch, LuBriefcaseMedical, LuBuilding2, LuCloud, LuShoppingCart, LuLandmark, LuGraduationCap, LuPlane, LuUtensils, LuArrowUpRight, LuArrowRight, LuPhone, LuInstagram, LuClock } from "react-icons/lu";
import { FaRegEye, FaStar } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { TbTopologyStar3 } from "react-icons/tb";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";


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
    subHeading: "Results That Matter",
    heading: "Scaling Market Leaders",
    cards: [
        {
            id: 1,
            slug: "luxury-fashion-e-commerce",
            bgimage: "/work1.png",
            growth: "+412%",
            title: "Luxury Fashion E-Commerce",
            description:
                "Scaled an online luxury apparel brand with AI-powered advertising, precision audience targeting, and conversion optimization.",
            button: {
                text: "View Case Study",
                icon1: LuArrowUpRight,
                icon2: LuArrowRight,

            },
        },

        {
            id: 2,
            slug: "performance-marketing",
            bgimage: "/work2.png",
            growth: "12.4x ROAS",
            title: "Performance Marketing",
            description:
                "Achieved exceptional advertising returns through intelligent bidding strategies, creative testing, and omnichannel campaigns.",
            button: {
                text: "View Case Study",
                icon1: LuArrowUpRight,
                icon2: LuArrowRight,

            },
        },

        {
            id: 3,
            slug: "conversion-optimization",
            bgimage: "/work3.png",
            growth: "-64% CPA",
            title: "Conversion Optimization",
            description:
                "Reduced acquisition costs while increasing conversions using landing page optimization, checkout improvements, and data-driven experimentation.",
            button: {
                text: "View Case Study",
                icon1: LuArrowUpRight,
                icon2: LuArrowRight,

            },
        },
    ]
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
            image: "/member-1.png",
            name: "Alex Sterling",
            role: "Founder & CEO",
        },
        {
            id: 2,
            image: "/member-2.png",
            name: "Sarah Chen",
            role: "Performance Lead",
        },
        {
            id: 3,
            image: "/member-3.png",
            name: "Marcus Thorne",
            role: "SEO Director",
        },
        {
            id: 4,
            image: "/member-4.png",
            name: "Elena Rodriguez",
            role: "Creative Strategist",
        },
    ],
}

export const testimonialData = {
    subHeading: "What Our Partners Say",
    heading: "Trusted By Market Leaders",
    testimonial: [
        {
            id: 1,
            image: "/client1.jpg",
            stars: {
                number: 5,
                icon: FaStar,
            },
            review: "Velocity Digital didn't just manage our ads; they redefined our entire acquisition strategy. Our ROI jumped from 2.1x to 4.8x in just 90 days.",
            name: "David Miller",
            position: "Marketing Director",
            company: "LuxTech",
        },
        {
            id: 2,
            image: "/client2.jpg",
            stars: {
                number: 4,
                icon: FaStar,
            },
            review: "The technical SEO expertise at Velocity is unmatched. We moved from page 3 to page 1 for our highest-value keywords within five months.",
            name: "Jessica Low",
            position: "CEO",
            company: "FlowSaaS",
        },
    ]
}

export const frequentQuestion = {
    subHeading: "Frequently Asked Questions",
    heading: "Answers to Common Questions",
    icons: {
        up: FaAngleUp,
        down: FaAngleDown,
    },
    questions: [
        {
            id: 1,
            question: "How long does it take to see results?",
            answer: "Most clients begin seeing measurable results within 30-60 days, with significant growth typically achieved between 90-180 days.",
        },
        {
            id: 2,
            question: "What industries do you specialize in?",
            answer: "We specialize in high-growth sectors including SaaS, e-commerce, fintech, healthcare, real estate, and education technology.",
        },
        {
            id: 3,
            question: "Do you offer flexible pricing?",
            answer: "Yes, we provide flexible engagement models including performance-based, retainer, and hybrid structures tailored to your business needs.",
        },
        {
            id: 4,
            question: "How do you measure success?",
            answer: "We track KPIs across revenue, conversion rates, CPA, ROAS, lead quality, and customer lifetime value, providing transparent weekly reporting.",
        },
    ]
}

export const contactData = {
    heading: {
        text1: "Ready To Hit Your",
        text2: "Next Milestone?",
    },
    description: "Contact us today for a free digital audit and strategic roadmap tailored to your specific market position.",
    contactInfo: [
        {
            icon: LuMail,
            title: "Email Us",
            info: {
                text: "growth@velocitydigital.com",
                link: "#"
            },
        },
        {
            icon: LuPhone,
            title: "Call Us",
            info: {
                text: "(+91) 98765 43210",
                link: "#"
            },
        },
        {
            icon: LuInstagram,
            title: "Instagram",
            info: {
                text: "@velocitydigital",
                link: "#"
            },
        },
        {
            icon: LuClock,
            title: "Working Hours",
            info: {
                text: "Mon - Fri: 9am - 6pm\nSat - Sun: Closed",
                link: "#"
            },
        },
    ],

    formData: {
        title: "Let's Start Your Growth Journey",
        fields: [
            {
                label: "Full Name",
                type: "text",
                name: "name",
                placeholder: "John Doe"
            },
            {
                label: "Email Address",
                type: "email",
                name: "email",
                placeholder: "[John@company.com]"
            },
            {
                label: "Phone Number",
                type: "text",
                name: "phone",
                placeholder: "99854 76342"
            },
            {
                label: "Service",
                type: "select",
                name: "service",
                options: [
                    "Performance Marketing",
                    "SEO & Content",
                    "Lead Generation",
                    "Organic Social & Community",
                    "Email & SMS Marketing",
                    "Creative Production",
                    "Growth Strategy"
                ]
            },
            {
                label: "Message",
                type: "text",
                name: "message",
                placeholder: "How can we help you?"
            },
        ],
        button: {
            text: "SEND STRATEGY REQUEST",
            link: "#"
        }
    }
}



// case study page 

export const caseStudies = [
    {
        id: 1,
        slug: "luxury-fashion-e-commerce",

        hero: {
            badge: "E-Commerce • Luxury Apparel",
            title: "Scaling Revenue by 412% in 6 Months",
            subtitle:
                "How Velocity Digital leveraged Precision Targeting and AI-Driven Bidding to transform a stagnant fashion brand into an e-commerce powerhouse.",
            image: "/work1.png",
        },

        metrics: [
            {
                label: "ROAS Growth",
                value: "12.4x",
                description: "Up from 2.8x benchmark",
            },
            {
                label: "Revenue Generated",
                value: "$3.2M",
                description: "Generated in H1 2024",
            },
            {
                label: "CPA Reduction",
                value: "-64%",
                description: "Cost per Acquisition reduced",
            },
            {
                label: "Conversion Rate",
                value: "4.82%",
                description: "+210% Year over Year",
            },
        ],

        challenge: {
            title: "The Challenge",
            description:
                "The client struggled with increasing customer acquisition costs, low conversion rates, and stagnant revenue despite offering premium products.",
            problems: [
                "Monthly revenue stuck at $150K",
                "High bounce rates on landing pages",
                "Disconnected marketing data",
            ],
        },

        strategy: [
            {
                title: "Hyper-Granular Segmentation",
                description:
                    "Rebuilt audience architecture using first-party customer data to identify high-value customer segments.",
            },
            {
                title: "AI Creative Testing",
                description:
                    "Launched 500+ creative variations weekly to quickly discover high-performing advertisements.",
            },
            {
                title: "Funnel Optimization",
                description:
                    "Improved checkout experience and introduced dynamic upsells to increase Average Order Value.",
            },
            {
                title: "Omnichannel Marketing",
                description:
                    "Unified Meta, Google Ads, and Email Marketing into a single customer journey.",
            },
        ],

        results: [
            {
                title: "Repeat Purchase Rate",
                value: "38.5%",
            },
            {
                title: "Average ROAS",
                value: "12.4x",
            },
            {
                title: "Average Order Value",
                value: "+$42",
            },
            {
                title: "Ad Spend Efficiency",
                value: "94%",
            },
        ],

        testimonial: {
            name: "Marcus Thorne",
            position: "CEO, Velocity Digital",
            quote:
                "AD-PRECISION transformed our marketing strategy. They built a data-driven growth engine that delivered results far beyond our expectations.",
        },
    },

    {
        id: 2,
        slug: "performance-marketing",

        hero: {
            badge: "Digital Marketing",
            title: "12.4x Return on Ad Spend",
            subtitle:
                "Creating a predictable growth engine through intelligent media buying and AI-powered optimization.",
            image: "/work2.png",
        },

        metrics: [
            {
                label: "ROAS",
                value: "12.4x",
            },
            {
                label: "Revenue",
                value: "$3.2M",
            },
            {
                label: "CTR",
                value: "+188%",
            },
            {
                label: "Conversions",
                value: "+210%",
            },
        ],

        challenge:
            "Advertising campaigns lacked targeting precision and generated inconsistent performance.",

        strategy: [
            "Audience Segmentation",
            "Creative Automation",
            "AI Bid Optimization",
            "Performance Monitoring",
        ],

        outcome:
            "Built a sustainable advertising system delivering predictable growth month after month.",
    },

    {
        id: 3,
        slug: "conversion-optimization",

        hero: {
            badge: "CRO",
            title: "Reducing CPA by 64%",
            subtitle:
                "Optimizing every customer touchpoint to maximize conversions while reducing marketing costs.",
            image: "/work3.png",
        },

        metrics: [
            {
                label: "CPA",
                value: "-64%",
            },
            {
                label: "Conversion Rate",
                value: "4.82%",
            },
            {
                label: "AOV",
                value: "+$42",
            },
            {
                label: "Checkout Success",
                value: "+37%",
            },
        ],

        challenge:
            "Visitors abandoned the checkout process, causing poor conversion rates and expensive customer acquisition.",

        strategy: [
            "Landing Page Optimization",
            "Checkout Redesign",
            "A/B Testing",
            "Dynamic Upsells",
        ],

        outcome:
            "Lower acquisition costs, higher average order value, and significantly improved conversion rates.",
    },
]