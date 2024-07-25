/* eslint-disable react/prop-types */
import FlatCard from "../../shared/FlatCard";

const MoreProducts = ({ products }) => {
	return products && products?.doc && products.doc.length ? (
		<div className="flex-1 p-4">
			<h2 className="text-xl font-semibold mb-4">More From The Store</h2>
			<div className="space-y-4">
				{products?.doc?.map((product, index) => (
					<FlatCard key={index} {...product} />
				))}
			</div>
		</div>
	) : null;
};

export default MoreProducts;
