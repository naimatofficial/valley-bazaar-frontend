import WishItems from "./subcomponenets/WishItems";

const WishList = () => {
	const wishlistItems = [
    {
      id: 1,
      name: 'Stone Crystal Unique Design Necklace Woman Exquisite Wild Short Clavicle Chain',
      brand: 'S.Cube',
      originalPrice: 5000.00,
      discountedPrice: 4500.00,
      discountType: 'percentage',
      discountValue: 10,
      image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sdc05e9ea0cca4427a08080a53c9d0529F/Luxury-Fashion-Emerald-Stainless-Steel-Gold-Color-Necklace-for-Woman-Jewelry-Pendant-Girl-Sexy-Clavicle-Chain.jpg_.webp' // Replace with your image link
    },
    {
      id: 2,
      name: '15 IN 1 MAKEUP COMBO SET WITH FULL MAKEUP COVERAGE set',
      brand: 'Estha dot',
      originalPrice: 2500.00,
      discountedPrice: 2480.00,
      discountType: 'amount',
      discountValue: 20,
      image: 'https://m.media-amazon.com/images/I/51ccxEWKgeL._SX300_SY300_QL70_ML2_.jpg' // Replace with your image link
    }
  ];
	return (
		<div>
			<WishItems wishlistItems={wishlistItems} />
		</div>
	);
};

export default WishList;
