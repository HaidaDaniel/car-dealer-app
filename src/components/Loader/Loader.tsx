import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="border/50 size-12 animate-spin rounded-full border-t-4 border-solid border-indigo-600"></div>
    </div>
  );
};

export default Loader;
