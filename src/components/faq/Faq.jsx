import React, { useState, useRef } from 'react';

const faqData = [
    {
        question: "What does LOREM mean?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (complete text)"
    },
    {
        question: "Where can I edit my billing and shipping address?",
        answer: "You can edit your billing and shipping address from your account settings."
    },
    {
        question: "Can I change the displayed currency?",
        answer: "Yes, you can change the displayed currency in the preferences."
    },
    {
        question: "Do I have the right to return an item?",
        answer: "Yes, you have the right to return an item within 30 days of purchase."
    },
    {
        question: "Do you accept orders via Phone or E-mail?",
        answer: "We accept orders through both Phone and E-mail."
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='bg-white'>
        <div className="max-w-3xl mx-auto mt-28 mb-10 p-4">
            <h2 className="text-3xl font-semibold text-center mb-4 text-gray-600">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-6">Everything you need to know about the product and billing.</p>
            {faqData.map((faq, index) => (
                <div key={index} className="mb-4 border-b">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center py-3 text-left text-lg font-medium text-gray-700 focus:outline-none"
                    >
                        <span>{faq.question}</span>
                        <span className="text-xl">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </button>
                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{
                            maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease',
                        }}
                    >
                        <p className="text-gray-600 px-4 pb-3">{faq.answer}</p>
                    </div>
                </div>
            ))}
            <div className="bg-gray-100 p-6 mt-10 text-center rounded-md shadow-md">
                <p className="text-lg mb-4 text-gray-600">Still have Questions?</p>
                <p className="text-gray-600 mb-6">Join over 4000+ startups already growing with Us.</p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700">Learn More</button>
                    <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-300">Contact us</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default FAQ;
