import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
	const { userInfo } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	console.log(userInfo);


	return (
		!userInfo && (
			<div className="">
				<div className="my-20 w-3/4 mx-auto rounded-lg outline-1 outline-primary-400 shadow-md bg-white">
					<div className="w-3/4 mx-auto p-8">
						<Outlet />
					</div>
				</div>
			</div>
		)
	);
};

export default AuthLayout;
