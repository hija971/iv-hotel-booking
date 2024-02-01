import React from "react";
import { Link } from "react-router-dom";

function Bill() {
  //get billingDetails item from localStorage then parse it back to object
  const getBillDetails = JSON.parse(localStorage.getItem("billingDetails"));

  //get reserveDetails items from localStorage then parse it back to object
  const getReserveDetails = JSON.parse(localStorage.getItem("reserveDetails"));

  //calculate total nights
  const date1 = new Date(getReserveDetails.arriveDate);
  const date2 = new Date(getReserveDetails.departureDate);

  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className="roomBill flex w-full flex-col items-center">
      <div className="w-1/3 bg-[#F1F1F1] py-4">
        <h3 className="text-center font-[montserrat] text-lg font-semibold">
          RESERVATION RECEIPT
        </h3>
        <hr className="my-4 border-b-0 border-slate-300" />

        <ul className="flex flex-col gap-3 px-5">
          <li className="flex flex-row items-center gap-5 text-sm">
            <h5 className="font-[montserrat] text-sm font-semibold">
              ROOM FOR
            </h5>
            <span>
              {getReserveDetails ? getReserveDetails.adults : ""} Adult, {getReserveDetails ? getReserveDetails.children : ""}{" "}
              Child
            </span>
          </li>
          <hr className=" border-b-0 border-slate-300" />
          <>
            <h5 className="font-[montserrat] text-sm font-semibold">DATES</h5>
            <li className="flex justify-between text-sm">
              <span>Arrive date</span>
              <span className="font-semibold">
                {getReserveDetails ? getReserveDetails.arriveDate : ""}
              </span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Depart date</span>
              <span className="font-semibold">
                {getReserveDetails ? getReserveDetails.departureDate : ""}
              </span>
            </li>
          </>
          <>
            <hr className=" border-b-0 border-slate-300" />
            <h5 className="font-[montserrat] text-sm font-semibold">
              CUSTOMER'S DETAILS
            </h5>
            <li className="flex justify-between text-sm">
              <span>Customer's name</span>
              <span className="font-semibold">
                {getBillDetails ? getBillDetails.firstName : ""} {getBillDetails ? getBillDetails.lastName : ""}
              </span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Company name</span>
              <span className="font-semibold">
                {getBillDetails ? getBillDetails.companyName : ""}
              </span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Address</span>
              <span className="font-semibold">
                {getBillDetails ? getBillDetails.apartment : ""} {getBillDetails ? getBillDetails.street : ""}{" "}
                {getBillDetails ? getBillDetails.townCity : ""} {getBillDetails ? getBillDetails.country : ""}
              </span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Email</span>
              <span className="font-semibold">{getBillDetails ? getBillDetails.email : ""}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Phone</span>
              <span className="font-semibold">{getBillDetails ? getBillDetails.phone : ""}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Order notes</span>
              <span className="font-semibold">
                {getBillDetails ? getBillDetails.orderNotes : ""}
              </span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Payment method</span>
              <span className="font-semibold">
                {getBillDetails ? getBillDetails.paymentMethod : ""}
              </span>
            </li>
          </>
        </ul>
      </div>
      <div className="totalCost my-0 flex w-1/3 justify-between bg-[#E1BD85] px-5 py-4">
        <h4 className="font-[montserrat] font-bold text-white">TOTAL PAID</h4>
        <h4 className="font-[montserrat] font-bold text-white">
          $
          {getReserveDetails ? (getReserveDetails.price + getReserveDetails.price * 0.1) * diffDays : "" }
          .00
        </h4>
      </div>
      <Link
        to="/"
        className="backHomeBtn my-0 w-1/3 border-2 border-black bg-black px-5 py-3.5 text-center font-[montserrat] font-bold text-white hover:bg-white hover:text-black"
        style={{ transition: "color 0.3s ease" }}
      >
        RETURN TO HOME
      </Link>
    </div>
  );
}

export default Bill;
