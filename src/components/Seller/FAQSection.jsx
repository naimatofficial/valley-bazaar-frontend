import FaqsAccordions from "../Faqs/FaqsAccordions";

const FAQSection = () => {
	return (
		<div className="bg-gray-50 text-gray-900 p-8">
			<h2 className="text-3xl text-center mb-4">Frequently Asked Questions</h2>
			<p className="text-center mb-8 w-1/2 mx-auto">
				Got questions about becoming a vendor? Explore our vendor FAQ section
				for answers to any queries you may have about joining our platform as a
				vendor.
			</p>
			<div className="max-w-5xl mx-auto">
				<FaqsAccordions />
			</div>
		</div>
	);
};

export default FAQSection;
