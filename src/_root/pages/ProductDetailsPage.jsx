import { Link, useParams } from "react-router-dom";
import {
	useGetProductDetailsQuery,
	useGetProductsQuery,
} from "../../redux/slices/productsApiSlice";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader";
import { ProductCard } from "../../components/Product/ProductCard";
import MoreProducts from "../../components/Product/subcomponent/MoreProducts";
import VanderCard from "../../components/Product/subcomponent/VanderCard";
import FeatureCard from "../../components/Product/subcomponent/FeatureCard";
import OverviewReview from "../../components/Product/subcomponent/OverviewReview";

import {
	FaShippingFast,
	FaLock,
	FaUndoAlt,
	FaCertificate,
	FaAngleRight,
} from "react-icons/fa";
import ProductCarousel from "../../components/shared/ProductCarousel";

const features = [
	{ Icon: FaShippingFast, text: "Fast Delivery all across the country" },
	{ Icon: FaLock, text: "Safe Payment" },
	{ Icon: FaUndoAlt, text: "7 Days Return Policy" },
	{ Icon: FaCertificate, text: "100% Authentic Products" },
];

const ProductDetailsPage = () => {
	const { id } = useParams();

	const { data: product, isLoading } = useGetProductDetailsQuery(id);
	const { data: products, isLoading: isProductsLoading } = useGetProductsQuery(
		{
			category: product?.category?._id,
		},
		{ skip: !product?.category?._id }
	);

	const { data: vendorProducts, isLoading: isVendorProductsLoading } =
		useGetProductsQuery(
			{
				userId: product?.userId,
			},
			{ skip: !product?.userId }
		);

	console.log(products);

	return isLoading ? (
		<Loader />
	) : product ? (
		<div className="container mx-auto flex flex-col space-y-4 sm:space-y-0 sm:space-x-4">
			<div className="flex flex-col sm:flex-row w-full">
				<div className="w-full sm:w-3/4 flex flex-col pr-4">
					<Product product={product} />
					<OverviewReview />
				</div>

				<div className="w-full sm:w-1/4 space-y-4">
					<FeatureCard features={features} />
					{isVendorProductsLoading ? (
						<Loader />
					) : (
						<VanderCard
							vendorId={product.userId}
							totalProducts={vendorProducts?.results}
						/>
					)}

					<MoreProducts products={vendorProducts} />
				</div>
			</div>

			{isProductsLoading ? (
				<Loader />
			) : products && products.doc ? (
				<div className="products-container">
					<div className="flex justify-between items-center mx-2">
						<div className="flex justify-between items-center w-fit gap-2 mb-4">
							<h3 className="text-xl font-bold">Similar Products</h3>
						</div>
						<Link to="/products" className="view-box">
							View All
							<span>
								<FaAngleRight className="text-lg" />
							</span>
						</Link>
					</div>
					<ProductCarousel
						data={products?.doc}
						component={ProductCard}
						largeDesktopLimit={5}
						desktopLimit={4}
					/>
				</div>
			) : null}
		</div>
	) : (
		<p>Product details not found!</p>
	);
};

export default ProductDetailsPage;
