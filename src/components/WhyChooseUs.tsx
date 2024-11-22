import Image from "next/image";
import React from "react";
import img5 from "../assests/img5.jpg";
import Title from "./Title";

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="max-width-container">
        <Title titleFirstPart="Why" titleSecondPart="Choose Us?" />
        <div className="grid sm:grid-cols-2 gap-12 items-center justify-items-center">
          <div>
            <Image
              src={img5}
              alt=""
              className="object-contain rounded-md"
              width={600}
              height={450}
            />
            {/* <Image
              src={img6}
              alt=""
              className="h-52 object-contain rounded-md"
            /> */}
          </div>
          <ul className="flex flex-col gap-2 max-w-[30rem] text-gray-700">
            <li>
              <span className="font-semibold">5+ Years of Expertise:</span>{" "}
              We&apos;ve built a reputation for reliable and professional
              service.
            </li>
            <li>
              <span className="font-semibold">Eco-Friendly Practices:</span> We
              use high-pressure washers and minimal water to keep the
              environment in mind.
            </li>
            <li>
              <span className="font-semibold">Affordable Pricing:</span>{" "}
              Transparent pricing without any hidden charges.
            </li>
            <li>
              <span className="font-semibold">Fast Service:</span> Quick
              turnaround times to get you back on the road.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
