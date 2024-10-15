import ItemCard from '../Cards/ItemCard'
import SocialPost from "../Cards/SocialPost";
import "./Home.css";
import CreatePost from "../Cards/CreatePost";
import DeptNotice from "../Notice/DeptNotice";
import PlusIcon from "../Cards/Plusicon";
import CreateSell from "../Cards/CreateSell";
import NoticeForm from "../Notice/NoticeForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectAllPosts,} from "../../redux/slices/PostSlice.js";
import {fetchMarkets, selectAllMarkets,} from "../../redux/slices/MarketSlice.js";

import {useEffect, useState} from "react";

function Home() {
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [showCreateSell, setShowCreateSell] = useState(false);
    const [showNoticeForm, setShowNoticeForm] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchMarkets());

    }, []);

    const posts = useSelector(selectAllPosts);
    const markets = useSelector(selectAllMarkets);


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
                            className={`${!showCreateSell ? "bg-purple-600 text-white font-semibold px-2 py-1 rounded-md hover:bg-purple-700 " : "bg-red-700 hover:bg-red-800 px-2 py-1  rounded-md "}`}
                            onClick={toggleCreateSell}>
                            {!showCreateSell ? (
                                "Click"
                            ) : "Close"
                            }
                        </button>
                    </div>
                    {showCreateSell && <CreateSell toggleCreateSell={toggleCreateSell}/>}

                    {markets && markets.map((market) => <ItemCard key={market._id} market={market}/>)}
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

                    {posts && posts.map((post) => <SocialPost key={post._id} post={post}/>)}
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
