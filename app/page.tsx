import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800 text-white">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white">
          <h1 className="text-5xl font-black mb-8 sm:mb-6 mt-4">
            Welcome to Stashed
          </h1>
          <p className="text-2xl font-semibold mb-8 sm:mb-6">
          Storing everything for you and your buisness needs. All in one place!
          </p>
          <p className="text-md">
            Enhance your personal storage with Stashed, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convienience of easy file management and sharing in one centralized
            solution.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-600 p-3 px-5 w-fit rounded-full mt-20 hover:bg-blue-400"
          >
            Try it for free
            <ArrowRight className="ml-5" />
          </Link>
        </div>
        <div className="bf-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      <div className="h-[300px]">
      </div>
      <footer className="flex justify-center items-end h-20 p-2 text-white bg-[#2B2929] dark:bg-slate-800">
        &copy; Aqib Shabir 2024
      </footer>
    </main>
  );
}
