import VendorRegisterForm from "../../components/Seller/MultiStepForm";
import WhySellWithUs from "../../components/Seller/WhyWithUs";
import SellingSteps from "../../components/Seller/SellingSteps";
import VandorApp from "../../components/Seller/VandorApp";
import FAQSection from "./../../components/Seller/FAQSection";

const VendorRegisterPage = () => {
	return (
		<>
			<div className="p-8">
				<div className="flex-grow bg-white">  
					<VendorRegisterForm />
				</div>
			</div>
			<div>
				<WhySellWithUs />
				<SellingSteps />
				<VandorApp />
				<FAQSection />
			</div>
		</>
	);
};

export default VendorRegisterPage;
