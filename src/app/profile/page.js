"use client"
import React from 'react'
import LoginPage from '../components/login'

 const page = () => {
    const tokenData = JSON.parse(localStorage.getItem("token"))
    const LogOuthandle = () =>{
      localStorage.clear("token")
    }
  return (
    !tokenData?.token?<LoginPage/>:<div className='w-full h-[82vh] bg-white flex justify-center items-center'>
     <button
      className="bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={LogOuthandle}
    >
      Logout
    </button>
    </div>
  )
}
export default page