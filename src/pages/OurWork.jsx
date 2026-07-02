import { useState } from 'react';
import { ourWorkData } from '../data/data';
import { Link } from 'react-router';

const OurWork = () => {
    const [hoveredBtn, setHoveredBtn] = useState(null);
    return (
        <section id="work" className="px-5 pt-12 md:pt-16 md:max-w-8xl max-w-full max-w-8xl mx-auto">
            <div className="heading-div text-left">
                <h6 className="sub-heading">{ourWorkData.subHeading}</h6>
                <h2 className="heading">{ourWorkData.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 content-div gap-8 ">
                {ourWorkData.cards.map((item, index) => {
                    const Icon1 = item.button.icon2;
                    const Icon2 = item.button.icon1;
                    const isHovered = hoveredBtn === index;

                    return (
                        <Link to={`/case-study/${item.slug}`} key={item.id}>
                            <div className="overflow-hidden border border-slate-300 rounded-lg">
                                <div className={`content text-white bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110`} style={{ backgroundImage: `url(${item.bgimage})` }}>
                                    <div className="bg-linear-to-t from-neutral-900/90 via-neutral-900/30 to-neutral-900/0 p-6">
                                        <h1 className="text-(--tertiary) font-semibold text-2xl mb-2 pt-60">{item.growth}</h1>
                                        <h6 className="text-white text-xl font-bold mb-2">{item.title}</h6>
                                        <p className="text-base text-neutral-300 mb-2">{item.description}</p>
                                        <button type='button' className="flex items-center h-fit font-medium gap-1 text-(--primary)" onMouseEnter={() => setHoveredBtn(index)} onMouseLeave={() => setHoveredBtn(null)}>
                                            {item.button.text}
                                            <span className='font-extrabold text-xl'>{isHovered ? <Icon2 className='transition-all duration-500' /> : <Icon1 className='transition-all duration-500' />}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}

export default OurWork