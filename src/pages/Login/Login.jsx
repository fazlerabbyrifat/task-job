import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {};

  return (
    <div className="w-[800px] h-[588px] lg:mx-auto my-16">
      <h1 className="text-5xl font-semibold text-[#333333] font-sans text-center">
        Welcome To Task Job
      </h1>
      <form className="mt-16 mb-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            className="block text-neutral text-2xl font-medium mb-2"
            htmlFor="email"
          >
            Email Address*
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            {...register("email", { required: true })}
          />
        </div>
        <div className="relative mb-12">
          <label
            className="block text-neutral text-2xl font-medium mb-2"
            htmlFor="email"
          >
            Password*
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            {...register("password", { required: true })}
          />
          <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-xl mt-10 text-neutral opacity-60" />
              ) : (
                <FaEye className="text-xl mt-10 text-neutral opacity-60" />
              )}
            </span>
        </div>
        <input
          className="w-full px-4 py-6 bg-primary text-white rounded-lg text-2xl font-semibold hover:bg-blue-600"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-2xl font-medium">Don't Have An Account? <Link className="text-primary">Register Now</Link></p>
    </div>
  );
};

export default Login;
