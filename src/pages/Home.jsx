import Button from '../component/Button';
import { FaArrowRight } from "react-icons/fa";
import { homeData } from '../data/data';

const Home = () => {
    return (
        <section id="home" className="grid md:grid-cols-2 grid-cols-1 items-center min-h-screen md:px-20 px-6 pt-24 md:gap-10 gap-0 overflow-hidden">
            <div className="flex flex-col  md:mt-0 mt-6">
                <h5 className="text-(--tertiary) font-bold mb-4 md:mb-4 text-sm md:text-base tracking-widest uppercase font-space">{homeData.subHeading}</h5>
                <h1 className="text-white font-black text-3xl md:text-5xl leading-tight mb-4 md:mb-4">{homeData.heading[0]}<span className="text-(--primary) block">{homeData.heading[1]}</span>{homeData.heading[2]}</h1>
                <p className="text-gray-400 md:text-lg text-base leading-relaxed mb-8 w-3/4 md:w-2/3 text-left">{homeData.description}</p>
                <div className="flex flex-wrap gap-4">
                    <Button text={homeData.button1} bg_color="--primary" text_color="black" hover="--secondary" className="md:w-auto w-full" icon={FaArrowRight} />
                    <Button text={homeData.button2} bg_color="transparent" text_color="white" hover="--secondary" className="md:w-auto w-full" />
                </div>
            </div>
            <div className="relative md:mt-0 mt-10 md:h-[520px] h-[260px] flex justify-center items-center  ">
                <img src="/hero-img.png" alt="Digital marketing hero" className="w-full h-full object-cover object-center rounded-xl drop-shadow-2xl shadow-gray-100" />
                {/* <div className="absolute inset-0 rounded-xl md:mask-[linear-gradient(to_right,black_0%,black_8%,transparent_55%)] mask-[linear-gradient(to_bottom,transparent_20%,black_85%)]" /> */}
            </div>
        </section>
    );
};

export default Home;