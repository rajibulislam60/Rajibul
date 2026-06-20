import React from "react";
import Container from "./../container/Container";

const CV = () => {
  return (
    <div>
      <Container>
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold">
            Resume Download Notice
          </h2>
          <p className="text-sm lg:text-md font-normal text-gray-600 py-3">
            Thank you for your interest in my profile. You can download the
            latest version of my resume by clicking the{" "}
            <span className="font-bold">Download Resume</span> button below. The
            PDF includes an overview of my professional experience, technical
            skills, projects, education, certifications, and contact
            information. It is regularly updated to reflect my most recent
            achievements and career progress. If you have any questions or would
            like to discuss a project or opportunity, please feel free to get in
            touch. I appreciate your time and consideration.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default CV;
