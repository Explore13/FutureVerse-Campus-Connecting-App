import React from 'react';

function ItemCard({market}) {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow m-5">
        <img className="p-8 rounded-t-lg" src={market.image?`http://localhost:4000/${market.image}`:`http://localhost:4000/placeholder.png`} alt="product image" />
      <div className="px-5 pb-5">
          <h5 className="text-xl font-bold tracking-tight text-gray-900">{market.content}</h5>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Rating stars code */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Posted by {market.createdBy.name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">₹{market.price}</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
