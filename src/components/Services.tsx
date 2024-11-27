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
    blurImg:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAC+AR0DASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEAAwT/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECEv/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgME/8QAGREBAQEAAwAAAAAAAAAAAAAAAAERAjFB/9oADAMBAAIRAxEAPwDzKzPK9CrEiwooUGFCyUKDCjQKFBhwhYUSLECixIUKYkVJlZkWZmSRFRFKlWpQho0qNRCjSo0IKFOhQQo0qNBCpSo0IWZgnVWZFViQoQsKDChBQoMKEFCiQoQsKJFhCwokWJKrMUrMyTMzJIioClSrUqQ0aVGohRpUaCFCnQoQ0KdCgjRpUaCiKgTuzKCyxosIWFEhQhYUSFCFhRIUIWFEhQhYqRSlVmSZWZJkVEkaqiQ1KtSojRpUaEFGlRqIUaVGghRpUaygqUqNBFlQF3VmBVYkKELCgwoQUKDChBQoMKFFFiQoQsVIpCqipMzMkyKhTDVRJKNKjQkoUqNRGjSoUIaNKhQRo0qNBGjSo1koisyXdUVJViLCihQYUIKFBhQgoUGFClhQYUIVUilKqMgrMxTIzIIlUaklSrRqSUatGojRpUKClClRoI0atGs0pRq1KzSiMzJehUYoosFYgcKBCjSKFBhQgoUGLCDhQIUSJRUhVFSlZGQZkYphqjUmo1aNSSjVo1JKNWjQRo1aNBShSoVmlqNWjaxSyMmsaXo1R1taRrAlKUg4Uc5SlKdIUrnKUpDpKsoSlKUcqyhKUpB6uhq6UWro62kFraOtqC6mtqaU1qWtaNqTWpa1o2pNaNrWjak1oVbRtBS0bVtC0FLRtW0LWKWtG1rUtYrTampra5l6NXQ1tdAelK56UpBylK5ylKU6SlK5ylKQ6SlK5ylKQcpSucpSlHq6GrpB62hq6UWto62kFqampqS6lqalqTWpalqWlNaNrWjaElo2raFoTWhatoWitNaNrWhaxS1o2taOudaXW0dbWcTvra56unQ6SlK5SlK1E6SlK5SlK0HWUpXKUpWg6ylK5SlKU6SlK5yrKQ6auuerpTpq656uoHraGtpRa2jqaQWpampak1qWpalqTWja1o2pNaFq2haC1oWtaNopS0bWtC1zpa0bUtS1zxotTR1NOF21dc9XRjLpKsrlpSqJ1lKVylKVuB1lKVylKVoOspSuUpStB1lWVylKUp0lLXOVdIPV0NXUj1tDW0o9TR1tSXU1NTSltS1LUtSa0bWtG0JLRta0bUUtC1bQtZqS0LW6oWufJqNaNqWjaJCWtrn6T01hejV0NbWcZdNWVz1ZRidJSlcpSlUDtKUrlKUrpA6ylK5SlKQ6yrK5ylK0nSVdCVZUD1dDV0o9bR1tKLW0dbUl1NZNSa1LW1Kklo2rQqKWjatC0JLXO0rXPqilOq52r1XO1zvZa0LW6rn101I1CvQ+gtRvC9utqM5MFqyisCOVZRiwB0lKUIUbgOUpRhRoFKUoxYUcKBChBKKlEyKizMyTIyFMNWpUko1aNCGhSo1EK59H059M0h059U+nPpj0ufVc7T6c3SNRmRmk/9k=",
  },
  {
    name: "Engine Diagnostics",
    description: "Advanced fault detection and fixing.",
    img: img3,
    descriptionList: ["Engine tuning and repairs.", "Battery replacement."],
    blurImg:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Water Wash",
    description: "Eco-friendly, thorough cleaning services.",
    img: img2,
    blurImg:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB/AL4DASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECERIDE//EABcBAQEBAQAAAAAAAAAAAAAAAAEAAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECEiH/2gAMAwEAAhEDEQA/APLNCdNKxEeHicPG4KpFInDxuMqQ0JDwg8NCQ0RMGNFagAYxWoC1tZWa0ylraW1kspKa0loIpa20tpQDOjqDj6aVLppTHNaU8qMqma3GVs08qWapmtwKQ8TlPKQeGhJTSomb0vR0E3WdZ1lrNabaW1lrLWK0LS2stLaCLS2stLdAttZaW6LdJH6zpPTPRTj9GmnNNqZ0I5unNUzXNnS2a6xlfNUzUM1XNaC0p5UpTykKSmlTlN1I/R0nR0E3WWs6W1lo1pLWWluhS20l0y6JdMta26LdEuiXQWnui3Sd2W7S1X0z0jds9la8+fRXH0crZeLGHoY2tnTg+f0dWNNxl15qua5s6VzpoOiU8qGapKUrKaVKVvUlOjpOs9AntLaW6LdAmuiXTLpO6CNdJ60zWktaB02tJ62TW0d/QYtV1smvo59/VK7tS1037M/ZzdYUAAi3N5XT89uU+NcrUZ6j0MaXzpw/PboxppjXVnSk05s6Umkl5pvpGaN6RV6z0n6HpI90W6JdFugjXSetMuk9aBbrSO9jWnPvYWt39ENb6zWulBkAATQACQACQACSuNujG3HKrjbrPrn1Hbnak05M6UztYxrqmjenNNnm0dW9D0j6HoFS6LdEui3QJtaT1pl0nrQaxm9Obeu0/wBNdSZ04AAiAAkAAkAAkAAkGysBlxK52pNOc01Y6y6xeXTNGm3NNnmkx5Xm2+kPQ9imL+i3Sfpl0xXSQ90lrTLrpWLXScsrLDDgNhOMPxnDrPkobxhZwABIABIABIABINYDLiMOsDpoN6HooFqw3pvekho52t8taxrLrAAAWBoIwvBxoTOF4OGYRj//2Q==",
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
                <div>
                  <Image
                    src={service.img}
                    alt=""
                    width={600}
                    height={450}
                    className="object-cover rounded-tl-md rounded-tr-md select-none pointer-events-none w-full h-full block"
                    placeholder="blur"
                    blurDataURL={service.blurImg}
                    loading="lazy"
                  />
                </div>
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
