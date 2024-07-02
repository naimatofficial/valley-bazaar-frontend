import { contacts } from "../../utils";

const Contacts = () => {
	return (
		<div className="flex justify-around items-center flex-wrap bg-green-50 p-4 w-full gap-4">
			{contacts?.map((item, index) => (
				<div key={index} className="flex-center flex-col gap-2 p-2">
					<img
						src={item.img}
						alt={item.name}
						className="w-18 h-18 object-contain"
					/>
					<p className="text-base text-gray-800 text-center">{item.name}</p>
				</div>
			))}
		</div>
	);
};

export default Contacts;
