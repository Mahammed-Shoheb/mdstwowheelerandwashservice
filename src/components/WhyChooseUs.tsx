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
              className="object-contain rounded-md w-full h-full block"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
            />
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
