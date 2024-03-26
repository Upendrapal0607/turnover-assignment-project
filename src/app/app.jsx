
import React from 'react'
import { useRouter } from "next/navigation";

export const App = () => {
  const navigate = useRouter()
const halndleLogin = () => {
  navigate.replace("/login")
};
  return (
    <div className="flex flex-col  w-full min-h-screen bg-white">
      <h1 className="text-center text-4xl font-bold text-gray-800 mt-16">
        Welcome to ECOMERCE Application.
      </h1>
      <h1 className=" text-center text-4xl font-bold text-green-800 mt-16">
        Hello Admin,
      </h1>
      <p className=" text-center text-4xl font-bold text-gray-400 mt-4">
        This is your ECOMERCE application
      </p>
      <p className=" text-center text-4xl font-bold text-gray-400 mt-4">
        Click here for login{" "}
        <span className="text-green-500 cursor-pointer" onClick={halndleLogin}>LOGIN or SIGN UP</span> and enjoy it...
      </p>
      <img
        className="m-auto text-gray-100 text-4xl font-bold bg-gray-500 hover:bg-gray-700 hover:text-white 
        block px-3 py-2 rounded-md mt-[2rem] sm:mt-[5rem]"
        src="https://w1.pngwing.com/pngs/351/250/png-transparent-shopping-cart-icon-online-shopping-ecommerce-retail-brick-and-mortar-sales-business-drop-shipping-thumbnail.png"
        alt=""
      />
    </div>
  )
}
