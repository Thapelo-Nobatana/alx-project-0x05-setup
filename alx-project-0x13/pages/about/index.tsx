import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-gray-900 font-bold mb-2">
              ImageGen – AI-Powered Image Generation Web App
            </h1>
            <p className="text-lg text-gray-900 mb-4">
              ImageGen is an intuitive web application that allows users to
              generate stunning, AI-powered images directly from textual
              prompts. Leveraging modern AI image generation APIs, ImageGen
              transforms user descriptions into visually captivating images in
              seconds, making it perfect for designers, content creators, and
              anyone looking to bring their ideas to life visually.
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default About;
