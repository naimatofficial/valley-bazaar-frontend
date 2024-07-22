import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import StickyIcons from "../components/shared/StcikyIcons";
import Contacts from "../components/shared/Contacts";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const RootLayout = () => {
	return (
		<div>
			<Header />
			<div className="w-10/12 mx-auto p-4">
				<Suspense
					fallback={
						<div>
							<Loader />
						</div>
					}
				>
					<Outlet />
				</Suspense>
			</div>
			<StickyIcons />
			<Contacts />
			<Footer />
		</div>
	);
};

export default RootLayout;
