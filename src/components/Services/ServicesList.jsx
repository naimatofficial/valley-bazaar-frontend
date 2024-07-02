import { services } from "../../utils";

const ServicesList = () => {
	return (
		<div className="flex justify-around items-center flex-wrap gap-4 my-10 bg-white shadow-sm p-4">
			{services?.map((item, index) => (
				<div
					key={index}
					className="flex  justify-center items-center flex-col w-44 gap-2 p-2"
				>
					<img
						src={item.img}
						alt={item.name}
						className="w-18 h-18 object-cover"
					/>
					<p className="text-base text-center text-gray-800">{item.name}</p>
				</div>
			))}
		</div>
	);
};

export default ServicesList;
