"use client";
import React, { MouseEventHandler, useRef, useState } from "react";
import Title from "./Title";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import Image from "next/image";

const services = [
  {
    name: "Bike Repair",
    description: "Comprehensive repairs for all models.",
    img: img1,
    descriptionList: ["Tire replacement and alignment.", "Brake servicing."],
  },
  {
    name: "Engine Diagnostics",
    description: "Advanced fault detection and fixing.",
    img: img3,
    descriptionList: ["Engine tuning and repairs.", "Battery replacement."],
  },
  {
    name: "Water Wash",
    description: "Eco-friendly, thorough cleaning services.",
    img: img2,
    descriptionList: [
      "Two wheeler - Foam wash and detailing.",
      "Two wheeler - Chain cleaning.",
      "Car - Exterior and interior car cleaning.",
      "Car - Underbody wash.",
    ],
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const handleDragStart: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsMouseDown(true);
    if (containerRef.current) {
      const startX = e.pageX - containerRef.current.offsetLeft;
      const scrollLeft = containerRef.current.scrollLeft;
      mouseCoords.current = { startX, scrollLeft };
    }
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
  };

  const handleDrag: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isMouseDown || !containerRef.current) return;
    e.preventDefault();
    const { startX, scrollLeft } = mouseCoords.current;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walkX = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walkX;
  };

  return (
    <section
      id="services"
      className="section-padding bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-cover text-white"
    >
      <div className="max-width-container">
        <Title titleFirstPart="our" titleSecondPart="services" />
        <div className="flex gap-12 flex-col sm:flex-row items-center overflow-hidden">
          <p className="max-w-[30rem] shrink-0">
            We offer a range of professional services for both two-wheelers and
            cars. Whether it&apos;s timely repairs or a sparkling clean water
            wash, MDS Two Wheeler And Wash Service is your one-stop solution.
          </p>
          <div
            ref={containerRef}
            className="flex gap-4 no-scrollbar select-none cursor-grab flex-nowrap max-w-[95%] sm:max-w-[60%]  overflow-x-scroll"
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                className="shadow-md rounded-md w-72 shrink-0 bg-white text-gray-700 rounded-tl-md rounded-tr-md snap-start"
              >
                <Image
                  src={service.img}
                  alt=""
                  width={600}
                  height={450}
                  className="object-cover rounded-tl-md rounded-tr-md select-none pointer-events-none"
                />
                <div className="px-4 py-2">
                  <h3 className="text-xl font-bold text-center">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm">{service.description}</p>
                  <ul className="list-disc text-left ps-4 text-sm">
                    {service.descriptionList.map((listItem, indx) => {
                      return (
                        <li key={indx} className="">
                          {listItem}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// bg-[url('/florian-udrisard-DWYtaiWlsOU-unsplash.jpg')] bg-no-repeat bg-center bg-cover
