import { AiFillMessage, AiFillStar, AiOutlineStar } from "react-icons/ai";

const ShopBanner = () => {
	return (
		<div
			className="bg-pink-100 h-[380px] mt-4 p-4 rounded-lg shadow-lg max-w-7xl mx-auto py-4"
			style={{
				backgroundImage: `url('https://6valley.6amtech.com/storage/app/public/shop/2023-06-14-64886fc2abca5.png')`,
				backgroundSize: "cover", // or 'contain' if you want the whole image visible without cropping
				backgroundPosition: "center",
			}}
		>
			<div className="relative flex items-center ">
				<div className="flex flex-col justify-between w-[500px]  ">
					<div className="h-[240px]"></div>
					<div className="relative z-10 bg-white p-4  rounded-lg shadow-lg flex items-center">
						<img
							src="https://6valley.6amtech.com/storage/app/public/company/2023-06-13-6488423c2cc38.png"
							alt="6valley CMS"
							className="w-16 h-16 object-cover rounded"
						/>
						<div className="ml-4">
							<h2 className="text-xl font-semibold">6valley CMS</h2>
							<div className="flex items-center text-yellow-500">
								{[1, 2, 3, 4].map((star) => (
									<AiFillStar key={star} />
								))}
								<AiOutlineStar />
								<span className="ml-2 text-gray-700">(4.8)</span>
							</div>
							<div className="text-green-600">
								<span>5 Reviews</span> | <span>63 Orders</span>
							</div>
						</div>
						<button className="ml-auto bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
							<AiFillMessage className="mr-2" /> Chat
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopBanner;
