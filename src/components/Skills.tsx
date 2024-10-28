import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex flex-col justify-around items-center gap-8 sm:mx-60 mx-10 sm:mt-24 mt-8">
      {/* Heading text */}
      <div className="text-center space-y-4 w-2/3">
        <h1 className="font-semibold text-4xl">Skills</h1>
        <h1 className="">
          This section highlights my expertise in various domains including front-end development with React and Next.js; back-end development using Node.js, Express, and MongoDB; cloud computing with AWS, Azure, and Google Cloud; and testing with Selenium WebDriver.
        </h1>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-4 gap-y-3">

        {/* Front end card */}
        <div className="bg-[#2D2D2D]/50 border border-[#2D2D2D]/80 rounded-md p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 backdrop-blur">
          <Image
            src={"/icons/skills/react.svg"}
            width={70}
            height={70}
            alt="front end"
            className="invert mb-3"
          />
          <h1 className="font-semibold text-xl mb-2">Front-end</h1>
          <h1 className="text-slate-300">
            Proficient in{" "}
            <span className="text-orange-500">
              HTML, CSS, JavaScript, and React with Nextjs
            </span>
            . Experienced in building responsive and interactive web
            applications.
          </h1>
        </div>

        {/* back end card */}
        <div className="bg-[#2D2D2D]/50 border border-[#2D2D2D]/80 rounded-md p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 backdrop-blur">
          <Image
            src={"/icons/skills/nodedotjs.svg"}
            width={70}
            height={70}
            alt="front end"
            className="invert mb-3"
          />
          <h1 className="font-semibold text-xl mb-2">Back-end</h1>
          <h1 className="text-slate-300">
            Skilled in{" "}
            <span className="text-orange-500">
              Node.js, Express, and MongoDB
            </span>
            . Experienced in building robust and scalable server-side
            applications.
          </h1>
        </div>

        {/* Cloud card */}
        <div className="bg-[#2D2D2D]/50 border border-[#2D2D2D]/80 rounded-md p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 backdrop-blur">
          <Image
            src={"/icons/skills/amazonwebservices.svg"}
            width={70}
            height={70}
            alt="front end"
            className="invert mb-3"
          />
          <h1 className="font-semibold text-xl mb-2">Cloud Computing</h1>
          <h1 className="text-slate-300">
            Proficient in cloud technologies including <span className="text-orange-500">AWS, Azure, and Google Cloud</span>. Experienced in deploying, managing, and scaling applications in cloud environments.
          </h1>
        </div>

        {/* Testing card */}
        <div className="bg-[#2D2D2D]/50 border border-[#2D2D2D]/80 rounded-md p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 backdrop-blur">
          <Image
            src={"/icons/skills/selenium.svg"}
            width={70}
            height={70}
            alt="front end"
            className="invert mb-3"
          />
          <h1 className="font-semibold text-xl mb-2">Testing</h1>
          <h1 className="text-slate-300">
            Experienced in{" "}
            <span className="text-orange-500">
              Selenium WebDriver
            </span>
            . Skilled in writing automated tests for web applications to ensure functionality and performance.
          </h1>
        </div>
      </div>
    </div>
  );
}
