import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUploadImage = () => {
    setEnhancedImage();
    setLoading(false);
  };
  useEffect(() => {
    handleUploadImage();
  }, []);
  return (
    <>
      <ImageUpload
        setUploadImage={setUploadedImage}
        setLoading={setLoading}
        setEnhancedImage={setEnhancedImage}
      />
      <ImagePreview
        uploadedImage={uploadedImage}
        enhancedImage={enhancedImage}
        loading={loading}
      />
    </>
  );
};

export default Home;
