import React from "react";
import Title from "./Title";
import Image from "next/image";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-width-container">
        <Title titleFirstPart="about" titleSecondPart="us" />

        <div className="grid sm:grid-cols-2 gap-8 items-center justify-items-center">
          <div className="grid grid-cols-6 grid-rows-2 gap-2">
            <Image
              src={img1}
              alt=""
              className="col-span-3 w-full h-full rounded-md object-cover"
            />
            <Image
              src={img2}
              alt=""
              className="col-span-3 w-full h-full rounded-md object-cover"
            />
            <Image
              src={img3}
              alt=""
              className="col-span-2 w-full h-full rounded-md object-cover"
            />
            <Image
              src={img4}
              alt=""
              className="col-span-2 w-full h-full rounded-md object-cover"
            />
            <Image
              src={img5}
              alt=""
              className="col-span-2 w-full h-full rounded-md object-cover"
            />
          </div>
          <div className="mt-4 text-gray-700">
            <p className="mb-8 max-w-[30rem]">
              At MDS Two Wheeler And Wash Service, we take pride in being your
              one-stop solution for two-wheeler and car care. Since 2017, we
              have been dedicated to providing top-quality repair and washing
              services for both bikes and cars. Our team of skilled technicians
              ensures every vehicle that comes to us receives the best care
              possible.
            </p>
            <p className="mb-4 max-w-[30rem]">
              With over a decade of experience, we specialize in:
            </p>
            <ul className="flex flex-col gap-4 max-w-[30rem]">
              <li>
                <span className="font-bold">
                  Two-Wheeler Repairs & Maintenance:
                </span>{" "}
                From engine diagnostics to routine maintenance, we keep your
                bike running smoothly.
              </li>
              <li>
                <span className="font-bold">Car Washing & Detailing: </span>
                Our eco-friendly, high-pressure washing methods ensure your car
                shines like new.
              </li>
              <li>
                <span className="font-bold">
                  Water Wash Services for Bikes & Cars:{" "}
                </span>
                Affordable, thorough cleaning for all vehicle types.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* <h3>Why Choose Us?</h3>
            <ul>
              10+ Years of Expertise: We’ve built a reputation for reliable and
              professional service.
              <li>
                10+ Years of Expertise: We’ve built a reputation for reliable
                and professional service.
              </li>
              <li>
                Eco-Friendly Practices: We use high-pressure washers and minimal
                water to keep the environment in mind.
              </li>
              <li>
                Affordable Pricing: Transparent pricing without any hidden
                charges.
              </li>
              <li>
                Fast Service: Quick turnaround times to get you back on the
                road.
              </li>
            </ul>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide reliable and affordable services that
              exceed customer expectations. We treat every vehicle like our own
              and are committed to ensuring 100% satisfaction for all our
              customers.
            </p>
            <h3>Visit Us Today</h3>
            <p>
              Whether it’s your bike or car, trust us to handle it with care.
              Stop by our shop or book your service online to experience the
              difference. Your vehicle deserves the best—and at BikeCare, we
              deliver nothing less!
            </p> */
}
