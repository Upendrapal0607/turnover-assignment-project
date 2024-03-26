import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { registerUser } from "../controller";


const SignUp = ({ userDetails, setUserDetails, setIsMailTrue, setOtp }) => {
  const handleChangeDetails = async (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleNavigate = async (e) => {
    e.preventDefault();
    if (userDetails.username && userDetails.password && userDetails.email) {
      let emailOtp = Math.floor(Math.random() * 100000000);
      setOtp(emailOtp);
      setIsMailTrue(false);
      alert(emailOtp);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div
        className="sm:mx-auto sm:w-full sm:max-w-md bg-white"
        style={{ border: "1px solid #CFD8DC", borderRadius: "14px" }}
      >
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6 text-left" onSubmit={handleNavigate}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    value={userDetails.username}
                    onChange={handleChangeDetails}
                    id="username"
                    autoComplete="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    value={userDetails.email}
                    onChange={handleChangeDetails}
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 flex justify-center items-center">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    onChange={handleChangeDetails}
                    value={userDetails.password}
                    required
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="text-red-600">
                  password lenth should be more than 8 contain number characters
                  and special characters
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
            <div>
              <p className="mt-6 text-center text-sm text-gray-600">
                Have account?{" "}
                <a
                  href="/login"
                  className=" cursor-pointer font-medium text-slate-900-600 hover:text-slate-950"
                >
                  LOGIN
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
