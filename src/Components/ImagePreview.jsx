import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  // console.log(props);
  return (
    <div className="grid grid-cols-2 mt-4 gap-4 overflow-hidden">
      <div className=" h-96 w-full  ">
        <h1 className="bg-black p-2 text-white text-center rounded-xl">
          Uploaded Image
        </h1>
        <div className=" w-full h-full flex justify-center items-center">
          {props.uploadedImage ? (
            <img
              src={props.uploadedImage}
              alt="No Uploaded Image"
              className="w-full h-full pt-2 object-cover"
            />
          ) : (
            <p className="font-bold text-2xl ">No Image Selected</p>
          )}
        </div>
      </div>
      <div className="  h-96 w-full">
        <h1 className="bg-blue-600 p-2 text-white text-center rounded-xl ">
          Enhanced Image
        </h1>
        <div className=" w-full h-full flex justify-center items-center">
          {props.enhancedImage && !props.loading ? (
            <img
              src={props.enhancedImage}
              alt="No Enhanced Image"
              className="w-full pt-2 h-full object-cover"
            />
          ) : !props.loading ? (
            <p className="font-bold text-2xl text-center">No Enhanced Image</p>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
