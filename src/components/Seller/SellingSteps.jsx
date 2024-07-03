import { steps } from "../../utils";

const SellingSteps = () => {
	return (
		<div className="bg-primary-600 text-white p-8 h-[500px]">
			<h2 className="text-3xl font-bold text-center mb-8">
				3 Easy Steps To Start Selling
			</h2>
			<p className="text-center mb-8">
				Start selling quickly! Register, upload your products with detailed info
				and images, and reach millions of buyers instantly.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-20 ">
				{steps.map((step, index) => (
					<div key={index} className="text-center">
						<div className=" p-4  mb-4">
							<img src={step.img} alt={step.title} className="mx-auto" />
						</div>
						<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
						<p>{step.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SellingSteps;
