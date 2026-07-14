import { useState } from "react";
import { frequentQuestion } from "../../data/data";

export default function FAQ() {
    const { subHeading, heading, icons, questions } = frequentQuestion;
    const UpIcon = icons.up;
    const DownIcon = icons.down;

    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id); // close if already open
    };

    return (
        <section className="p-5 md:pt-16 md:max-w-8xl max-w-full max-w-8xl mx-auto bg-neutral-950 ">
            <div className="heading-div text-center mb-5">
                <p className="heading-2">{subHeading}</p>
                <h2 className="sub-heading-2">{heading}</h2>
            </div>

            {questions.map((item) => {
                const isOpen = openId === item.id;

                return (
                    <div key={item.id} className="p-5 bg-neutral-900 border border-neutral-600 rounded-md text-white md:w-[40%] w-full mx-auto my-5" >
                        {/* Question Row */}
                        <button onClick={() => toggle(item.id)} className="flex items-center justify-between w-full">
                            <span className="text-white">{item.question}</span>
                            {isOpen ? <UpIcon size={16} /> : <DownIcon size={16} />}
                        </button>

                        {/* Answer - shown only when open */}
                        {isOpen && <p className="text-neutral-400 mt-5">{item.answer}</p>}
                    </div>
                );
            })}
        </section>
    );
}