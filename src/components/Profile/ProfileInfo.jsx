import { useState } from "react";
import { FaUserCircle, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<div className="p-4 xl:w-full xl:mx-auto bg-white rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-6">Profile Info</h2>
			<div className="relative h-full flex items-center justify-center mb-6">
				<div className="relative">
					<FaUserCircle className="text-9xl text-primary-100" />
					<div className="absolute bottom-0 right-0 w-12 h-12 bg-white border cursor-pointer  rounded-full">
						<input
							type="file"
							id="imageUpload"
							hidden
							onChange={handleImageChange}
							accept="image/*"
						/>
						<label htmlFor="imageUpload">
							<FaCamera
								onClick={() => document.getElementById("imageUpload").click()}
								style={{
									cursor: "pointer",
									position: "absolute",
									bottom: "0",
									right: "0",
									marginBottom: "1rem",
									marginRight: "1rem",
								}}
								className="w-4 h-4 object-contain  text-primary-400"
							/>
						</label>
					</div>
				</div>
				{selectedImage && (
					<img
						src={selectedImage}
						alt="Uploaded"
						style={{
							width: "100px",
							height: "100px",
							position: "absolute",
							bottom: "0",
							right: "0",
							marginBottom: "1rem",
							marginRight: "1rem",
						}}
					/>
				)}
			</div>
			<h1 className="text-xl font-bold text-center">Name</h1>
			<form className="space-y-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label className="block text-gray-700">First Name</label>
						<input
							type="text"
							defaultValue={userInfo?.user?.firstName}
							className="w-full mt-1 p-2 border border-green-300 rounded-md"
						/>
					</div>
					<div>
						<label className="block text-gray-700">Last Name</label>
						<input
							type="text"
							defaultValue={userInfo?.user?.lastName}
							className="w-full mt-1 p-2 border border-green-300 rounded-md"
						/>
					</div>
				</div>
				<div>
					<label className="block text-gray-700">Phone Number</label>
					<input
						type="text"
						defaultValue={userInfo?.user?.phoneNumber}
						className="w-full mt-1 p-2 border border-green-300 rounded-md"
					/>
				</div>
				<div>
					<label className="block text-gray-700">Email</label>
					<input
						type="email"
						defaultValue={userInfo?.user?.email}
						className="w-full mt-1 p-2 border border-green-300 rounded-md"
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="relative">
						<label className="block text-gray-700">New Password</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Adjust padding to prevent text from being under the icon
							/>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>
					<div className="relative">
						<label className="block text-gray-700">Confirm Password</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Adjust padding to prevent text from being under the icon
							/>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<button
						type="submit"
						className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProfileInfo;
