import * as React from "react";
import sample from "./../assets/video.webm";
import logo from "./../assets/logo.png";

export default function Login() {
  const [isLoading, setLoading] = React.useState(false);
  const [video, setVideo] = React.useState(null);
  return (
    <div className="App">
      <div>
        {/* Header */}
        <div
          className="header h-[5vh] flex bg-slate-50 w-full"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="header__logo">
            <img src={logo} className="s w-32" />
          </div>
        </div>
        {/* Full screen video fit */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={sample} type="video/webm" />
        </video>

        {/* Login form */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            width: "auto",
            minWidth: "300px",
            maxWidth: "425px",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
            padding: "20px",
            borderRadius: "10px",
            height: "auto",
          }}
        >
          <form>
            <h1 className="h text-slate-400 text-4xl font-bold mb-5 pt-5">
              Sign In
            </h1>
            <h3 className="text-slate-400 text-l font-bold mb-5">
              For your protection, please verify your identity.{" "}
            </h3>

            <input
              type="text"
              placeholder="Username*"
              className="bg-slate-400 p-2 w-full outline-none mb-2 mt-10 placeholder:font-bold placeholder:text-gray-600 text-gray-600 font-bold"
            />
            <input
              type="password"
              placeholder="Password*"
              className="bg-slate-400 p-2 w-full outline-none mb-5 mt-2 placeholder:font-bold placeholder:text-gray-600 text-gray-600 font-bold"
            />

            {/* Rember me  */}
            <div className="flex items-center mb-5">
              <input type="checkbox" className="mr-2" />
              <label className="text-slate-400 text-l font-bold">
                Remember me
              </label>
            </div>
            <button
              type="button"
              disabled={isLoading}
              className="b bg-emerald-500 p-1 rounded  w-full text-white mb-10 disabled:bg-slate-500"
              onClick={() => {
                setLoading(true);
              }}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* Copyright */}
            <p className="text-slate-400 text-l font-bold mb-5 text-sm">
              © 2021 All Rights Reserved. <br />
              <a href="#" className="text-emerald-500">
                {" "}
                Privacy Policy
              </a>{" "}
              and
              <a href="#" className="text-emerald-500">
                {" "}
                Terms of Use
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
