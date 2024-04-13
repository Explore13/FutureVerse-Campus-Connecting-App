import {calculateRelativeTime} from "../../utils/DateUtils.js";


const SocialPost = ({post}) => {

  return (
    <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <div className="flex items-center">
        <img
          className="w-8 h-8 rounded-full mr-2"
          src="https://via.placeholder.com/50"
          alt="Profile"
        />
        <span className="text-white font-semibold">{post.createdBy.name}</span>
      </div>
      <span className="text-gray-400">{calculateRelativeTime(post.createdAt)}</span>
    </div>
    <img
      className={`w-full h-64 object-contain ${post.image ? 'opacity-100' : 'opacity-20'}`}
      src={post.image?`http://localhost:4000/${post.image}`:`http://localhost:4000/placeholder.png`}
      alt="Post"
    />
    <div className="p-4">
      <h2 className="font-bold text-xl">{post.title}</h2>
      <p className="text-gray-800">{post.content}</p>
    </div>
  </div>
  );
};

export default SocialPost;
