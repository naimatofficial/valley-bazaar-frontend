export const TopStoresSearch = () => (
  <div className="max-w-6xl mx-auto py-4">
    <div className="bg-green-50 p-8 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-green-800">TOP STORES</h2>
        <p className="text-green-600">Find your desired stores and shop your favourite products</p>
      </div>
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Search Store" 
          className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Search
        </button>
      </div>
    </div>
  </div>
);