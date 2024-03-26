"use client";
import React, { useState } from "react";
import SignUp from "../components/signup";
import { VerifiedOtp } from "../components/verifiedOtp";
import { registerUser } from "../controller";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [pinned, setpine] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
  });
  const [otp, setOtp] = useState(10000000);
  const [isMailTrie, setIsMailTrue] = useState(true);

  const handleSubmitVerify = (e) => {
    e.preventDefault();
    console.log(pinned);
    let inputOtp = "";
    for (let key in pinned) {
      inputOtp = inputOtp + pinned[key];
    }
    console.log(inputOtp);
    if (otp == +inputOtp) {
      console.log("get reque");
      registerUser(userDetails)
        .then((response) => {
          alert(response?.message);
          if (response.message == "User register success") {
            router.replace("/login");
          }
        })
        .catch((error) => {
          alert("there is an error");
        });
    } else {
      alert("wrong otp");
    }
  };

  return (
    <div>
      {isMailTrie ? (
        <SignUp
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setIsMailTrue={setIsMailTrue}
          setOtp={setOtp}
        />
      ) : (
        <VerifiedOtp
          handleSubmitVerify={handleSubmitVerify}
          otp={otp}
          pinned={pinned}
          setpine={setpine}
        />
      )}
    </div>
  );
};
export default page;
