import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-solid border-opacity-50"></div>
    </div>
  );
};

export default Loader;
