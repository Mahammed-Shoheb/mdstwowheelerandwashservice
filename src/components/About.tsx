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
              className="col-span-3 w-full h-full rounded-md object-cover block"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
            />
            <Image
              src={img2}
              alt=""
              className="col-span-3 w-full h-full rounded-md object-cover block"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB/AL4DASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECERIDE//EABcBAQEBAQAAAAAAAAAAAAAAAAEAAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECEiH/2gAMAwEAAhEDEQA/APLNCdNKxEeHicPG4KpFInDxuMqQ0JDwg8NCQ0RMGNFagAYxWoC1tZWa0ylraW1kspKa0loIpa20tpQDOjqDj6aVLppTHNaU8qMqma3GVs08qWapmtwKQ8TlPKQeGhJTSomb0vR0E3WdZ1lrNabaW1lrLWK0LS2stLaCLS2stLdAttZaW6LdJH6zpPTPRTj9GmnNNqZ0I5unNUzXNnS2a6xlfNUzUM1XNaC0p5UpTykKSmlTlN1I/R0nR0E3WWs6W1lo1pLWWluhS20l0y6JdMta26LdEuiXQWnui3Sd2W7S1X0z0jds9la8+fRXH0crZeLGHoY2tnTg+f0dWNNxl15qua5s6VzpoOiU8qGapKUrKaVKVvUlOjpOs9AntLaW6LdAmuiXTLpO6CNdJ60zWktaB02tJ62TW0d/QYtV1smvo59/VK7tS1037M/ZzdYUAAi3N5XT89uU+NcrUZ6j0MaXzpw/PboxppjXVnSk05s6Umkl5pvpGaN6RV6z0n6HpI90W6JdFugjXSetMuk9aBbrSO9jWnPvYWt39ENb6zWulBkAATQACQACQACSuNujG3HKrjbrPrn1Hbnak05M6UztYxrqmjenNNnm0dW9D0j6HoFS6LdEui3QJtaT1pl0nrQaxm9Obeu0/wBNdSZ04AAiAAkAAkAAkAAkGysBlxK52pNOc01Y6y6xeXTNGm3NNnmkx5Xm2+kPQ9imL+i3Sfpl0xXSQ90lrTLrpWLXScsrLDDgNhOMPxnDrPkobxhZwABIABIABIABINYDLiMOsDpoN6HooFqw3pvekho52t8taxrLrAAAWBoIwvBxoTOF4OGYRj//2Q=="
            />
            <Image
              src={img3}
              alt=""
              className="col-span-2 w-full h-full rounded-md object-cover block"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
            />
            <Image
              src={img4}
              alt=""
              className="col-span-2 w-full h-full rounded-md object-cover block"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB/AL4DASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAHBABAQEBAQEBAQEAAAAAAAAAAAECERIDE1Fh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEBAQEBAAAAAAAAAAAAAAARASECEv/aAAwDAQACEQMRAD8A844k4w6KiomKioqKiYqNIqKiYcVFAAAAEUEZIAgSKACFMEOoGC6OqGC6OiOTpyo6crKtIqM5VStYjSKiJVStIuKiIqKijSYGCAAgSKCFpWoo6XStLqCul1PS6C+jqPRegadHWfoegc/TlZ9OViq1lXKylVK1iNZVyspVytMtJVSs5VStC+mjp9EV0J6OimVpdK1AWptFqbUDtTaVqLoVV0XpF0m6Bp6L0yuiuwrb0PTD2XsSp9KlY9VNOGa03lXKwmlyumI3lXKxlXK2jWVUrKVUqo16OolPqiujqel0FWptK1NoHam0rUWoHdIuiumetAq6Rdo1plr6CVrdov0Ya+jO/QSum/Uv1/1ye6PVVeuv0c0w9qmnD5brozprnTmmmmdLiOiVpK586XNOmI3lVKxmlzSjXo6z9H6UadLqPRegXam1N0m6EO6RdFdI1oBrTPWi1plvQm6N7Ya2NaZ29EzKLbSARsAAD6c1YkA2ztrnTkXnbG+R2500mnJnbXO1xHTNKmnPNKmmxv6P0x9D0Db0Xpl6HpVaXSbpndJukF3SNaRdI1sD1pjrRb2zt6jMFvSAGgAAAAAAAAAAOWxpn6MgJHTPoubckpzVawdnse3L7o/SrFdXsrtze6Pd/pFdF+iL9GPouovGl+iLq1PQzQUgBkAAAD4cyCQvyflKlZgBVAAAAAAAAAAWgACAAAAAAYBouDgkCsjUOZXMiKjG6yXkeVGlSP/Z"
            />
            <Image
              src={img5}
              alt=""
              className="col-span-2 w-full h-full rounded-md object-cover block"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
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
