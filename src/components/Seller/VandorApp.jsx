import phoneimg from "../../assets/vendor/phone.png";

const VandorApp = () => {
	return (
		<div className="flex justify-center items-center h-full">
			<div className="flex flex-row max-w-5xl bg-primary-100 h-72 my-[150px] rounded-[40px]">
				<div className="flex w-1/2 justify-center items-center p-1">
					{" "}
					{/* Adjusted for image centering */}
					<img src={phoneimg} alt="Phone" className="w-96 h-96 mb-24" />{" "}
					{/* Removed `items-center` as it's not applicable to `img` */}
				</div>
				<div className="flex flex-col w-1/2 justify-center p-4 space-y-4">
					<h2 className="text-3xl">Download Free Vendor App</h2>
					<p>
						Download our free seller app and start reaching millions of buyers
						on the go! Easy setup, manage listings, and boost sales anywhere.
					</p>
				</div>
			</div>
		</div>
	);
};

export default VandorApp;
