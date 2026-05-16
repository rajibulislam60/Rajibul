import React from "react";
import Container from "./../container/Container";
import SocialImage from "../images/pp2.png";

import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiDevpost, SiFigma } from "react-icons/si";

const SocialBox = () => {
  return (
    <section className="py-20">
      <Container>
        <div>
          <h3 className="tracking-[0.4em] text-[10px] sm:text-xs font-bold text-gray-500 mb-6 uppercase">
            [ Everyday's Social Box ]
          </h3>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[45%] h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden lg:rounded-r-full">
              <img
                className="w-full h-full object-cover hover:scale-105 duration-500"
                src={SocialImage}
                alt="Social"
              />
            </div>

            <div className="w-full lg:w-[55%] flex flex-col gap-10">
              {/* GitHub */}
              <a
                href="https://github.com/rajibulislam60"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-300 rounded-full px-8 py-5 flex items-center justify-between hover:bg-black hover:text-white duration-300"
              >
                <div className="flex items-center gap-5">
                  <FaGithub className="text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold">GitHub</h3>
                    <p className="text-sm opacity-70">
                      Explore my repositories
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium">Visit</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/md-rajibul-islam-rajib-513229257/"
                target="_blank"
                rel="noreferrer"
                className="ml-16 border border-gray-300 rounded-full px-8 py-5 flex items-center justify-between hover:bg-[#0077B5] hover:text-white duration-300"
              >
                <div className="flex items-center gap-5">
                  <FaLinkedinIn className="text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold">LinkedIn</h3>
                    <p className="text-sm opacity-70">Connect professionally</p>
                  </div>
                </div>
                <span className="text-sm font-medium">Visit</span>
              </a>

              {/* Devpost */}
              <a
                href="https://devpost.com/rajibulislam60707877"
                target="_blank"
                rel="noreferrer"
                className="ml-28 border border-gray-300 rounded-full px-8 py-5 flex items-center justify-between hover:bg-[#003E54] hover:text-white duration-300"
              >
                <div className="flex items-center gap-5">
                  <SiDevpost className="text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold">Devpost</h3>
                    <p className="text-sm opacity-70">
                      View hackathon projects
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium">Visit</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/rajibul.islam.rajib.426441"
                target="_blank"
                rel="noreferrer"
                className="ml-16 border border-gray-300 rounded-full px-8 py-5 flex items-center justify-between hover:bg-[#1877F2] hover:text-white duration-300"
              >
                <div className="flex items-center gap-5">
                  <FaFacebookF className="text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold">Facebook</h3>
                    <p className="text-sm opacity-70">
                      Follow my social updates
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium">Visit</span>
              </a>

              {/* Figma */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-300 rounded-full px-8 py-5 flex items-center justify-between hover:bg-[#F24E1E] hover:text-white duration-300"
              >
                <div className="flex items-center gap-5">
                  <SiFigma className="text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold">Figma</h3>
                    <p className="text-sm opacity-70">View design projects</p>
                  </div>
                </div>
                <span className="text-sm font-medium">Visit</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialBox;
