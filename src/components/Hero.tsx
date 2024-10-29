import Image from "next/image";
import { Button } from "./ui/button";


export default function Home() {
  return (
    <div className="grid justify-around items-center sm:grid-cols-2 sm:mx-60 mx-10 sm:mt-24">

      {/* Hero text */}
      <div className="flex flex-col gap-2 sm:w-full">
        <h1 className="font-poppins">Hi, I am</h1>
        <span className="text-xl font-semibold text-[#FD6F00]">Apurva Kumar</span>
        <h1 className="text-5xl font-bold flex flex-col">
          <span>Full-Stack</span>
          <span className="ml-10">Developer</span>
        </h1>
        <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus nam impedit totam numquam iusto, corporis consequuntur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, natus. Assumenda, nobis iste! Doloremque dolor </h1>
        <Button className="bg-[#FD6F00] w-max font-semibold">Hire me</Button>
      </div>

      {/* Photo */}
      <div className="flex justify-center items-center sm:justify-end">
        <Image src={"/apurva_photo.webp"} width={300} height={300} alt="photo of owner" />
        <div className="flex flex-col gap-4 mx-8">
          <Image src={"/icons/socials/linkedin.svg"} width={30} height={30} alt="linkedin" className="invert transition-transform duration-300 hover:scale-110" />
          <Image src={"/icons/socials/github.svg"} width={30} height={30} alt="github" className="invert transition-transform duration-300 hover:scale-110" />
          <Image src={"/icons/socials/quora.svg"} width={30} height={30} alt="quora" className="invert transition-transform duration-300 hover:scale-110" />
          <Image src={"/icons/socials/x.svg"} width={30} height={30} alt="x" className="invert transition-transform duration-300 hover:scale-110" />
          <Image src={"/icons/socials/facebook.svg"} width={30} height={30} alt="facebook" className="invert transition-transform duration-300 hover:scale-110" />
          <Image src={"/icons/socials/instagram.svg"} width={30} height={30} alt="instagram" className="invert transition-transform duration-300 hover:scale-110" />
          <Image src={"/icons/socials/linktree.svg"} width={30} height={30} alt="linktree" className="invert transition-transform duration-300 hover:scale-110" />
        </div>
      </div>

    </div>
  );
}
