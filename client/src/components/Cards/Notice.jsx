import React from 'react'

const Notice = () => {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow m-5">
      <div className="flex w-full flex-col gap-0.5c bg-blue-100 justify-center py-4 items-center">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Anirban Mondal
        </h5>

        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
          HOD. of ECE
        </p>
      </div>

      <div className="px-5 pb-5">
        <div className=" my-3 mx-1">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </div>

        <div className="mx-1">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            "I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys !!!"
          </p>
        </div>

        <div className="flex items-center mx-1 mt-2.5 mb-5">
          {/* Rating stars code */}
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Posted on (11-04-2023), Thursday
          </span>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-xs px-2 py-2 text-center"
          >
            View Notice
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notice;
