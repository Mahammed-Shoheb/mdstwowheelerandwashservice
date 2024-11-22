import React from "react";
import Title from "./Title";
import Image from "next/image";
import missionImg from "../assests/missionImg.jpg";

const Mission = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="max-width-container">
        <Title titleFirstPart="our" titleSecondPart="Mission" />
        <div className="grid sm:grid-cols-2 gap-12 items-center justify-items-center">
          <p className="max-w-[30rem]">
            Our mission is to provide reliable and affordable services that
            exceed customer expectations. We treat every vehicle like our own
            and are committed to ensuring 100% satisfaction for all our
            customers.
          </p>
          <Image
            src={missionImg}
            alt=""
            className="rounded-md"
            width={600}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
