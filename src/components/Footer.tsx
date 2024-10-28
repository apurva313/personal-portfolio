import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-8 sm:mx-60 mx-10 sm:mt-24 mt-8">
            <div className="flex flex-col justify-center items-center gap-4">
                <ul className="sm:flex hidden justify-center items-center sm:text-md sm:gap-6 gap-4">
                    <Link href="#">
                        <li>Home</li>
                    </Link>
                    <Link href="#">
                        <li>About me</li>
                    </Link>
                    <Link href="#">
                        <li>Services</li>
                    </Link>
                    <Link href="#">
                        <li>Projects</li>
                    </Link>
                    <Link href="#">
                        <li>Testimonials</li>
                    </Link>
                    <Link href="#">
                        <li>Contact</li>
                    </Link>
                </ul>

                <div className="flex justify-center items-center gap-4 sm:gap-8 mx-8">
                    <Image src={"/icons/socials/linkedin.svg"} width={30} height={30} alt="linkedin" className="invert transition-transform duration-300 hover:scale-110" />
                    <Image src={"/icons/socials/github.svg"} width={30} height={30} alt="github" className="invert transition-transform duration-300 hover:scale-110" />
                    <Image src={"/icons/socials/quora.svg"} width={30} height={30} alt="quora" className="invert transition-transform duration-300 hover:scale-110" />
                    <Image src={"/icons/socials/x.svg"} width={30} height={30} alt="x" className="invert transition-transform duration-300 hover:scale-110" />
                    <Image src={"/icons/socials/facebook.svg"} width={30} height={30} alt="facebook" className="invert transition-transform duration-300 hover:scale-110" />
                    <Image src={"/icons/socials/instagram.svg"} width={30} height={30} alt="instagram" className="invert transition-transform duration-300 hover:scale-110" />
                    <Image src={"/icons/socials/linktree.svg"} width={30} height={30} alt="linktree" className="invert transition-transform duration-300 hover:scale-110" />
                </div>
            </div>
            <h1>
                &copy; {new Date().getFullYear()}
            </h1>
        </footer>
    );
}