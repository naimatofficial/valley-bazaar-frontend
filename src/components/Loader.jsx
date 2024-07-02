import { Spinner } from "@material-tailwind/react";

const Loader = () => {
	return (
		<div className="flex-center">
			<Spinner color="green" className="h-12 w-12" />
		</div>
	);
};

export default Loader;
