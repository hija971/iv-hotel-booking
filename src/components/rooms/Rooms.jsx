import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import logo1 from "./image/img1.png"
import logo2 from "./image/img2.png"
import logo3 from "./image/img3.png"
import logo4 from "./image/img4.png"
import logo5 from "./image/img5.png"
import "./AppRooms.css";

const Rooms = () => {

    return (
        <>
            <div className="relative flex justify-center items-center">
                <div className="absolute flex flex-col items-center pt-32">
                    <h2 className="text-4xl text-[#fff]">ROOMS &amp; RATES</h2>
                    <p className="text-xl text-[#fff]">Lorem Ipsum is simply dummy text</p>
                </div>
                <div>
                    <img className="bg-cover" src={logo5} alt="My image" />
                </div>
            </div>
            <div className="w-100% h-full flex justify-center pt-12 pb-12 bg-white">
                <div className="w-9/12 h-full grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="">
                        <a className="text-slate-800 font-bold text-2xl" href="#">FAMILY ROOM</a>
                        <div>
                            <a href="#">
                                <img className="mt-4 opacity-100 hover:opacity-80 w-full" src={logo1} alt="My Image" />
                            </a>
                        </div>
                        <div>
                            <p className="text-sm font-medium mt-4 text-[#333]">
                                Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.
                            </p>
                            <ul className="rooms leading-5 mt-4 text-[#333]">
                                <li>Max: 4 Person(s)</li>
                                <li>Size: 35 m2 / 376 ft2</li>
                                <li>View: Ocen</li>
                                <li>Bed: King-size or twin beds</li>
                            </ul>
                            <div className="bot flex justify-between">
                                <span className="text-zinc-500">Starting <span className="ml-1 font-bold text-2xl text-zinc-800">$260</span> /days</span>
                                <div className="flex justify-between">
                                    <Link to="/room-detail" className="border-2 px-2.5 py-1.5 text-sm bg-[#e1bd85] border-[#e1bd85] hover:bg-white text-white hover:text-[#e1bd85]" href="#">VIEW DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <a className="text-slate-800 font-bold text-2xl" href="#">LUXURY ROOM</a>
                        <div>
                            <a href="#">
                                <img className="mt-4 opacity-100 hover:opacity-80 w-full" src={logo2} alt="My Image" />
                            </a>
                        </div>
                        <div>
                            <p className="text-sm font-medium mt-4 text-[#333]">
                                Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.
                            </p>
                            <ul className="rooms leading-5 mt-4 text-[#333]">
                                <li>Max: 4 Person(s)</li>
                                <li>Size: 35 m2 / 376 ft2</li>
                                <li>View: Ocen</li>
                                <li>Bed: King-size or twin beds</li>
                            </ul>
                            <div className="bot flex justify-between">
                                <span className="text-zinc-500">Starting <span className="ml-1 font-bold text-2xl text-zinc-800">$260</span> /days</span>
                                <div className="flex justify-between">
                                    <Link to="/room-detail" className="border-2 px-2.5 py-1.5 text-sm bg-[#e1bd85] border-[#e1bd85] hover:bg-white text-white hover:text-[#e1bd85]" href="#">VIEW DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <a className="text-slate-800 font-bold text-2xl" href="#">COUPLE ROOM</a>
                        <div>
                            <a href="#">
                                <img className="mt-4 opacity-100 hover:opacity-80 w-full" src={logo3} alt="My Image" />
                            </a>
                        </div>
                        <div>
                            <p className="text-sm font-medium mt-4 text-[#333]">
                                Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.
                            </p>
                            <ul className="rooms leading-5 mt-4 text-[#333]">
                                <li>Max: 4 Person(s)</li>
                                <li>Size: 35 m2 / 376 ft2</li>
                                <li>View: Ocen</li>
                                <li>Bed: King-size or twin beds</li>
                            </ul>
                            <div className="bot flex justify-between">
                                <span className="text-zinc-500">Starting <span className="ml-1 font-bold text-2xl text-zinc-800">$260</span> /days</span>
                                <div className="flex justify-between">
                                    <Link to="/room-detail" className="border-2 px-2.5 py-1.5 text-sm bg-[#e1bd85] border-[#e1bd85] hover:bg-white text-white hover:text-[#e1bd85]" href="#">VIEW DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <a className="text-slate-800 font-bold text-2xl" href="#">STANDARD ROOM</a>
                        <div>
                            <a href="#">
                                <img className="mt-4 opacity-100 hover:opacity-80 w-full" src={logo4} alt="My Image" />
                            </a>
                        </div>
                        <div>
                            <p className="text-sm font-medium mt-4 text-[#333]">
                                Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.
                            </p>
                            <ul className="rooms leading-5 mt-4 text-[#333]">
                                <li>Max: 4 Person(s)</li>
                                <li>Size: 35 m2 / 376 ft2</li>
                                <li>View: Ocen</li>
                                <li>Bed: King-size or twin beds</li>
                            </ul>
                            <div className="bot flex justify-between">
                                <span className="text-zinc-500">Starting <span className="ml-1 font-bold text-2xl text-zinc-800">$260</span> /days</span>
                                <div className="flex justify-between">
                                    <Link to="/room-detail" className="border-2 px-2.5 py-1.5 text-sm bg-[#e1bd85] border-[#e1bd85] hover:bg-white text-white hover:text-[#e1bd85]" href="#">VIEW DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Rooms;
