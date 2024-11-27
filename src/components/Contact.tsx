"use client";
import React, { useState } from "react";
import Title from "./Title";
import { FaWhatsapp } from "react-icons/fa";
import FormInput from "./FormInput";

type FormContent = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formContent, setFormContent] = useState<FormContent>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormContent((prevContent) => ({
      ...prevContent,
      [e.target.name]: e.target.value,
    }));
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormContent((prevContent) => ({
      ...prevContent,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `https://wa.me/917022355919?text=Hello! MDS Two Wheeler And Wash Service Team,%0a%0aI would like to get repair/wash service,%0a%0aMy details are:%0a${Object.entries(
      formContent
    )
      .map((content) => {
        return `%0a${content[0].charAt(0).toUpperCase()}${content[0].slice(
          1
        )}: ${content[1]}`;
      })
      .join(
        ""
      )} %0a%0aI'm hoping someone can get in touch with me.%0a%0aMuch appreciated.`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[url('/bg3.jpg')] bg-cover bg-no-repeat bg-center text-white bg-black"
    >
      <div className="max-width-container">
        <Title titleFirstPart="contact" titleSecondPart="us" />
        <div className="grid sm:grid-cols-2 items-center justify-items-center gap-12">
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="font-bold">Address: </span>
                <address>
                  798X+WP9, Besides Jacks and Jills Preschool, <br /> MVS Area,
                  Housing Board Colony,
                  <br /> JP Nagar, Hosapete, Karnataka 583201
                </address>
              </li>
              <li>
                <span className="font-bold">Phone: </span>
                <a href="tel:+917022355919" className="font-bold">
                  +91-7022355919
                </a>
              </li>
              {/* <li>
                <span className="font-bold">Email: </span>
                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
              </li> */}
              <li>
                <span className="font-bold">Business Hours: </span>
                <br />
                Monday - Saturday: 9:00 AM - 9:00 PM <br /> Sunday: 10:00 AM –
                5:00 PM
              </li>
            </ul>
          </div>
          <form
            className="text-gray-800 space-y-4 w-full overflow-hidden"
            onSubmit={handleSubmit}
          >
            <FormInput
              name="name"
              type="text"
              required
              label="Full Name"
              onChange={handleChange}
            />
            <FormInput
              name="phone"
              type="tel"
              required
              label="phone number"
              onChange={handleChange}
            />
            <FormInput
              name="email"
              type="email"
              label="email"
              onChange={handleChange}
            />
            <div className="relative w-full mb-2 transition-all ease-linear delay-150">
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder=""
                onChange={handleTextAreaChange}
                className="w-full focus:pb-2 focus:pt-6 pb-2 pt-6 px-4 rounded-md peer block outline-none autofill:pb-2 autofill:pt-6 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
              ></textarea>
              <label
                htmlFor=""
                className="absolute top-0 left-0 h-full w-full px-4 py-4 pointer-events-none capitalize peer-focus:-translate-y-2.5 peer-focus:text-gray-500 peer-placeholder-shown:-translate-y-1 peer-[:not(:placeholder-shown)]:-translate-y-2.5"
              >
                message
              </label>
            </div>
            <div className="flex justify-end items-center">
              <button className="flex gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
                <span>
                  <FaWhatsapp className="text-2xl" />
                </span>
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
