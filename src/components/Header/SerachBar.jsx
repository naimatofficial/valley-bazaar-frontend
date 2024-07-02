const SearchBar = () => {
	return (
		<div className="flex items-center border border-gray-300 rounded-md">
			<input
				type="text"
				className="flex-grow p-2 border outline-none focus:border-green-200"
				placeholder="Search for items..."
			/>
			<button className="py-3 px-6 bg-green-500 rounded-r-md">
				<svg
					className="w-5 h-5 text-white"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M13.293 14.707a8 8 0 111.414-1.414l4.394 4.393a1 1 0 01-1.414 1.414l-4.394-4.393zM8 14A6 6 0 108 2a6 6 0 000 12z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</div>
	);
};

export default SearchBar;
