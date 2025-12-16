import React from "react";

const PageHeader = ({ title, content }) => {
  return (
    <div className="bg-linear-to-b from-pink to-bg h-84 w-full p-6 flex justify-center">
      <div className="m-auto max-w-3xl flex flex-col space-y-2">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-md font-semibold">{content}</p>
      </div>
    </div>
  );
};

export default PageHeader;
