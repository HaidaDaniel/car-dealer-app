import React from "react";
import Link from "next/link";

const NoModelsFound: React.FC = () => {
  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        No Models Found
      </h2>
      <p className="mb-6 text-gray-600">
        We couldn&apos;t find any models for the selected make and year.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-indigo-600 px-6 py-2 text-lg text-white transition hover:bg-indigo-700"
      >
        Back to Filter
      </Link>
    </div>
  );
};

export default NoModelsFound;
