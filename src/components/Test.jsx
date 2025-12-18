// Somewhere in your App.jsx or a temporary test component
import React from "react";

const DirectCloudinaryTest = () => {
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const PUBLIC_ID_WITH_EXTENSION = "joker"; // Your image file name + extension

  const directImageUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${PUBLIC_ID_WITH_EXTENSION}`;

  console.log("Direct Cloudinary Image URL:", directImageUrl);

  return (
    <div className="p-4 bg-background text-text">
      <h2 className="text-xl text-pink">Direct Cloudinary Test Image</h2>
      <p className="mb-2">Testing direct image fetch (no transformations):</p>
      {directImageUrl && (
        <img
          src={directImageUrl}
          alt="Direct Cloudinary Test"
          className="w-full max-w-xs h-auto mt-2 rounded"
        />
      )}
      <p className="mt-4 text-sm text-tagline">
        Check the console for the generated URL. Paste it into your browser to
        verify.
      </p>
    </div>
  );
};

export default DirectCloudinaryTest;
