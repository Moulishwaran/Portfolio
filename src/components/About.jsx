import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm Moulish, Nice to meet you. please take a look around.</p>
          </div>
          <div>
            <p>
              I am a highly motivated and skilled engineering graduate looking
              for an entry-level position as a software engineer. Strong in
              design and integration with intuitive problem-solving skills.
              Passionate to contribute ideas and learn new things. I am
              available for any kind of job opportunity that suits my interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
