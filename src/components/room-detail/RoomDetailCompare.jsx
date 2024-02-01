import React from "react";

const RoomDetailCompare = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 container mx-auto">
            <h2 className="text-xl font-bold mb-4">COMPARE ACCOMMODATION</h2>

            <div className="room-compare_content">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* ITEM */}
                    <div className="col-span-1">
                        <div className="room-compare_item">
                            <div className="img">
                                <a href="#">
                                    <img
                                        src="https://landing.engotheme.com/html/lotus/demo/images/room/detail/compare/img-1.jpg"
                                        alt="room-1"
                                    />
                                </a>
                            </div>

                            <div className="text">
                                <h2 className="text-xl font-bold mt-4 mb-4">
                                    <a href="#">LUXURY ROOM</a>
                                </h2>

                                <ul className="grid grid-cols-1 gap-2">
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-person mr-4"></i>  Max: 2 Person(s)
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-bed mr-1.5"></i> Bed: King-size or twin beds
                                    </li>
                                    <li className="flex items-center"> 
                                        <i className="fa-solid fa-eye mr-2"></i> View: Ocean
                                    </li>
                                </ul>

                                <a href="#" className="awe-btn2 awe-btn-default">
                                    VIEW DETAIL
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END / ITEM */}

                    {/* ITEM */}
                    <div className="col-span-1">
                        <div className="room-compare_item">
                            <div className="img">
                                <a href="#">
                                    <img
                                        src="https://landing.engotheme.com/html/lotus/demo/images/room/detail/compare/img-2.jpg"
                                        alt="room-2"
                                    />
                                </a>
                            </div>

                            <div className="text">
                                <h2 className="text-xl font-bold mt-4 mb-4">
                                    <a href="">FAMILY ROOM</a>
                                </h2>

                                <ul className="grid grid-cols-1 gap-2">
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-person mr-4"></i>  Max: 2 Person(s)
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-bed mr-1.5"></i> Bed: King-size or twin beds
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-eye mr-2"></i> View: Ocean
                                    </li>
                                </ul>

                                <a href="#" className="awe-btn2 awe-btn-default">
                                    VIEW DETAIL
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END / ITEM */}

                    {/* ITEM */}
                    <div className="col-span-1">
                        <div className="room-compare_item">
                            <div className="img">
                                <a href="#">
                                    <img
                                        src="https://landing.engotheme.com/html/lotus/demo/images/room/detail/compare/img-3.jpg"
                                        alt="room-3"
                                    />
                                </a>
                            </div>

                            <div className="text">
                                <h2 className="text-xl font-bold mt-4 mb-4">
                                    <a href="">STANDARD ROOM</a>
                                </h2>

                                <ul className="grid grid-cols-1 gap-2">
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-person mr-4"></i>  Max: 2 Person(s)
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-bed mr-1.5"></i> Bed: King-size or twin beds
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-eye mr-2"></i> View: Ocean
                                    </li>
                                </ul>

                                <a href="#" className="awe-btn2 awe-btn-default">
                                    VIEW DETAIL
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END / ITEM */}

                    {/* ITEM */}
                    <div className="col-span-1">
                        <div className="room-compare_item">
                            <div className="img">
                                <a href="#">
                                    <img
                                        src="https://landing.engotheme.com/html/lotus/demo/images/room/detail/compare/img-4.jpg"
                                        alt="room-4"
                                    />
                                </a>
                            </div>

                            <div className="text">
                                <h2 className="text-xl font-bold mt-4 mb-4">
                                    <a href="">COUPLE ROOM</a>
                                </h2>

                                <ul className="grid grid-cols-1 gap-2">
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-person mr-4"></i> Max: 2 Person(s)
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-bed mr-1.5"></i> Bed: King-size or twin beds
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fa-solid fa-eye mr-2"></i>View: Ocean
                                    </li>
                                </ul>

                                <a href="#" className="awe-btn2 awe-btn-default">
                                    VIEW DETAIL
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END / ITEM */}
                </div>
            </div>
        </div>
    );
};

export default RoomDetailCompare;
