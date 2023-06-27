import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const position = watch("position");

  return (
    <div className="w-[1000px] mx-auto">
      <div className="w-[800px] p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Personal Information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: true })}
              className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.fullName && (
              <span className="text-red-500">Please enter your full name</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              })}
              className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-red-500">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="position" className="block font-bold mb-2">
              Position:
            </label>
            <select
              id="position"
              {...register("position", { required: true })}
              className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Position</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            {errors.position && (
              <span className="text-red-500">Please select a position</span>
            )}
          </div>

          {position === "student" && (
            <>
              <div className="mb-4">
                <label htmlFor="instituteName" className="block font-bold mb-2">
                  Institute Name:
                </label>
                <select
                  id="instituteName"
                  {...register("instituteName", { required: true })}
                  className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="">Select Institute Name</option>
                  <option value="highSchool">
                    Dhaka National Medical College
                  </option>
                  <option value="undergraduate">Ibrahim Medical College</option>
                  <option value="graduate">Bangladesh Medical College</option>
                  <option value="graduate">
                    Holy Family Red Crescent Medical College
                  </option>
                </select>
                {errors.instituteName && (
                  <span className="text-red-500">
                    Please enter your institute name
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="educationLevel"
                  className="block font-bold mb-2"
                >
                  Education Level:
                </label>
                <select
                  id="educationLevel"
                  {...register("educationLevel", { required: true })}
                  className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="">Select Education Level</option>
                  <option value="highSchool">
                    Secondary School Certificate
                  </option>
                  <option value="undergraduate">
                    Higher Secondary School Certificate
                  </option>
                  <option value="graduate">Bachelor of Science</option>
                  <option value="graduate">Bachelor of Arts</option>
                  <option value="graduate">Master of Arts</option>
                </select>
                {errors.educationLevel && (
                  <span className="text-red-500">
                    Please select your education level
                  </span>
                )}
              </div>
            </>
          )}

          {position === "teacher" && (
            <>
              <div className="mb-4">
                <label htmlFor="instituteName" className="block font-bold mb-2">
                  Institute Name:
                </label>
                <select
                  id="instituteName"
                  {...register("instituteName", { required: true })}
                  className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="">Select Institute Name</option>
                  <option value="highSchool">
                    Dhaka National Medical College
                  </option>
                  <option value="undergraduate">Ibrahim Medical College</option>
                  <option value="graduate">Bangladesh Medical College</option>
                  <option value="graduate">
                    Holy Family Red Crescent Medical College
                  </option>
                </select>
                {errors.instituteName && (
                  <span className="text-red-500">
                    Please enter your institute name
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="workTime" className="block font-bold mb-2">
                  Work Time:
                </label>
                <select
                  id="workTime"
                  {...register("workTime", { required: true })}
                  className="w-full px-6 py-4 border border-neutral rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="">Select Work Time</option>
                  <option value="fullTime">Full Time</option>
                  <option value="partTime">Part Time</option>
                </select>
                {errors.workTime && (
                  <span className="text-red-500">
                    Please select your work time
                  </span>
                )}
              </div>
            </>
          )}

          <input
            className="w-full px-4 py-6 bg-primary text-white rounded-lg text-2xl font-semibold hover:bg-blue-600"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
