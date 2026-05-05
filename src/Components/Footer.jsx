import React from "react";
import Container from "../container/Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="flex justify-between items-end">
            <ul className="text-lg font-tit font-medium text-gray-600">
              <li>rajibul.webdev@gmail.com</li>
              <li>+880 1981-869112</li>
              <li>Mirpur, Dhaka, BD</li>
            </ul>
            <ul className="text-lg font-tit font-medium text-gray-600 text-end">
              <li>©2026</li>
              <li>Copyright Rajibul. All rights reserved</li>
            </ul>
          </div>
          <div className="overflow-hidden py-4">
            <h1 className="w-full leading-[0.8] font-bold font-tit text-[12vw] text-center uppercase tracking-widest">
              Rajibul Islam
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
