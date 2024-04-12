import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    const postData = {
      title,
      description,
      image
    };
    console.log(postData); // For testing, replace with actual submission logic
    // Clear input fields after submission
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl border-gray-200 border overflow-hidden mx-auto my-4">
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create a Post</h2>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter title" required />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter description" required></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div className='flex justify-end'>
          <button type="submit" className=" bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
