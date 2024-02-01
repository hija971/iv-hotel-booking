import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./PaymentDetailForm.css";
import "./BillDetailTitles";
import BillDetailTitles from "./BillDetailTitles";
import Bill from "./Bill";

function PaymentDetailForm() {
  //handle country selection
  const countries = ["Viet Nam", "USA", "Canada", "UK", "Japan", "China"];
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setFormData({
      ...formData,
      country: event.target.value,
    });
  };

  //handle all input change
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    apartment: "",
    townCity: "",
    country: "",
    email: "",
    phone: "",
    orderNotes: "",
    paymentMethod: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //handle submit
  const handleSubmit = (event) => {
    //prevent reload
    event.preventDefault();
    //save form data to JSON file
    saveFormDataToJson(formData);
    //clear form inputs after submit
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      street: "",
      apartment: "",
      townCity: "",
      country: "",
      email: "",
      phone: "",
      orderNotes: "",
      paymentMethod: "",
    });
    setTimeout(function () {
      document.querySelector(".roomBill").style.display = "flex";
    }, 1000);
  };

  //save form data to JSON
  const saveFormDataToJson = () => {
    localStorage.setItem("billingDetails", JSON.stringify(formData));
  };

  //get reserveDetails items from localStorage then parse it back to object
  const getReserveDetails = JSON.parse(localStorage.getItem("reserveDetails"));

  //calculate total nights
  const date1 = new Date(getReserveDetails.arriveDate);
  const date2 = new Date(getReserveDetails.departureDate);

  const timeDiff = Math.abs(date1.getTime() - date2.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  console.log(diffDays); // Output: 2

  //test logging
  // useEffect(() => {
  //   console.log(billingDetails);/
  //   console.log(typeof(billingDetails));
  // }, []);

  return (
    <div className="relative">
      <section className="topBanner bg-16 pt-20">
        <div className="awe-overlay"></div>
        <div className="sub-banners">
          <div className="container">
            <div className="texts text-center font-[montserrat]">
              <h2>RESERVATION</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
        </div>
      </section>
      <section className="roomBill fixed left-0 top-0 z-10 hidden h-full w-full items-center justify-center bg-slate-400 bg-opacity-60">
        <Bill></Bill>
      </section>
      <section className="bodyContents flex flex-col items-center bg-white pb-16 pt-8">
        <div className="grid w-2/3 grid-cols-3 font-[hind]">
          <section className="roomBill col-span-1 flex h-full flex-col items-center">
            <div className="dates mb-7 w-2/3 bg-[#F1F1F1] py-4">
              <h3 className="text-center font-[montserrat] text-lg font-semibold">
                DATES
              </h3>
              <hr className="my-4 border-b-0 border-slate-300" />
              <ul className="flex flex-col gap-3 px-5">
                <li className="flex justify-between text-xs">
                  <span>Check-In</span>
                  <span className="font-semibold">
                    {getReserveDetails.arriveDate}
                  </span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Check-Out</span>
                  <span className="font-semibold">
                    {getReserveDetails.departureDate}
                  </span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Total Nights</span>
                  <span className="font-semibold">{diffDays}</span>
                </li>
                <li className="flex justify-between text-xs">
                  <span>Total Guests</span>
                  <span className="font-semibold">
                    {getReserveDetails.adults} Adult,{" "}
                    {getReserveDetails.children} Child
                  </span>
                </li>
              </ul>
            </div>
            <div className="selectRooms w-2/3 bg-[#F1F1F1] py-4">
              <h3 className="text-center font-[montserrat] text-lg font-semibold">
                SELECTED ROOMS
              </h3>
              <hr className="my-4 border-b-0 border-slate-300" />
              <ul className="flex flex-col gap-3 px-5">
                <li className="flex flex-row items-center gap-5 text-sm">
                  <h5 className="font-[montserrat] text-sm font-semibold">
                    ROOM FOR
                  </h5>
                  <span>
                    {getReserveDetails.adults} Adult,{" "}
                    {getReserveDetails.children} Child
                  </span>
                </li>
                <h4 className="font-[montserrat] font-semibold text-[#E1BD85]">
                  LUXURY ROOM
                </h4>
                <hr className=" border-b-0 border-slate-300" />
                <h5 className="font-[montserrat] text-sm font-semibold">
                  SPACE PRICE
                </h5>
                <li className="flex justify-between text-sm">
                  <span>3 June 2023</span>
                  <span className="font-semibold">
                    ${getReserveDetails.price}.00
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>6 June 2023</span>
                  <span className="font-semibold">
                    ${getReserveDetails.price}.00
                  </span>
                </li>
                <hr className=" border-b-0 border-slate-300" />
                <li className="flex justify-between text-sm">
                  <span>Service</span>
                  <span className="font-semibold">FREE</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">
                    ${getReserveDetails.price + getReserveDetails.price * 0.1}
                    .00
                  </span>
                </li>
                <hr className=" border-b-0 border-slate-300" />
                <li className="flex justify-between">
                  <h5 className="font-[montserrat] text-sm font-semibold">
                    TOTAL FOR NIGHTS STAYED
                  </h5>
                  <h5 className="font-[montserrat] text-sm font-semibold text-[#E1BD85]">
                    $
                    {(getReserveDetails.price + getReserveDetails.price * 0.1) *
                      diffDays}
                    .00
                  </h5>
                </li>
              </ul>
            </div>
            <div className="totalCost my-0 flex w-2/3 justify-between bg-[#E1BD85] px-5 py-4">
              <h4 className="font-[montserrat] font-bold text-white">TOTAL</h4>
              <h4 className="font-[montserrat] font-bold text-white">
                $
                {(getReserveDetails.price + getReserveDetails.price * 0.1) *
                  diffDays}
                .00
              </h4>
            </div>
          </section>
          <section
            className="billingDetails col-span-2 h-full w-2/3"
            onSubmit={handleSubmit}
          >
            <span className="text-sm text-gray-400">
              Returning customer?{" "}
              {
                <Link to="/login" className="text-black">
                  Click here to login
                </Link>
              }
            </span>
            <h1 className="my-6 font-[montserrat] text-4xl font-semibold">
              BILLING DETAILS
            </h1>
            <div>
              <BillDetailTitles title="COUNTRY" mustFill={true}>
                <select
                  className="w-full focus:outline-none"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </BillDetailTitles>
              <div className="grid grid-cols-2 gap-7">
                <BillDetailTitles title="FIRST NAME" mustFill={true}>
                  <input
                    type="text"
                    className="w-full capitalize"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </BillDetailTitles>
                <BillDetailTitles title="LAST NAME" mustFill={true}>
                  <input
                    type="text"
                    className="w-full capitalize"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </BillDetailTitles>
              </div>
              <BillDetailTitles title="COMPANY NAME">
                <input
                  type="text"
                  className="w-full capitalize"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </BillDetailTitles>
              <BillDetailTitles title="ADDRESS" mustFill={true}>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full capitalize"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                />
              </BillDetailTitles>
              <BillDetailTitles>
                <input
                  type="text"
                  placeholder="Apartment, suite, unit etc. (Optional)"
                  className="w-full capitalize"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                />
              </BillDetailTitles>
              <div className="grid grid-cols-2 gap-7">
                <BillDetailTitles title="TOWN / CITY" mustFill={true}>
                  <input
                    type="text"
                    className="w-full capitalize"
                    name="townCity"
                    value={formData.townCity}
                    onChange={handleChange}
                  />
                </BillDetailTitles>
                <BillDetailTitles title="COUNTRY" mustFill={true}>
                  <input
                    type="text"
                    className="w-full"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </BillDetailTitles>
              </div>
              <div className="grid grid-cols-2 gap-7">
                <BillDetailTitles title="EMAIL ADDRESS" mustFill={true}>
                  <input
                    type="email"
                    className="w-full"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </BillDetailTitles>
                <BillDetailTitles title="PHONE" mustFill={true}>
                  <input
                    type="text"
                    className="w-full"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </BillDetailTitles>
              </div>
              <BillDetailTitles title="ORDER NOTES">
                <div className="grid grid-cols-1 grid-rows-6">
                  <input
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className="h-full w-full"
                    type="text"
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                  />
                </div>
              </BillDetailTitles>
            </div>
            <p className="my-4 bg-black px-5 py-4 text-white">
              Do you have a coupon?{" "}
              <Link to="" className="hover:text-[#e1bd85]">
                Click here to enter your code.
              </Link>
            </p>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-row items-center gap-2 font-[montserrat] text-sm font-semibold text-black">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="DIRECT BANK TRANSFER"
                  checked={formData.paymentMethod === "DIRECT BANK TRANSFER"}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      paymentMethod: event.target.value,
                    })
                  }
                />
                DIRECT BANK TRANSFER
              </li>
              <li className="flex flex-row items-center gap-2 font-[montserrat] text-sm font-semibold text-black">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="CHEQUE PAYMENT"
                  checked={formData.paymentMethod === "CHEQUE PAYMENT"}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      paymentMethod: event.target.value,
                    })
                  }
                />
                CHEQUE PAYMENT
              </li>
              <li className="flex flex-row items-center gap-2 font-[montserrat] text-sm font-semibold text-black">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="CREDIT CARD"
                  checked={formData.paymentMethod === "CREDIT CARD"}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      paymentMethod: event.target.value,
                    })
                  }
                />
                CREDIT CARD{" "}
                <img
                  src="https://landing.engotheme.com/html/lotus/demo/images/icon-card.jpg"
                  alt="card-types"
                />
              </li>
            </ul>
            <button
              className="placeOrderBtn mt-10 w-44 border-2 border-[#e1bd85] bg-[#e1bd85] py-2.5 font-[montserrat] text-sm font-semibold text-white hover:bg-white hover:text-[#e1bd85]"
              onClick={handleSubmit}
              disabled={
                !formData.firstName ||
                !formData.lastName ||
                !formData.street ||
                !formData.country ||
                !formData.email ||
                !formData.phone ||
                !formData.paymentMethod
              }
            >
              PLACE ORDER
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}

export default PaymentDetailForm;
