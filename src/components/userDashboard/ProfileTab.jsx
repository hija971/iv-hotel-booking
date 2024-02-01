import React, { useState } from 'react';

const ProfileTab = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('123456789');
  const [gender, setGender] = useState({
    male: false,
    female: false,
    other: false,
  });

  const handleSave = () => {
    // Lưu thông tin đã thay đổi
    console.log('Thông tin đã được lưu:', username, name, email, phone, gender);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleGenderChange = (event) => {
    const { name, checked } = event.target;
    setGender((prevGender) => ({
      ...prevGender,
      [name]: checked,
    }));
  };

  return (
    <div className="px-5">
      <h2 className="text-2xl font-semibold mb-3">My Profile</h2>
      <p className="mb-3">Manage and protect your account</p>
      <div className="border-b mb-3"></div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 border-r">
          <form>
            <table className="w-full">
              <tr>
                <td className="text-right pb-3">
                  <label>Username</label>
                </td>
                <td className="pl-5 pb-3">{username}</td>
              </tr>
              <tr>
                <td className="text-right pb-3">
                  <label>Name</label>
                </td>
                <td className="pl-5 pb-3">
                  <input className="border rounded-md p-1" type="text" id="name" value={name} onChange={handleNameChange} />
                </td>
              </tr>
              <tr>
                <td className="text-right pb-3">
                  <label>Email</label>
                </td>
                <td className="flex">
                  <div className="pl-5 pb-3 mr-1">{email}</div>
                  <button className="pb-3 underline">Change</button>
                </td>
              </tr>
              <tr>
                <td className="text-right pb-3">
                  <label>Phone Number</label>
                </td>
                <td className="flex">
                  <div className="pl-5 pb-3 mr-1">{phone}</div>
                  <button className="pb-3 underline">Change</button>
                </td>
              </tr>
              <tr>
                <td className="text-right pb-3">
                  <label>Gender</label>
                </td>
                <td>
                  <div className="flex ml-5 pb-3">
                    <div className="mr-2">
                      <input
                        type="checkbox"
                        name="male"
                        checked={gender.male}
                        onChange={handleGenderChange}
                      />
                      <label>Male</label>
                    </div>
                    <div className="mr-2">
                      <input
                        type="checkbox"
                        name="female"
                        checked={gender.female}
                        onChange={handleGenderChange}
                      />
                      <label>Female</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="other"
                        checked={gender.other}
                        onChange={handleGenderChange}
                      />
                      <label>Other</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="pl-5">
                  <button className="border rounded-md  px-3 py-1" onClick={handleSave}>Save</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="col-span-1">
            <Avatar />
        </div>
      </div>
    </div>
  );
};

function Avatar() {
  function handleAvatarChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const preview = document.getElementById('avatar-preview');
      if (preview) {
        preview.src = reader.result;
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function openFilePicker() {
    const filePicker = document.getElementById('avatar');
    if (filePicker) {
      filePicker.click();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="avatar" className="cursor-pointer">
        <img
          id="avatar-preview"
          src="https://via.placeholder.com/150"
          alt="Avatar Preview"
          className="w-32 h-32 rounded-full object-cover"
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarChange}
        />
      </label>
      <button
        onClick={openFilePicker}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Chọn ảnh
      </button>
    </div>
  );
}
export default ProfileTab;
