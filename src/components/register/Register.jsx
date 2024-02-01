import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [isValidEmail, setIsValidEmail] = useState(true);
  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = emailRegex.test(formData.email);
    setIsValidEmail(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveFormDataToJson(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    navigate("/login");
  };

  const saveFormDataToJson = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
  };

  return (
    <section className="section-account">
      <div className="registerContainer relative pb-[100px] pt-[250px]">
        <div className="bgOverlay absolute top-0 z-0 h-full w-full bg-[rgba(72,72,72,0.3)]"></div>
        <form
          className="relative z-10 mx-auto flex w-96 flex-col items-center gap-4 font-[Montserrat] text-white"
          action="register"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-5 text-4xl font-semibold text-white">
            REGISTER FORM
          </h2>
          <input
            className="userInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="text"
            placeholder="Username*"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="emailInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="email"
            placeholder="Email*"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {!isValidEmail && <p className="text-red-500">Invalid email</p>}
          <input
            className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="password"
            placeholder="Password*"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="registerBtn my-4 w-44 border-2 border-[#e1bd85] bg-[#e1bd85] py-2.5 text-base font-semibold text-white hover:bg-white hover:text-[#e1bd85]"
            onClick={validateEmail}
            disabled={!formData.name || !formData.password || !formData.email}
          >
            REGISTER
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
