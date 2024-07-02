import { useNavigate } from "react-router-dom";
import LoginImage from "../images/LoginImage.png";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/LoginAuthContext";

function Login() {
  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  // const auth = useAuth();
  function HandleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (isAuthenticated) Navigate("/app");
    },
    [isAuthenticated, Navigate]
  );

  return (
    <div className="flex flex-col md:flex-row">
      <div className="left h-screen w-screen md:w-[50vw] flex justify-center items-center">
        <div className="bg-[#FBFBFB] w-fit p-4 rounded-[15%]">
          <form onSubmit={HandleSubmit}>
            <div className="flex gap-2 flex-col px-10 py-10 bg-white rounded-lg">
              <p className="text-sm text-[#828282] ">Welcome</p>
              <p className="font-bold text-3xl mb-6">LogIn</p>
              <div className="flex flex-col">
                <label htmlFor="Email" className="font-semibold">
                  Email Address
                </label>
                <input
                  type="Email"
                  id="Email"
                  placeholder="user@gmail.com"
                  className="p-2 w-80 border rounded-md bg-[#F1F4FA] mb-3 "
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-semibold ">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="*******"
                  className="p-2 w-80 border rounded-md bg-[#F1F4FA]"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="flex text-sm justify-between m-2">
                <p>Remember me</p>
                <p className="text-[#F47458] hover:underline cursor-pointer">
                  Reset Password?
                </p>
              </div>
              <button className="text-white bg-red-500 p-2 rounded-md hover:bg-red-600 shadow-lg hover:shadow-red-300 transition-all duration-200">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right h-screen w-screen md:w-[50vw] px-11 py-32 flex items-center bg-[#FFEDE1]">
        <img src={LoginImage} alt="image" />
      </div>
    </div>
  );
}

export default Login;
