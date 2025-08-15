import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // user login
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className=" min-h-screen flex flex-col justify-center py-5 pb-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full md:w-3/5">
        <div className="w-full bg-black rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight  text-[#92E9DC] md:text-2xl">
              Lo<span className="text-[#00DAC6]">gi</span>
              <span className="text-[#008966]">n</span>
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block mb-2 text-[#575454] text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-[#575454] text-sm font-medium ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between my-2">
                <a
                  href="/"
                  className="text-sm font-medium text-[#bbafaf] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="flex justify-center">
                <p className="text-sm font-light  text-[#bbafaf] ">
                  You haven't registered yet?
                  <Link
                    to="/"
                    className="font-medium text-primary-600 hover:underline ml-2">
                    Sign Up
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-full btn border-[#00DAC6] bg-[#00DAC6] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
