import React, { useState } from "react";

function DateInput(props) {
  const [dateValue, setDateValue] = useState("");

  function handleDateChange(e) {
    setDateValue(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <div className="mr-2">
      <label className="block text-gray-700 font-bold mb-2 text-white" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="date"
        name={props.name}
        id={props.name}
        value={dateValue}
        onChange={handleDateChange}
        min={props.minDate}
        max={props.maxDate}
      />
    </div>
  );
}

const DateRange = (props) => {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  function handleArrivalDateChange(newValue) {
    setArrivalDate(newValue);
    let minDeparture = new Date(newValue);
    minDeparture.setDate(minDeparture.getDate() + 1);

    if (new Date(departureDate) < minDeparture) {
      setDepartureDate(minDeparture.toISOString().slice(0, 10));
    }
  }

  function handleDepartureDateChange(newValue) {
    setDepartureDate(newValue);
    let maxArrival = new Date(newValue);
    maxArrival.setDate(maxArrival.getDate() - 1);

    if (new Date(arrivalDate) > maxArrival) {
      setArrivalDate(maxArrival.toISOString().slice(0, 10));
    }
  }

  function handleAdultsChange(event) {
    setAdults(parseInt(event.target.value));
  }

  function handleChildrenChange(event) {
    setChildren(parseInt(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = { arrivalDate, departureDate, adults, children };
    localStorage.setItem('bookingData', JSON.stringify(data));
  }

  return (
    <div className="bg-black/60 py-2">
      <div className="container flex justify-between items-center">
        <div className="flex items-center text-white">
          <i class="fa-solid fa-check border-2 border-[#e1bd85] text-[#e1bd85] font-bold rounded-full p-3 mr-2"></i>
          <h2 className="uppercase font-bold text-2xl">check <br /> Availability</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <DateInput
              label="Arrival Date"
              name="arrivalDate"
              minDate={new Date().toISOString().slice(0, 10)}
              maxDate={departureDate || undefined}
              onChange={handleArrivalDateChange}
            />
            <DateInput
              label="Departure Date"
              name="departureDate"
              minDate={arrivalDate || new Date().toISOString().slice(0, 10)}
              maxDate={undefined}
              onChange={handleDepartureDateChange}
            />
            <div className="mr-2">
              <label className="block text-gray-700 font-bold mb-2 text-white" htmlFor="adults">
                Adults
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={adults}
                onChange={handleAdultsChange}
              />
            </div>
            <div className="mr-2">
              <label className="block text-gray-700 font-bold mb-2 text-white" htmlFor="children">
                Children
              </label>
              <input
                type="number"
                id="children"
                name="children"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={children}
                onChange={handleChildrenChange}
              />
            </div>
            <div className="mt-8 flex justify-end">
              <button className="px-4 py-2 bg-yellow-500 rounded-md text-white font-medium hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                Find the best rate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DateRange;