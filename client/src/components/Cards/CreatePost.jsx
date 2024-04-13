import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost, fetchPosts} from "../../redux/slices/PostSlice.js";

const CreatePost = ({toggleCreatePost}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const userId = useSelector((state) => state.auth.user.userId);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('createdBy', userId);
    formData.append('image', image);

    // Dispatch createPost action
    const actionResult = await dispatch(createPost(formData));

    // Check if the action was fulfilled successfully
    if (createPost.fulfilled.match(actionResult)) {
      // Dispatch fetchPosts to refresh the data
      dispatch(fetchPosts());
      // Clear input fields after submission
      setTitle('');
      setContent('');
      setImage(''); // Clear the image file
      // Call toggleCreatePost to close the form
      toggleCreatePost();
    } else {
      // Handle submission error if needed
      console.error('Error creating post:', actionResult.error.message);
    }
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
          <textarea id="description" name="description" value={content} onChange={(e) => setContent(e.target.value)} rows="4" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter description" required></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className='flex justify-end'>
          <button type="submit" className=" bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
