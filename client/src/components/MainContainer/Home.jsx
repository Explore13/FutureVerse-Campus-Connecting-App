// import { React, useState } from "react";
// import Market from "../Marketplace/Market";
// import SocialPost from "../Cards/SocialPost";
// import "./Home.css";
// import CreatePost from "../Cards/CreatePost";
// import DeptNotice from "../Notice/DeptNotice";
// import Plusicon from "../Cards/Plusicon";
// import CreateSell from "../Cards/CreateSell";

// function Home() {
//   const [showCreatePost, setShowCreatePost] = useState(false); // State variable to track popup visibility

//   const [showCreateSell, setShowCreateSell] = useState(false);

//   // Function to toggle popup visibility
//   const toggleCreatePost = () => {
//     setShowCreatePost(!showCreatePost);
//   };
//   const toggleCreateSell = () => {
//     setShowCreateSell(!showCreateSell);
//   };

//   return (
//     <main className="flex">
//       {/* Left Section */}
//       <div className="w-1/4 flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
//         <div className="py-2">
//           {/* Button to toggle CreatePost */}

//           <div className={`flex justify-center flex-wrap items-center py-4`}>
//             <h3 className="font-bold m-2">
//               {!showCreateSell ? "Wanna Sell Something? " : ""}
//             </h3>

//             <button className={`${!showCreateSell?"bg-purple-600 text-white font-semibold px-2 py-1 rounded-md hover:bg-purple-700 ":""}`} onClick={toggleCreateSell}>
//               {!showCreateSell ? (
//                 "Click"
//               ) : (
//                 <svg
//                   class="w-6 h-6 text-gray-800 dark:text-black"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Conditionally render CreatePost component */}
//           {showCreateSell && <CreateSell />}

//           <Market />
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div className="w-3/5 h-screen overflow-y-auto bg-white-400 no-scrollbar">
//         <div className="p-4">
//           {/* Button to toggle CreatePost */}

//           <div
//             className={`flex justify-center items-center py-4`}
            
//           >
//             <button
//               className={`text-white font-bold py-2 px-4 rounded-md ${
//                 !showCreatePost
//                   ? "w-full max-w-2xl bg-orange-600 hover:bg-orange-700 "
//                   : "bg-red-700 hover:bg-red-800 rounded-full "
//               }`}onClick={toggleCreatePost}
//             >
//               {!showCreatePost ? "Create Post" : "Undo Post"}
//             </button>
//           </div>

//           {/* Conditionally render CreatePost component */}
//           {showCreatePost && <CreatePost />}

//           {/* Sample SocialPost components */}
//           <SocialPost />
//           <SocialPost />
//           <SocialPost />
//           <SocialPost />
//           <SocialPost />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-1/4 flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
//         <DeptNotice />
//       </div>
//     </main>
//   );
// }

// export default Home;

import React, { useState } from "react";
import Market from "../Marketplace/Market";
import SocialPost from "../Cards/SocialPost";
import "./Home.css";
import CreatePost from "../Cards/CreatePost";
import DeptNotice from "../Notice/DeptNotice";
import Plusicon from "../Cards/Plusicon";
import CreateSell from "../Cards/CreateSell";
import NoticeForm from "../Notice/NoticeForm"; // Import the NoticeForm component

function Home() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreateSell, setShowCreateSell] = useState(false);
  const [showNoticeForm, setShowNoticeForm] = useState(false); // State variable for NoticeForm visibility

  const toggleCreatePost = () => {
    setShowCreatePost(!showCreatePost);
  };

  const toggleCreateSell = () => {
    setShowCreateSell(!showCreateSell);
  };

  // Function to toggle NoticeForm visibility
  const toggleNoticeForm = () => {
    setShowNoticeForm(!showNoticeForm);
  };

  return (
    <main className="flex">
      {/* Left Section */}
      <div className="w-1/4 flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
        <div className="py-2">
          <div className={`flex justify-center flex-wrap items-center py-4`}>
            <h3 className="font-bold m-2">
              {!showCreateSell ? "Wanna Sell Something? " : ""}
            </h3>
            <button className={`${!showCreateSell ? "bg-purple-600 text-white font-semibold px-2 py-1 rounded-md hover:bg-purple-700 " : ""}`} onClick={toggleCreateSell}>
              {!showCreateSell ? (
                "Click"
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          {showCreateSell && <CreateSell />}
          <Market />
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-3/5 h-screen overflow-y-auto bg-white-400 no-scrollbar">
        <div className="p-4">
          <div className={`flex justify-center items-center py-4`}>
            <button className={`text-white font-bold py-2 px-4 rounded-md ${!showCreatePost ? "w-full max-w-2xl bg-orange-600 hover:bg-orange-700 " : "bg-red-700 hover:bg-red-800 rounded-full "}`} onClick={toggleCreatePost}>
              {!showCreatePost ? "Create Post" : "Undo Post"}
            </button>
          </div>
          {showCreatePost && <CreatePost />}
          <SocialPost />
          <SocialPost />
          <SocialPost />
          <SocialPost />
          <SocialPost />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/4 flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
        <DeptNotice />
      </div>

      {/* Floating button to toggle NoticeForm visibility */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={toggleNoticeForm}>
          <Plusicon />
        </button>
      </div>

      {/* Conditionally render NoticeForm component */}
      {showNoticeForm && <NoticeForm onClose={toggleNoticeForm} />}
    </main>
  );
}

export default Home;
