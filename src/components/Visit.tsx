import React from "react";
import Title from "./Title";

const Visit = () => {
  return (
    <section className="section-padding">
      <div className="max-width-container">
        <Title titleFirstPart="Visit" titleSecondPart="Us Today" />
        <div className="grid sm:grid-cols-2 gap-12 items-center justify-items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.5631682232568!2d76.3994166495252!3d15.26721278605732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9d7d118f393d7%3A0xa83e0126ac097a2c!2sMDS%20Two%20Wheeler%20And%20Water%20Service!5e0!3m2!1sen!2sin!4v1732033911984!5m2!1sen!2sin"
            width="400"
            height="300"
            className="border-none w-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="max-w-[30rem] text-gray-700">
            Whether it&apos;s your bike or car, trust us to handle it with care.
            Stop by our shop or book your service online to experience the
            difference. Your vehicle deserves the best—and at MDS Two Wheeler
            And Wash Service, we deliver nothing less!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visit;
