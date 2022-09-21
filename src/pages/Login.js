import sample from "./../assets/video.webm";

export default function Login() {
  return (
    <div className="App">
      <div>
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
                <h1 className="h text-slate-400 text-4xl font-bold mb-5">Sign In</h1>
                <h3 className="text-slate-400 text-l font-bold mb-5">For your protection, please verify your identity. </h3>
                
                <input type="text" placeholder="Username*" className="bg-slate-400 p-2 w-full outline-none rounded mb-2 mt-10 placeholder:font-bold placeholder:text-gray-600 text-gray-600 font-bold" />
                <input type="password" placeholder="Password*" className="bg-slate-400 p-2 w-full outline-none rounded mb-5 mt-2 placeholder:font-bold placeholder:text-gray-600 text-gray-600 font-bold" />

                {/* Rember me  */}
                <div className="flex items-center mb-5">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-slate-400 text-l font-bold">Remember me</label>
                </div>
                <button type="submit" className="b bg-emerald-500 p-1 rounded  w-full text-white mb-10">Login</button>

                {/* Copyright */}
                <p className="text-slate-400 text-l font-bold mb-5 text-sm">© 2021 All Rights Reserved. <br/> 
                    <a href="#" className="text-emerald-500"> Privacy Policy</a> and 
                    <a href="#" className="text-emerald-500"> Terms of Use</a>
                </p>

            </form>
        </div>
      </div>
    </div>
  );
}