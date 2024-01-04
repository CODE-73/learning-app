import React, { useState } from 'react';
import Image from 'next/image';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <div className="bg-fuchsia-200 text-center p-5">
        <Image
          src="/images/audire.png"
          alt="Company Logo"
          width={150}
          height={40}
        />
      </div>

      <div className="mx-auto max-w-md p-6 bg-white border rounded-md mt-5">
        <h2 className="text-2xl text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </label>

          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </label>

          <label className="block mb-2">
            Phone Number:
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </label>

          <label className="block mb-2">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-fuchsia-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
