import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Rooms from "./components/rooms/Rooms";
import RoomDetail from "./components/room-detail/RoomDetail";
import PaymentDetailForm from "./components/payment/PaymentDetailForm";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import "./App.css";

function App({ isMobileDevice }) {
  return (
    <BrowserRouter>
      <Layout isMobileDevice={isMobileDevice}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room-detail" element={<RoomDetail />} />
          <Route path="/checkout" element={<PaymentDetailForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;