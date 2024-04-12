import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createBrowserRouter,Route, RouterProvider,createRoutesFromElements } from "react-router-dom"
import Home from './components/MainContainer/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Layout from './Layout'
import Login from './components/Login/Login'
import Market from './components/Marketplace/Market'
import NoticeBoard from './components/Notice/NoticeBoard'
import Register from './components/Register/Register'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='market' element={<Market />} />

      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

      <Route path='/notice' element={<NoticeBoard/>}></Route>


    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

