import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import github from "../../public/assets/GitHub_Logo_White.png";
import Image from "next/image";
import Link from "next/link";

const Waitlist: React.FC = () => {
  return (
    <div>
        <div className="text-center my-10">
            <small>Give us a star on Github</small>
      <Link href={'https://github.com/Blackbobs/build.io'} target="_blank" className="flex items-center gap-2 justify-center w-full max-w-[300px] mx-auto bg-[#121212] rounded-md py-2 px-5 cursor-pointer">
        <Image
          src="./github-mark-white.svg"
          alt="icon_github"
          width={30}
          height={30}
          priority
        />
        <Image src={github} alt="GitHub Logo" width={50} height={50} priority />
      </Link>
        </div>
      <form>
        <div className="max-w-[400px] mx-auto space-y-3">
          <div className="flex flex-col gap-1">
            <label
              className="capitalize font-light text-[14px]"
              htmlFor="firstname"
            >
              firstname
            </label>
            <input
              className="border-2 border-secondary rounded p-2 focus:outline-none bg-[#151415]"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="firstname..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="capitalize font-light text-[14px]"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="border-2 border-secondary rounded p-2 focus:outline-none bg-[#151415]"
              type="email"
              id="email"
              name="email"
              placeholder="email..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="capitalize font-light text-[14px]"
              htmlFor="email"
            >
              What do you do?
            </label>
            <input
              className="border-2 border-secondary rounded p-2 focus:outline-none bg-[#151415]"
              type="email"
              id="email"
              name="email"
              placeholder="e.g project manager..."
            />
          </div>
          <div>
            <button
            disabled
              className="bg-brand p-3 font-medium capitalize w-full rounded my-5 flex items-center justify-center gap-3 disabled:bg-gray-500"
              type="submit"
            >
              join the waitlist <FaArrowRight />{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Waitlist;
