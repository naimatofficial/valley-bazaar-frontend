/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomLeftArrow = ({ onClick }) => {
	return (
		<button onClick={onClick} className="carousel-arrow left-0">
			<FaArrowLeft className="text-white text-lg" />
		</button>
	);
};

const CustomRightArrow = ({ onClick }) => {
	return (
		<button onClick={onClick} className="carousel-arrow right-0">
			<FaArrowRight className="text-white text-lg" />
		</button>
	);
};

const ProductCarousel = ({
	data,
	component: Component,
	largeDesktopLimit,
	desktopLimit,
}) => {
	const [showArrows, setShowArrows] = useState(false);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: largeDesktopLimit,
		},
		desktop: {
			breakpoint: { max: 1024, min: 768 },
			items: desktopLimit,
		},
		tablet: {
			breakpoint: { max: 768, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div
			className="relative"
			onMouseEnter={() => setShowArrows(true)}
			onMouseLeave={() => setShowArrows(false)}
		>
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				customLeftArrow={showArrows ? <CustomLeftArrow /> : <div />}
				customRightArrow={showArrows ? <CustomRightArrow /> : <div />}
				arrows={showArrows}
				renderDotsOutside={true}
				className="relative"
			>
				{data.map((product, index) => (
					<Component
						key={index}
						imageUrl={product.image}
						title={product.title}
						oldPrice={184.0}
						newPrice={product.price}
					/>
				))}
			</Carousel>
		</div>
	);
};

ProductCarousel.propTypes = {
	products: PropTypes.arrayOf().isRequired,
	component: PropTypes.elementType.isRequired,
};

export default ProductCarousel;
