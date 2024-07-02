import { Carousel } from "@material-tailwind/react";

import Banner1 from "../../assets/slideshow-img/slide-1.png";
import Banner2 from "../../assets/slideshow-img/slide-2.png";
import Banner3 from "../../assets/slideshow-img/slide-3.png";
import { CategorySidebar } from "../Seller/CategorySideBar";

const HeroSection = () => {
	return (
		<div className="flex justify-between items-center gap-4">
			<div className="bg-white shadow-md">
				<div className=" bg-white items-center">
					<div className="w-[300px] md:grid p-0">
						<CategorySidebar />
					</div>
				</div>
			</div>
			<Carousel
				className="w-9/12 h-[55vh]"
				navigation={({ setActiveIndex, activeIndex, length }) => (
					<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
						{new Array(length).fill("").map((_, i) => (
							<span
								key={i}
								className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
									activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
								}`}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
				autoplay
			>
				<img
					src={Banner1}
					alt="image 1"
					className="h-full w-full object-cover"
				/>
				<img
					src={Banner2}
					alt="image 1"
					className="h-full w-full object-cover"
				/>
				<img
					src={Banner3}
					alt="image 1"
					className="h-full w-full object-cover"
				/>
			</Carousel>
		</div>
	);
};
export default HeroSection;
