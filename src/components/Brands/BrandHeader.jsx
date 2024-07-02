import { TbSortAscending2 } from "react-icons/tb";

 export const BrandHeader =()=> {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center w-full">
      <div>
        <h2 className="text-xl font-semibold">Brand Products (Digital Product)</h2>
        <p className="text-gray-500">3 Items found</p>
      </div>
      <div>
      <div className="flex items-center space-x-2 border-2 border-gray-200  px-2 rounded-lg hover:shadow-lg">
            <TbSortAscending2 className="text-gray-600" />

            <label className="text-gray-700">Sort by:</label>
            <select className=" pl-4 pr-10 py-2  px-2 py-1 focus:outline-none">
              <option>Latest</option>
              <option>Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
      </div>
    </div>
  );
}