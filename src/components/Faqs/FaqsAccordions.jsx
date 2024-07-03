import { useState } from "react";
import { SellerFaqs } from "../../utils";

const FaqsAccordions = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div className="space-y-4">
			{SellerFaqs.map((faq, index) => (
				<div key={index} className="mb-4">
					<button
						className="w-full transition duration-300 ease-in-out text-left bg-gray-100 p-4 rounded-md flex justify-between items-center"
						onClick={() => toggleFAQ(index)}
					>
						<span>{faq.question}</span>
						<span>{openIndex === index ? "-" : "+"}</span>
					</button>
					<div
						className={`overflow-hidden transition-all duration-500 ease-in-out ${
							openIndex === index ? "max-h-screen" : "max-h-0"
						}`}
					>
						<div className="bg-white p-4 rounded-md mt-2">
							<p>{faq.answer}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FaqsAccordions;
