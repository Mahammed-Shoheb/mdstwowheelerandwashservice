import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[url('/bgImgHero.jpg')] sm:bg-cover sm:bg-left bg-center bg-no-repeat bg-black"
    >
      <div className="h-[60vh] sm:h-[130vh] md:h-[100vh] flex flex-col items-center sm:items-start justify-center max-width-container text-center sm:text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-white sm:max-w-[45%] mb-4">
          Reliable Bike Repairs & Wash
        </h1>
        <p className="mb-4 text-white text-lg">
          Expert care for your two-wheeler, fast and affordable.
        </p>
        <a
          href={`https://wa.me/917022355919?text=Hi MDS Two Wheeler And Wash Service,%0a%0a I would like to book a service with you guys. %0a%0a Kindly reach out to me. %0a%0a Thank you.
            
            `}
          target="_blank"
          className="flex gap-2 items-center px-8 py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 capitalize font-semibold text-xl"
        >
          <span>
            <FaWhatsapp className="text-2xl" />
          </span>
          <span>Book Your Service</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
