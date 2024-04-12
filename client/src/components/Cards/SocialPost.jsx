import React from 'react';

const SocialPost = () => {
  return (
    <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <div className="flex items-center">
        <img
          className="w-8 h-8 rounded-full mr-2"
          src="https://via.placeholder.com/50"
          alt="Profile"
        />
        <span className="text-white font-semibold">Username</span>
      </div>
      <span className="text-gray-400">2 hours ago</span>
    </div>
    <img
      className="w-full h-64 object-cover object-center"
      src="https://via.placeholder.com/500"x
      alt="Post"
    />
    <div className="p-4">
      <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat asperiores ipsa voluptatibus architecto a nam voluptate eligendi iusto iure!</p>
    </div>
    <div className="flex justify-center items-center py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Contact Now
      </button>
    </div>
  </div>
  );
};

export default SocialPost;
