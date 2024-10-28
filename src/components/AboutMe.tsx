import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="grid justify-around gap-4 items-center sm:grid-cols-2 sm:mx-60 mx-10 sm:mt-24">
            {/* Image - avtar */}
            <div>
                <Image src={"/avtar.webp"} width={400} height={400} alt="avtar" />
            </div>

            <div className="flex flex-col gap-4">

                {/* Heading and info */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">About Me</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                        saepe iure error tempora voluptates, adipisci quos, ut blanditiis
                    </span>
                </div>

                {/* Experience and Education */}
                <div className="grid sm:grid-cols-2 gap-4 ">
                    <div className="bg-[#2D2D2D]/50 border border-[#2D2D2D]/80 rounded-md p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 backdrop-blur-md">
                        {/* icon and text */}
                        <div className="flex flex-col items-center">
                            <Image src={"/icons/about_me/editor_choice.svg"} width={30} height={30} alt="icon" />
                            <h1 className="font-semibold">Experience</h1>
                        </div>
                        {/* Text */}
                        <div>
                            <h1 className="text-center">Web Development - Training
                                Ardent Computech Pvt. Ltd.</h1>
                        </div>
                    </div>

                    <div className="bg-[#2D2D2D]/50 border border-[#2D2D2D]/80 rounded-md p-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 backdrop-blur">
                        {/* icon and text */}
                        <div className="flex flex-col mx-12 items-center">
                            <Image src={"/icons/about_me/school.svg"} width={30} height={30} alt="icon" />
                            <h1 className="font-semibold">Education</h1>
                        </div>
                        {/* Text */}
                        <div>
                            <h1 className="text-center">10+2 Major in Pure Science from AN College Patna
                                B.Tech Computer Science from JISCE</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
