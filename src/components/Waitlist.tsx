"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import github from "../../public/assets/GitHub_Logo_White.png";
import Image from "next/image";
import Link from "next/link";
import { addToWaitlist } from "@/appwrite";
import Loader from "./Loader";
import { errorToast, successToast } from "@/providers/Toast";

const Waitlist: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  
  
  useEffect(() => {
    if (firstname !== '' && email !== '' && role !== '') {
      setDisabled(false);
    }else{
      setDisabled(true)
    }

  }, [firstname, email, role])

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await addToWaitlist(firstname, email, role);
      setFirstname("");
      setEmail("");
      setRole("");
      setIsLoading(false);
      successToast("Waitlist added successfully");
      // console.log(response)
    } catch (error) {
      setIsLoading(false);
      errorToast("An error occurred");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="text-center my-10">
        <small>Give us a star on Github</small>
        <Link
          href={"https://github.com/Blackbobs/build.io"}
          target="_blank"
          className="flex items-center gap-2 justify-center w-full max-w-[300px] mx-auto bg-[#121212] rounded-md py-2 px-5 cursor-pointer"
        >
          <Image
            src="./github-mark-white.svg"
            alt="icon_github"
            width={30}
            height={30}
            priority
          />
          <Image
            src={github}
            alt="GitHub Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
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
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="capitalize font-light text-[14px]" htmlFor="role">
              What do you do?
            </label>
            <input
              className="border-2 border-secondary rounded p-2 focus:outline-none bg-[#151415]"
              type="text"
              id="role"
              name="role"
              placeholder="e.g project manager..."
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <button
              disabled={disabled}
              onClick={handleSubmit}
              className="bg-brand p-3 font-medium capitalize w-full rounded my-5 flex items-center justify-center gap-3 disabled:bg-gray-500"
              type="submit"
            >
              {isLoading ? <Loader /> : (
                <span className="flex items-center justify-center gap-2">join the waitlist <FaArrowRight/> </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Waitlist;
