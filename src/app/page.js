import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center   sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Welcome to my portfolio</h1>
      <h1>This domain is owned by @ApurvaKumar</h1>
      <Link href="https://www.linkedin.com/in/apurva313/" target="_blank" className="justify-center items-center">
          <button className="bg-white text-black border border-black px-4 py-2 hover:bg-black hover:border-white hover:text-white transition-colors duration-300 rounded-md">
        LinkedIn
          </button>
      </Link>
      <Link href="https://github.com/apurva313" target="_blank" className="justify-center items-center">
        <button className="bg-white text-black border border-black px-4 py-2 hover:bg-black hover:border-white hover:text-white transition-colors duration-300 rounded-md">
          GitHub
        </button>
      </Link>
      <Link href="https://twitter.com/apurva313" target="_blank" className="justify-center items-center">
        <button className="bg-white text-black border border-black px-4 py-2 hover:bg-black hover:border-white hover:text-white transition-colors duration-300 rounded-md">
          Twitter
        </button>
      </Link>
      <Link href="https://linktr.ee/apurvakumar" target="_blank" className="justify-center items-center">
        <button className="bg-white text-black border border-black px-4 py-2 hover:bg-black hover:border-white hover:text-white transition-colors duration-300 rounded-md">
          Linktree
        </button>
      </Link>
      
    </div>
  );
}
