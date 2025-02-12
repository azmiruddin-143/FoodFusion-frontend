import { Disclosure } from '@headlessui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqImage from '.././assets/FAQs-rafiki.png'
const Faq = () => {
    const faqs = [
        {
            question: "What is the best way to store fresh vegetables?",
            answer: "Store fresh vegetables in the refrigerator's crisper drawer to keep them fresh for a longer time."
        },
        {
            question: "How can I tell if meat is fresh before buying?",
            answer: "Fresh meat has a bright color, firm texture, and no unpleasant odor."
        },
        {
            question: "What are the best practices for freezing cooked food?",
            answer: "Allow the food to cool completely, store in airtight containers, and label with the date before freezing."
        },
        {
            question: "How do I prevent fruits from spoiling quickly?",
            answer: "Keep fruits like bananas, apples, and oranges at room temperature, and refrigerate berries to extend freshness."
        },
        {
            question: "What are some tips for buying fresh seafood?",
            answer: "Look for clear eyes, firm flesh, and a fresh ocean-like smell when buying seafood."
        },
        {
            question: "How can I keep bread fresh for a longer time?",
            answer: "Store bread in a bread box at room temperature, or freeze it to maintain freshness."
        },
        
    ];

    return (
        <div className='my-16'>
            <div className='lg:flex items-center lg:mx-0 2xl:mx-24 rounded-md xl:mx-16'>
                <div className='flex-1'>
                    <img className='2xl:w-10/12' src={faqImage} alt="" />
                </div>

                <div className="p-4 max-w-7xl mx-auto lg:w-[50%] xl:mr-10 2xl:mr-8 lg:mr-7">
                    <h2 className="sm:text-4xl text-2xl font-bold sm:my-10 my-4 text-center">Frequently Asked Questions</h2>
                    {faqs.map((faq, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <div className="mb-5 border rounded-lg">
                                    <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200">
                                        <span>{faq.question}</span>
                                        {open ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 py-2 text-gray-700">
                                        {faq.answer}
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
