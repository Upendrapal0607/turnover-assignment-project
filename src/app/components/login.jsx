import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { loginUser } from "../controller";
const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    let userDetails = {
      email: email,
      password: password,
    };
    if (email && password) {
      loginUser(userDetails)
        .then((response) => {
          console.log({ response });
          alert(response.message);
          if (response.message === "login successful" && response?.token) {
            if (typeof window !== "undefined") {
              localStorage.setItem(
                "token",
                JSON.stringify({
                  token: response?.token || null,
                  userId: response?.user?.id || null,
                })
              );
              router.replace("/product/");
            }
          }
        })
        .catch((err) => {
          alert(err.message);
        });
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
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h1>
        <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
          Welcome back to ECOMERCE
        </h2>

        <h2 className="m-1 text-center text-sm text-gray-900">
          The next gen business marketplace
        </h2>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-6  sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
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
                <div className=" mt-1 flex justify-center items-center">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type={!visible ? "password" : "text"}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {!visible ? (
                    <p
                      className="ml-[-55px] mr-[12px] cursor-pointer"
                      style={{ borderBottom: "1px solid black" }}
                      onClick={() => setVisible(true)}
                    >
                      Show
                    </p>
                  ) : (
                    <p
                      className="ml-[-55px] cursor-pointer mr-[14px]"
                      style={{ borderBottom: "1px solid black" }}
                      onClick={() => setVisible(false)}
                    >
                      Hide
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  LOGIN
                </button>
              </div>
            </form>
            <div>
              <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account ?{" "}
                <a
                  href="/signup"
                  className=" cursor-pointer font-medium text-slate-900 hover:text-slate-950"
                >
                  SIGN UP
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
