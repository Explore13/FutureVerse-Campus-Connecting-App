import React, { useState } from "react";

function CreatePost() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // State for image
  const [price, setPrice] = useState(""); // State for price

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Grab the first file selected
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log("Form submitted:", { description, image, price });
  };

  return (
    <div className="w-full max-w-xs  border p-4 rounded-lg  bg-gray-100 m-5">
      <h2 className="text-xl font-bold text-center mb-4">Create a New Sell</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="border rounded-lg py-2 px-3 w-full"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="border rounded-lg py-2 px-3 w-full"
            type="file"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="border rounded-lg py-2 px-3 w-full"
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="flex justify-end">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300" type="submit">
          Create Sell
        </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
