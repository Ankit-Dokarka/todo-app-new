import { useState } from "react";
import { FiLayers, FiLogIn } from "react-icons/fi";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      {/* Left Section */}
      <div className="hidden md:flex md:flex-1 justify-center items-center overflow-hidden">
        <img
          src="/login-page-image.png"
          alt="image for login page"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Right Section */}
      <div className="flex w-full md:flex-1 justify-center items-center">
        <div className=" h-[60%] w-[90%] max-w-md md:w-[60%] flex flex-col gap-4">
          {/* Icon and Title */}
          <div className="flex flex-col justify-center items-center gap-1">
            <FiLayers size={32} className="text-(--color-primary)" />
            <h1 className="text-2xl font-semibold">Task Board</h1>
          </div>
          {/* Toggle button */}
          <div className="bg-[#95ab9891] p-1 flex gap-2 justify-center rounded-(--btn-radius)">
            <button
              className={`flex-1 p-1 rounded-(--btn-radius) cursor-pointer ${activeTab === "login" ? "bg-(--color-primary) text-(--color-surface)" : ""}`}
              onClick={() => setActiveTab("login")}
              type="button"
            >
              Login
            </button>
            <button
              className={`flex-1 p-1 rounded-(--btn-radius) cursor-pointer ${activeTab === "signup" ? "bg-(--color-primary) text-(--color-surface)" : ""}`}
              onClick={() => setActiveTab("signup")}
              type="button"
            >
              Sign Up
            </button>
          </div>
          {/* form section */}

          <form className="flex flex-col gap-1">
            {activeTab === "signup" && (
              <div className="flex">
                <div className="flex flex-col flex-1">
                  <label htmlFor="fname" className="text-[14px]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="w-[99%] border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="lname" className="text-[14px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="w-[99%] border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
                  />
                </div>
              </div>
            )}
            <label htmlFor="email" className="text-[14px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
            />
            <label htmlFor="password" className="text-[14px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
            />
            {activeTab === "signup" && (
              <>
                <label htmlFor="cpassword" className="text-[14px]">
                  Conform Password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  className="border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
                />
              </>
            )}

            <button
              className="border border-none p-2 mt-2  rounded-(--btn-radius) bg-(--color-primary) text-white flex justify-center items-center gap-1.5 cursor-pointer"
              type="button"
            >
              {<FiLogIn size={18} />}
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
