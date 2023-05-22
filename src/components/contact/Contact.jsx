import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/send-email",
        formData
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="my-3 p-5 rounded-sm bg-primary shadow-md border border-secondary">
      <h2 className="text-xl font-bold mb-3">Contact Us</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="font-medium text-lg mb-1 block">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full h-[35px] rounded-sm outline-none px-2 border-text border-opacity-60"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="font-medium text-lg mb-1 block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full h-[35px] rounded-sm outline-none px-2 border-text border-opacity-60"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="font-medium text-lg mb-1 block">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="border w-full h-[120px] rounded-sm outline-none px-2 border-text border-opacity-60"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-5 py-[5px] bg-button text-primary rounded-sm hover:bg-opacity-90 duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
