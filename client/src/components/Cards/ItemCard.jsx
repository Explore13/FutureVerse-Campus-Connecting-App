import React from 'react';

function ItemCard() {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow m-5">
      <a href="#">
        <img className="p-8 rounded-t-lg" src="https://imgs.search.brave.com/P7bIA2TsydpRGrJXCYcx8Tf24OYV1eq1xQN9nrCc2s4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/MzQ0OTM3ODk4NDct/MmYwMmRjNmNhMzVk/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFlY/QndiR1VsTWpCM1lY/UmphSHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Rating stars code */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Posted by Surya Ghosh</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">₹599</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Contact Now</a>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
