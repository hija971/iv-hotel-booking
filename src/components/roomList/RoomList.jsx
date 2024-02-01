import React from "react";
import roomData from "./roomData.json";

const RoomList = () => {
  // Lặp qua dữ liệu phòng và tạo mã HTML cho mỗi phòng
  const roomElements = roomData.map((room) => (
    <div className="col-span-1 relative" key={room.id}>
      <div className="img overflow-hidden">
        <a href="#">
          <img className="w-full transition duration-300 ease-in-out hover:scale-110" src={room.imgUrl} alt={room.name} />
        </a>
      </div>
      <div className="text absolute w-full h-min bg-black/60 py-2 px-5 bottom-5">
        <h2 className="text-xl font-normal float-left">
          <a className="text-white hover:text-[#e1bd85]" href="#">{room.name}</a>
        </h2>
        <p className="text-[#e1bd85] mb-0 mt-0 float-right">
          <span className="text-white text-2xl mr-2">${room.price}</span>
          /days
        </p>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-10">
      {roomElements}
    </div>
  )
};

export default RoomList;