import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RoomDetailForm.css";

function RoomDetailForm() {
  const [formData, setFormData] = useState({
    arriveDate: "",
    departureDate: "",
    adults: 0,
    children: 0,
    price: 260,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const saveFormDataToJson = () => {
    localStorage.setItem("reserveDetails", JSON.stringify(formData));
  };

  const handleBookNowClick = () => {
    // Lưu thông tin vào localStorage
    saveFormDataToJson(formData);

    // Chuyển sang trang checkout
    navigate("/checkout");
  };

  return (
    <div className="room-detail">
      <div className="form-group">
        <label htmlFor="arriveDate">Arrive Date:</label>
        <input type="date" id="arriveDate" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="departureDate">Departure Date:</label>
        <input type="date" id="departureDate" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="adults">Adults:</label>
        <input type="number" id="adults" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="children">Children:</label>
        <input type="number" id="children" onChange={handleChange} />
      </div>
      <button
        className="booking"
        onClick={handleBookNowClick}
        disabled={
          !formData.arriveDate ||
          !formData.departureDate ||
          !formData.adults ||
          !formData.children
        }
      >
        Book Now
      </button>
    </div>
  );
}

export default RoomDetailForm;
