import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bg-black text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} MDS Two Wheeler And Wash Service. All
        Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
