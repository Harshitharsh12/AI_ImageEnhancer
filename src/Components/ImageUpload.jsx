import axios from "axios";
import React from "react";
// TaskId:22ab255e-6ce8-4ccd-b55a-489adee56162
// EnhancedImage:
const ImageUpload = (props) => {
  const showImageHandler = async (e) => {
    const file = e.target.files[0];
    // console.log(file);
    const url = URL.createObjectURL(file);
    // console.log(url);
    props.setUploadImage(url);
    props.setLoading(true);
    try {
      const taskId = await createTask(file);
      console.log(taskId);

      const res = await PollForEnhancedImage(taskId);
      if (res) {
        props.setEnhancedImage(res);
        props.setLoading(false);
        console.log(res);
      } else {
        console.log("Error In Getting Enhanced Image!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    try {
      const res = await axios.post(
        "https://techhk.aoscdn.com/api/tasks/visual/scale",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
          },
        }
      );
      if (res?.data?.data) {
        return res?.data?.data?.task_id;
      } else {
        console.log("Error While Getting taskid!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getTaskResult = async (taskId) => {
    try {
      const res = await axios.get(
        `https://techhk.aoscdn.com/api/tasks/visual/scale/${taskId}`,
        {
          headers: { "X-API-KEY": API_KEY },
        }
      );
      if (res) {
        return res?.data?.data;
      } else {
        console.log("Error While Getting EnhancedImage!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await getTaskResult(taskId);

    if (result.state === 4) {
      console.log(`Processing...(${retries}/${20})`);

      if (retries >= 20) {
        throw new Error("Max retries reached. Please try again later.");
      }

      // wait for 2 second
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return PollForEnhancedImage(taskId, retries + 1);
    }
    console.log("Enhanced Image URL:", result);
    return result?.image;
  };
  return (
    <div className="bg-white shadow-2xl rounded-2xl border-t-4 border-t-black w-auto p-4 px-6 h-auto ">
      <label
        htmlFor="pic"
        className=" block text-center cursor-pointer p-2.5 hover:border-blue-500 hover:text-blue-500 border-2 border-dashed border-black rounded-2xl "
      >
        <input
          type="file"
          id="pic"
          className="hidden"
          onChange={showImageHandler}
        />
        <p className="font-bold">Click and Drag for Uploading Image</p>
      </label>
    </div>
  );
};
export default ImageUpload;
