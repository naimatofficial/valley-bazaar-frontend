import { FaShoppingBag } from "react-icons/fa";

const ShoppingCart = () => {
	const cartItems = []; // Assuming this would be dynamic

	return (
		<div className=" w-full mx-auto p-4">
			<div className="bg-white rounded-lg p-6">
				<h2 className="text-2xl font-semibold mb-4">Shopping cart</h2>
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white">
						<thead>
							<tr>
								<th className="py-2 px-4 bg-gray-200 text-left">Product</th>
								<th className="py-2 px-4 bg-gray-200 text-left">Unit Price</th>
								<th className="py-2 px-4 bg-gray-200 text-left">Qty</th>
								<th className="py-2 px-4 bg-gray-200 text-left">Total</th>
							</tr>
						</thead>
					</table>
					<div className="mt-2 h-[60vh]  rounded-lg shadow-md border border-gray-300">
						<table className="min-w-full bg-white">
							<tbody>
								{cartItems.length === 0 ? (
									<tr>
										<td colSpan="4" className="py-10 text-center">
											<div className="flex flex-col items-center">
												<FaShoppingBag className="text-6xl text-gray-400 mb-4" />
												<p className="text-gray-500 text-lg">
													Your Cart Is Empty!
												</p>
											</div>
										</td>
									</tr>
								) : (
									cartItems.map((item, index) => (
										<tr key={index}>
											<td className="py-2 px-4 border-b border-gray-200">
												{item.product}
											</td>
											<td className="py-2 px-4 border-b border-gray-200">
												{item.unitPrice}
											</td>
											<td className="py-2 px-4 border-b border-gray-200">
												{item.quantity}
											</td>
											<td className="py-2 px-4 border-b border-gray-200">
												{item.total}
											</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-4">
					<label htmlFor="orderNote" className="block text-gray-700">
						Order Note (Optional)
					</label>
					<textarea
						id="orderNote"
						className="w-full mt-2 p-2 border rounded-lg"
						rows="4"
						placeholder="Enter your order note here..."
					/>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
