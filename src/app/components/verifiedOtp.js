"use client"
import React, { useState } from 'react'

export const VerifiedOtp = ({handleSubmitVerify,pinned,setpine}) => {
  
  const handleOtpSubmitChange = e => {
    setpine({...pinned, [e.target.name]: e.target.value });
  };


  
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white" style={{border:'1px solid #CFD8DC',borderRadius:"14px"}}>
    
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-12 px-4 sm:rounded-lg sm:px-10">
          <form className="space-y-6 text-left" onSubmit={handleSubmitVerify}>
            <div>
            <h2 className=" text-center text-xl font-bold text-gray-900">
         Vrify your email
        </h2>
     
        <h2 className="m-2 mb-12 text-center text-sm text-gray-900">
        Enter 8 digit code your have received on {"upendrapal@gmail.com"}
        </h2>
             <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Code
              </label>
              <div className="flex mt-1 w-full justify-between gap-2 items-center">
          
                <input required
                value={pinned.p1}
                onChange={handleOtpSubmitChange}
                name='p1'
                  maxLength={1}
                  className="sm:w-[40px] w-[30px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input required
                value={pinned.p2}
                onChange={handleOtpSubmitChange}
                name='p2'
                  maxLength={1}
                  className="w-[40px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input required
                value={pinned.p3}
                onChange={handleOtpSubmitChange}
                name='p3'
                  maxLength={1}
                  className="w-[40px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input required
                value={pinned.p4}
                onChange={handleOtpSubmitChange}
                name='p4'
                  maxLength={1}
                  className="w-[40px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input required
                value={pinned.p5}
                onChange={handleOtpSubmitChange}
                name='p5'
                  maxLength={1}
                  className="w-[40px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input required
                value={pinned.p6}
                onChange={handleOtpSubmitChange}
                name='p6'
                  maxLength={1}
                  className="w-[40px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input required
                value={pinned.p7}
                onChange={handleOtpSubmitChange}
                name='p7'
                  maxLength={1}
                  className="w-[40px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input required
                value={pinned.p8}
                onChange={handleOtpSubmitChange}
                name='p8'
                  maxLength={1}
                  className="w-[40px] appearance-none block  px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
               
              </div>
            </div>

            
            
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                VERIFY
              </button>
            </div>
          </form>
          
        </div>
      </div>
      </div>
    </div>
  )
}
