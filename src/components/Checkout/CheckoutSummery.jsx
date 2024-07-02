import React from 'react';
import { FaTruck, FaShieldAlt, FaUndo, FaCheckCircle } from 'react-icons/fa';

const CheckoutSummary = () => {
  return (
    <div className=" w-[600px] mt-[75px] mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
          <div className="border-t border-gray-200 pt-2 text-gray-600">
  <div className="flex justify-between py-1">
    <span>Sub total</span>
    <span>$0.00</span>
  </div>
  <div className="flex justify-between py-1">
    <span>Tax</span>
    <span>$0.00</span>
  </div>
  <div className="flex justify-between py-1">
    <span>Shipping</span>
    <span>$0.00</span>
  </div>
  <div className="flex justify-between py-1">
    <span>Discount on product</span>
    <span>-$0.00</span>
  </div>
  <div className="flex justify-between py-2 border-t border-gray-200 font-semibold">
    <span className="text-green-600">Total</span>
    <span>$0.00</span>
  </div>
</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-4">
          <div className="flex flex-col items-center">
            <FaTruck className="text-2xl text-blue-500 mb-1" />
            <span className="text-xs">Fast Delivery all across the country</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-2xl text-green-500 mb-1" />
            <span className="text-xs">Safe Payment</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUndo className="text-2xl text-orange-500 mb-1" />
            <span className="text-xs">7 Days Return Policy</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-2xl text-indigo-500 mb-1" />
            <span className="text-xs">100% Authentic Products</span>
          </div>
        </div>
        <button className="w-full bg-green-200 text-white py-2 rounded-lg shadow hover:bg-green-600 transition duration-300">
          Proceed to Checkout
        </button>
        <button className="w-full text-blue-500 py-2 mt-2 rounded-lg hover:underline transition duration-300">
          &lt; Continue Shopping
        </button>
      </div>
    </div>
  );
};



export default CheckoutSummary;
