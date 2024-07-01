import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<div>
			<div className="bg-green-200 p-8">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
