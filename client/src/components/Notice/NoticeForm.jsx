// NoticeForm.jsx
import React, { useState } from "react";

function NoticeForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [visibility, setVisibility] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Submitted:", { title, description, image, visibility });
    // Reset form fields
    setTitle("");
    setDescription("");
    setImage("");
    setVisibility("");
    // Close the form
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-lg">
      <div className="bg-white rounded-lg p-6 w-2/3">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Create Notice</h2>
          <input type="text" placeholder="Notice Title" className="w-full bg-gray-100 rounded-md p-2 mb-4 focus:outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Notice Description" className="w-full bg-gray-100 rounded-md p-2 mb-4 focus:outline-none" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="file" accept="image/*" className="w-full bg-gray-100 rounded-md p-2 mb-4 focus:outline-none" onChange={(e) => setImage(e.target.files[0])} />
          <select className="w-full bg-gray-100 rounded-md p-2 mb-4 focus:outline-none" value={visibility} onChange={(e) => setVisibility(e.target.value)}>
            <option value="">Select Visibility</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="CSDS">CSDS</option>
            <option value="All">All</option>
            <option value="Club1">Club1</option>
            <option value="Club2">Club2</option>
            <option value="Club3">Club3</option>
            {/* Add more options as needed */}
          </select>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NoticeForm;
