const bgMap = {
    '--primary': 'bg-[var(--primary)]',
    '--secondary': 'bg-[var(--secondary)]',
    '--primary-hover': 'bg-[var(--primary-hover)]',
};

const hoverMap = {
    '--secondary': 'hover:bg-[var(--secondary)]',
    '--primary-hover': 'hover:bg-[var(--primary-hover)]',
};

const Button = ({ text, bg_color, text_color, hover, href, onclick, icon: Icon }) => {
    return (
        <a href={href}>
            <button
                type="button"
                className={`px-3 flex items-center justify-center min-w-25 py-2 ${bgMap[bg_color]} text-${text_color} border border-gray-600 rounded-lg ${hoverMap[hover]} hover:text-white hover:border-[var(${bg_color})] transition-all duration-300`}
                onClick={onclick}>
                {text}
                {Icon && <Icon className="ml-2 text-xm" />}
            </button>
        </a>
    );
};

export default Button