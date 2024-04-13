import Market from "../Marketplace/Market";
import SocialPost from "../Cards/SocialPost";
import "./Home.css";
import CreatePost from "../Cards/CreatePost";
import DeptNotice from "../Notice/DeptNotice";
import PlusIcon from "../Cards/Plusicon";
import CreateSell from "../Cards/CreateSell";
import NoticeForm from "../Notice/NoticeForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectAllPosts,} from "../../redux/slices/PostSlice.js";
import {useEffect, useState} from "react";

function Home() {
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [showCreateSell, setShowCreateSell] = useState(false);
    const [showNoticeForm, setShowNoticeForm] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const posts = useSelector(selectAllPosts);

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
            <div
                className="w-1/4 flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
                <div className="py-2">
                    <div className={`flex justify-center flex-wrap items-center py-4`}>
                        <h3 className="font-bold m-2">
                            {!showCreateSell ? "Wanna Sell Something? " : ""}
                        </h3>
                        <button
                            className={`${!showCreateSell ? "bg-purple-600 text-white font-semibold px-2 py-1 rounded-md hover:bg-purple-700 " : ""}`}
                            onClick={toggleCreateSell}>
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
                    {showCreateSell && <CreateSell/>}
                    <Market/>
                </div>
            </div>

            {/* Middle Section */}
            <div className="w-3/5 h-screen overflow-y-auto bg-white-400 no-scrollbar">
                <div className="p-4">
                    <div className={`flex justify-center items-center py-4`}>
                        <button
                            className={`text-white font-bold py-2 px-4 rounded-md ${!showCreatePost ? "w-full max-w-2xl bg-orange-600 hover:bg-orange-700 " : "bg-red-700 hover:bg-red-800 rounded-full "}`}
                            onClick={toggleCreatePost}>
                            {!showCreatePost ? "Create Post" : "Undo Post"}
                        </button>
                    </div>
                    {showCreatePost && <CreatePost toggleCreatePost={toggleCreatePost}/>}

                    {posts.map((post) => <SocialPost key={post._id} post={post}/>)}
                </div>
            </div>

            {/* Right Section */}
            <div
                className="w-1/4 flex items-center flex-col h-screen overflow-y-auto bg-white-400 overflow-hidden no-scrollbar shadow-lg">
                <DeptNotice/>
            </div>

            {/* Floating button to toggle NoticeForm visibility */}
            <div className="fixed bottom-4 right-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={toggleNoticeForm}>
                    <PlusIcon/>
                </button>
            </div>

            {/* Conditionally render NoticeForm component */}
            {showNoticeForm && <NoticeForm onClose={toggleNoticeForm}/>}
        </main>
    );
}

export default Home;
