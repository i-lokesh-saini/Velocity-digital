import React, { useState } from 'react'
import { contactData, formData as formFields } from '../../data/data';
import Input from '../../component/ui/Input';

const Contact = () => {
    const [userData, setUserData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const apiKey = import.meta.env.VITE_ACCESS_KEY;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!userData.name.trim())
            newErrors.name = 'Full name is required';

        if (!userData.company.trim())
            newErrors.company = 'Company name is required';

        if (!userData.email.trim())
            newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email))
            newErrors.email = 'Enter a valid email address';

        if (!userData.phone.trim())
            newErrors.phone = 'Phone number is required';
        else if (!/^\+?[\d\s\-()]{7,15}$/.test(userData.phone))
            newErrors.phone = 'Enter a valid phone number';

        if (!userData.service)
            newErrors.service = 'Please select a service';

        if (!userData.budget)
            newErrors.budget = 'Please select a budget';

        return newErrors;
    };

    const handleSubmit = async () => {
        // validate first
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "4d6c0807-81b8-4a7e-a846-4e04ca43206c",
                    subject: `New Strategy Request from ${userData.name}`,
                    from_name: userData.name,
                    replyto: userData.email,
                    email: userData.email,      // ← this sets the "From" to the user's email
                    message: `
                    🧑 CONTACT DETAILS
                    ━━━━━━━━━━━━━━━━━━━━━━
                    Full Name     : ${userData.name}
                    Company       : ${userData.company}
                    Email         : ${userData.email}
                    Phone         : ${userData.phone}

                    🎯 SERVICE INTEREST
                    ━━━━━━━━━━━━━━━━━━━━━━
                    Service       : ${userData.service}

                    💰 BUDGET
                    ━━━━━━━━━━━━━━━━━━━━━━
                    Budget       : ${userData.budget}

                    💬 MESSAGE
                    ━━━━━━━━━━━━━━━━━━━━━━
                    ${userData.message || 'No message provided'}

                    ━━━━━━━━━━━━━━━━━━━━━━
                    `.trim()
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                // reset form
                setUserData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
                setErrors({});
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section id='contact' className="p-5 md:max-w-8xl max-w-full mx-auto">
            <div className="flex items-center justify-center gap-5 flex-col md:flex-row md:w-4/5 w-full mx-auto">
                <div className="md:w-1/2 w-full md:mb-0 mb-10 ">
                    <div className="mb-10">
                        <h1 className='heading-2'>{contactData.heading.text1} <br /> <span className='text-(--primary)'>{contactData.heading.text2}</span></h1>
                        <p className='text-neutral-400'>{contactData.description}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {contactData.contactInfo.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.id} className="flex items-center gap-5">
                                    <div className="p-3 rounded-md border border-neutral-800 bg-neutral-900">
                                        <Icon className='text-(--primary) text-2xl' />
                                    </div>
                                    <div className="text-white">
                                        <p className='text-neutral-400 text-sm'>{item.title}</p>
                                        <a href={item.info.link}>{item.info.text}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                    <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-md" id='contactForm'>

                        {/* success banner */}
                        {status === 'success' && (
                            <div className="mb-5 p-4 bg-green-500/10 border border-green-500 rounded-md">
                                <p className="text-green-400 text-sm font-medium">✓ Message sent! We'll get back to you soon.</p>
                            </div>
                        )}

                        {/* error banner */}
                        {status === 'error' && (
                            <div className="mb-5 p-4 bg-red-500/10 border border-red-500 rounded-md">
                                <p className="text-red-400 text-sm font-medium">✗ Something went wrong. Please try again.</p>
                            </div>
                        )}

                        <div className='flex flex-col'>
                            <div className="flex flex-col md:flex-row gap-0 md:gap-3">
                                <Input label={formFields.fullname.label} type={formFields.fullname.type} placeholder={formFields.fullname.placeholder} name={formFields.fullname.name} onChange={handleChange} error={errors.name} value={userData.name} />
                                <Input label={formFields.company.label} type={formFields.company.type} placeholder={formFields.company.placeholder} name={formFields.company.name} onChange={handleChange} error={errors.company} value={userData.company} />
                            </div>
                            <div className="flex flex-col md:flex-row gap-0 md:gap-3">
                                <Input label={formFields.email.label} type={formFields.email.type} placeholder={formFields.email.placeholder} name={formFields.email.name} onChange={handleChange} error={errors.email} value={userData.email} />
                                <Input label={formFields.phone.label} type={formFields.phone.type} placeholder={formFields.phone.placeholder} name={formFields.phone.name} onChange={handleChange} error={errors.phone} value={userData.phone} />
                            </div>
                            <Input label={formFields.service.label} type={formFields.service.type} name={formFields.service.name} options={formFields.service.options} onChange={handleChange} error={errors.service} value={userData.service} />
                            <Input label={formFields.budget.label} type={formFields.budget.type} name={formFields.budget.name} options={formFields.budget.options} onChange={handleChange} error={errors.budget} value={userData.budget} />
                            <Input label={formFields.message.label} type={formFields.message.type} placeholder={formFields.message.placeholder} name={formFields.message.name} onChange={handleChange} value={userData.message} />

                            <button
                                onClick={handleSubmit}
                                disabled={status === 'loading'}
                                className='bg-(--primary) text-black py-3 px-5 rounded-md cursor-pointer font-medium hover:bg-(--secondary) hover:text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300'
                            >
                                {status === 'loading' ? 'Sending...' : formFields.button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact