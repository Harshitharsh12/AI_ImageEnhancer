import React from "react";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center align-center h-screen ">
      <div className="mb-5">
        <h1 className="font-bold text-5xl p-2 text-center">
          AI Image Enhancer
        </h1>
        <p className="text-center">
          Upload your Image and let AI enhance to it in seconds!!{" "}
        </p>
      </div>

      <Home />
      <div className="mt-12 font-bold">
        <p className="text-blue-600">Powered By @HarshaAI</p>
      </div>
    </div>
  );
};

export default App;
