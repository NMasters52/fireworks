export const createImageURL = (publicID, cloudName) => {
  const url = `https://res.cloudinary.com/${cloudName}/image/upload/${publicID}`;
  return url;
};
