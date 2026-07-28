import { useState } from "react";
import { useForm } from "react-hook-form";

import { FiLayers, FiLogIn } from "react-icons/fi";

type AuthForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  conformPassword: string;
};

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthForm>();

  const password = watch("password");

  const onSubmit = (data: AuthForm) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 1000);
  };

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
          <div className="bg-[#bde7c191] p-1 flex gap-2 justify-center rounded-(--btn-radius)">
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

          <form
            className="flex flex-col gap-1"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {activeTab === "signup" && (
              <div className="flex">
                <div className="flex flex-col flex-1">
                  <label htmlFor="fname" className="text-[12px]">
                    First Name
                  </label>
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 3,
                        message: "Must be at least 3 characters",
                      },
                    })}
                    type="text"
                    id="fname"
                    className="w-[99%] border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
                  />
                  <p className="text-(--color-danger) text-[10px]">
                    {errors.firstName?.message}
                  </p>
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="lname" className="text-[12px]">
                    Last Name
                  </label>
                  <input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    type="text"
                    id="lname"
                    className="w-[99%] border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
                  />
                  <p className="text-(--color-danger) text-[10px]">
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>
            )}
            <label htmlFor="email" className="text-[12px]">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              id="email"
              className="border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
            />
            <p className="text-(--color-danger) text-[10px]">
              {errors.email?.message}
            </p>
            <label htmlFor="password" className="text-[12px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                ...(activeTab === "signup" && {
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
                    message: "Min 6 chars, 1 uppercase, 1 number & 1 symbol",
                  },
                }),
              })}
              className="border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
            />
            <p className="text-(--color-danger) text-[10px]">
              {errors.password?.message}
            </p>
            {activeTab === "signup" && (
              <>
                <label htmlFor="cpassword" className="text-[12px]">
                  Conform Password
                </label>
                <input
                  {...register("conformPassword", {
                    required: "Conform password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type="password"
                  id="cpassword"
                  className="border border-gray-300 rounded-(--btn-radius) p-1 focus:border-(--color-primary) focus:outline-none"
                />
                <p className="text-(--color-danger) text-[10px]">
                  {errors.conformPassword?.message}
                </p>
              </>
            )}

            <button
              className="border border-none p-2 mt-2  rounded-(--btn-radius) bg-(--color-primary) text-white flex justify-center items-center gap-1.5 cursor-pointer"
              type="submit"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-4 border-green-200 border-t-transparent animate-spin rounded-full"></div>
                  {activeTab === "login" ? "Loging in.." : "Signing up..."}
                </>
              ) : (
                <>
                  {<FiLogIn size={18} />}
                  {activeTab === "login" ? "Login" : "Sign Up"}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
