const DirectCloudinaryTest = () => {
  const imageURL =
    "https://res.cloudinary.com/nmasters-dev/image/upload/v1766254359/IN4OjmY4wMHBFxIcbuvRLbS2U1RKIHTf73C50anrhcA4gFo9_ixpdsl.png";

  return (
    <div className="p-4 bg-background text-text">
      <h2 className="text-xl text-pink">Direct Cloudinary Test Image</h2>
      <p className="mb-2">Testing direct image fetch (no transformations):</p>
      {imageURL && (
        <img
          src={imageURL}
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
