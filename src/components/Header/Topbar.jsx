const Topbar = () => {
	return (
		<di>
			<div className="flex justify-between items-center mx-auto max-w-screen-2xl   p-0">
				<div>
					<span>+123-456-7890</span>
				</div>
				<div className="flex gap-5 items-center">
					<select name="countries" id="countries" className="bg-transparent">
						<option value="usa">USD$</option>

						{/* Add more countries as needed */}
					</select>
					<select
						name="languages"
						id="languages"
						className=" w-[150px] bg-transparent"
					>
						<option value="english">English</option>
						<option value="spanish">Spanish</option>
						<option value="french">French</option>
						{/* Add more languages as needed */}
					</select>
				</div>
			</div>
		</di>
	);
};

export default Topbar;
