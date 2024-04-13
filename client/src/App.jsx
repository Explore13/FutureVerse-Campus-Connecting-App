import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/MainContainer/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import NoticeBoard from "./components/Notice/NoticeBoard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            {/* Protected routes wrapped in ProtectedRoute */}
            <Route element={<ProtectedRoute/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='notice' element={<NoticeBoard/>}/>
            </Route>

            {/* Unprotected routes */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Route>
    )
);

const App = () => <RouterProvider router={router}/>

export default App
