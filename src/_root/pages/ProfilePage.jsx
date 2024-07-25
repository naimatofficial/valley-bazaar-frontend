import { Outlet } from "react-router-dom";
import ProfileLeftBar from "../../components/Profile/ProfileLeftBar";
import { useSelector } from "react-redux";

const ProfilePage = () => {
	const userInfo = useSelector("userInfo");

	console.log(userInfo);
	return (
		<div className="flex gap-4 p-8 w-full">
			<ProfileLeftBar />
			<div className="w-full px-2">
				<Outlet />
			</div>
		</div>
	);
};

export default ProfilePage;
