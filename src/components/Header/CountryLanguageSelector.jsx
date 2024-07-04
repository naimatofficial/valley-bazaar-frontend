import "country-flag-icons/react/3x2";

const CountryLanguageSelector = () => {
	const countries = [
		{ code: "us", name: "USD$", value: "usa" },
		// Add more countries as needed
	];

	const languages = [
		{ code: "pk", name: "Urdu", value: "urdu" },
		{ code: "gb", name: "English", value: "english" },
		{ code: "fr", name: "French", value: "french" },
		// Add more languages as needed
	];

	return (
		<div className="flex gap-5 items-center">
			<select name="countries" id="countries" className="bg-transparent">
				{countries.map((country) => (
					<option key={country.value} value={country.value}>
						<span className={`flag-icon flag-icon-${country.code} mr-2`} />
						{country.name}
					</option>
				))}
			</select>
			<select
				name="languages"
				id="languages"
				className="w-[150px] bg-transparent"
			>
				{languages.map((language) => (
					<option key={language.value} value={language.value}>
						<span className={`flag-icon flag-icon-${language.code} mr-2`} />
						{language.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default CountryLanguageSelector;
