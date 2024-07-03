import ContactForm from "../../components/shared/ContactFrom";
import img from "./../../assets/contact-us.png";

const ContactUsPage = () => {
	return (
		<div className="mx-8 my-8 flex flex-col w-full">
			<h1 className="text-2xl text-center">Contact Us</h1>
			<div className="flex m-8">
				<div className="w-1/2">
					<img src={img} alt="contact us" className="p-8" />
				</div>
				<div className="w-1/2">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactUsPage;
