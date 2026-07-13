import React from 'react'

const Input = ({ label, name, type, onChange, placeholder, options, error }) => {
    if (type === "textarea") {
        return (
            <div className='w-full flex flex-col mb-5 md:mb-5'>
                <label className='text-neutral-400 text-sm font-serif' htmlFor={name}>{label}</label>
                <textarea className='border border-neutral-700 bg-neutral-950 text-white p-3 rounded-md' name={name} onChange={onChange} placeholder={placeholder} rows={4}></textarea>
                {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
            </div>
        )
    }
    else if (type === "select") {
        return (
            <div className='w-full flex flex-col mb-5 md:mb-5'>
                <label className='text-neutral-400 text-sm font-serif' htmlFor={name}>{label}</label>
                <select id={name} name={name} onChange={onChange} className='border border-neutral-700 bg-neutral-950 text-white p-2 rounded-md' >
                    {options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                    ))}
                </select>
                {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
            </div>
        )
    }
    else {
        return (
            <div className='w-full flex flex-col mb-5 md:mb-5'>
                <label className='text-neutral-400 text-sm font-serif' htmlFor={name}>{label}</label>
                <input className='border border-neutral-700 bg-neutral-950 text-white p-3 rounded-md' type={type} name={name} onChange={onChange} placeholder={placeholder} />
                {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
            </div>
        )
    }
}

export default Input