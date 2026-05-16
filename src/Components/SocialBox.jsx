import React from "react";
import Container from "./../container/Container";
import SocialImage from "../images/pp2.png";

import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

const SocialBox = () => {
  return (
    <div>
      <Container>
        <div>
          <h3 className="tracking-[0.4em] text-[10px] sm:text-xs font-bold text-gray-500 mb-4">
            [ Everyday's Social Box ]
          </h3>

          <div className="w-full flex gap-12 items-center">
            {/* Image */}
            <div className="w-[60%] h-[500px]">
              <img
                className="w-full h-full object-cover rounded-tr-full rounded-br-full"
                src={SocialImage}
                alt="Social Image"
              />
            </div>

            {/* Social List */}
            <div className="w-[60%] h-[500px]">
              <ul className="h-full w-full rounded-tl-full rounded-bl-full flex flex-col justify-center gap-10 text-xl font-semibold">
                <li className="flex items-center gap-4">
                  <FaGithub className="text-3xl" />
                  GitHub
                </li>

                <li className="ml-14 flex items-center gap-4">
                  <FaLinkedinIn className="text-3xl" />
                  LinkedIn
                </li>

                <li className="ml-14 flex items-center gap-4">
                  <SiDevpost className="text-3xl" />
                  Devpost
                </li>

                <li className="flex items-center gap-4">
                  <FaFacebookF className="text-3xl" />
                  Facebook
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SocialBox;
