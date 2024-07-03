import { useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { faqData } from "../../utils";

const FaqPage = () => {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<div className="container  mx-auto p-4 items-center ">
			<h2 className="text-2xl font-bold mb-4 flex justify-center text-center border-b">
				Frequently Asked Question
			</h2>
			<div className="flex justify-center items-center w-full h-96">
				<div className="grid grid-cols-2 gap-8 w-[60%] items-center">
					{faqData.map((faq, index) => (
						<Accordion key={index} open={open === index + 1}>
							<AccordionHeader
								onClick={() => handleOpen(index + 1)}
								className="text-sm"
							>
								{faq.question}
							</AccordionHeader>
							<AccordionBody>{faq.answer}</AccordionBody>
						</Accordion>
					))}
				</div>
			</div>
		</div>
	);
};

export default FaqPage;
