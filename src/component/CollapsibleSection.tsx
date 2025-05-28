import { useRef, useState } from 'react'

const CollapsibleSection = ({ collapsibleList }: { collapsibleList: { question: string, answer: string }[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="space-y-4">
            {collapsibleList.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 pb-3">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left font-bold text-2xl focus:outline-none"
                    >
                        {faq.question}
                    </button>
                    <div
                        ref={(el) => (refs.current[index] = el)}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CollapsibleSection