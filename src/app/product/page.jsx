"use client";
// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { Pagination } from "../components/pagination";
// import { updateProduct } from "../controller";
// import LoginPage from "../components/login";

// const page = () => {
//   const [products, setProducts] = useState([]);
//   const [tokenData, setTokenData] = useState(null);
//   const [total, setTotal] = useState(50);
//   const InRef = useRef();
//   const [page, setPage] = useState(1);
//   const getProduct = async () => {
//     const response = await axios.get(
//       `http://localhost:3000/api/products?page=${page}&limit=${6}`
//     );
//     setProducts(response?.data?.data);
//     setTotal(response?.data?.total);
//   };
//   useEffect(() => {
//     getProduct();
//   }, [page]);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedToken = localStorage.getItem("token");
//       if (storedToken) {
//         setTokenData(JSON.parse(storedToken));
//       }
//     }
//   }, []);
//   const handleOnChange = (e, productId) => {
//     const { checked } = e.target;
//     if (checked) {
//       updateProduct({ userId: tokenData?.userId, productId })
//         .then((response) => {
//           console.log({ Insidepage: response });
//           if (response.message == "User updated successfully") {
//             getProduct();
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       InRef.current.checked = false;
//     }
//   };

//   return !tokenData?.token ? (
//     <LoginPage />
//   ) : (
//     <div className="min-h-screen bg-white flex flex-col py-12 sm:px-6 lg:px-8">
//       <div
//         className="sm:mx-auto sm:w-full sm:max-w-md bg-white"
//         style={{ border: "1px solid #CFD8DC", borderRadius: "14px" }}
//       >
//         <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
//           Please make your interests!
//         </h2>
//         <h2 className="my-4 text-center text-sm text-gray-900">
//           We will keep you notified.
//         </h2>
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <div className=" py-8 px-6  sm:rounded-lg sm:px-10">
//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-900 mb-4"
//                 >
//                   My saved interests
//                 </label>
//                 {products.map((product) => (
//                   <div key={product.id}>
//                     <div className="mt-4 flex items-center">
//                       <input
//                         ref={InRef}
//                         checked={tokenData?.userId == product.userId}
//                         onChange={(e) => handleOnChange(e, product.id)}
//                         type="checkbox"
//                         className="size-4 bg-black transition-colors duration-150 ease-in-out focus:outline-none"
//                       />
//                       <span className="ml-2 text-sm">{product.category}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </form>
//             <div className="mt-6 text-center text-sm text-gray-600">
//               <Pagination
//                 setPage={setPage}
//                 page={page}
//                 total={Math.floor(total / 6) + 1}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Pagination } from "../components/pagination";
import { updateProduct } from "../controller";
import LoginPage from "../components/login";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(50);
  const [tokenData, setTokenData] = useState(null);
  const InRef = useRef();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setTokenData(JSON.parse(storedToken));
      }
    }
  }, []);

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/products?page=${page}&limit=${6}`
    );
    setProducts(response?.data?.data);
    setTotal(response?.data?.total);
  };

  useEffect(() => {
    getProduct();
  }, [page]);

  const handleOnChange = (e, productId) => {
    const { checked } = e.target;
    if (checked) {
      updateProduct({ userId: tokenData?.userId, productId })
        .then((response) => {
          console.log({ Insidepage: response });
          if (response.message === "User updated successfully") {
            getProduct();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      InRef.current.checked = false;
    }
  };

  return !tokenData?.token ? (
    <LoginPage />
  ) : (
    <div className="min-h-screen bg-white flex flex-col py-12 sm:px-6 lg:px-8">
      <div
        className="sm:mx-auto sm:w-full sm:max-w-md bg-white"
        style={{ border: "1px solid #CFD8DC", borderRadius: "14px" }}
      >
        <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
          Please make your interests!
        </h2>
        <h2 className="my-4 text-center text-sm text-gray-900">
          We will keep you notified.
        </h2>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-6  sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-4"
                >
                  My saved interests
                </label>
                {products.map((product) => (
                  <div key={product.id}>
                    <div className="mt-4 flex items-center">
                      <input
                        ref={InRef}
                        checked={tokenData?.userId === product.userId}
                        onChange={(e) => handleOnChange(e, product.id)}
                        type="checkbox"
                        className="size-4 bg-black transition-colors duration-150 ease-in-out focus:outline-none"
                      />
                      <span className="ml-2 text-sm">{product.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </form>
            <div className="mt-6 text-center text-sm text-gray-600">
              <Pagination
                setPage={setPage}
                page={page}
                total={Math.floor(total / 6) + 1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
