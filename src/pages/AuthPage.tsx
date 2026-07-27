import { FiCheckSquare, FiLogIn } from "react-icons/fi";

export default function AuthPage() {
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <img
          src="/login-page-image.webp"
          alt="image for login page"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className=" h-[60%] w-[60%] flex flex-col gap-4">
          {/* Icon and Title */}
          <div className="flex flex-col justify-center items-center gap-1">
            <FiCheckSquare size={32} className="text-(--color-primary)" />
            <h1 className="text-2xl font-semibold">Todo Manager</h1>
          </div>
          {/* Toggle button */}
          <div className="bg-[#dae4e491] p-2 flex gap-2 justify-center rounded-(--btn-radius)">
            <button className="flex-1 bg-(--color-primary) p-1 text-(--color-surface) rounded-(--btn-radius) cursor-pointer">
              Login
            </button>
            <button className="flex-1">Sign Up</button>
          </div>
          {/* form section */}

          <form className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-(--btn-radius) p-2"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-(--btn-radius) p-2"
            />

            <button className="border border-none p-2 mt-2  rounded-(--btn-radius) bg-(--color-primary) text-white flex justify-center items-center gap-1.5">
              {<FiLogIn size={18} />}
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
