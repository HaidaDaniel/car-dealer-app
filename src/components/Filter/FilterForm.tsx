import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { years } from "@/utils/years";
import { VehicleMake } from "@/types/api";

const FilterForm = ({ makes }: { makes: VehicleMake[] }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const router = useRouter();
  const handleNext = () => {
    if (selectedMake && selectedYear) {
      router.push(`/result/${selectedMake}/${selectedYear}`);
    }
  };

  return (
    <>
      <h1 className="mb-8 text-3xl">Car Dealer App</h1>
      <div className="w-full max-w-md rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-8 shadow-xl">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Filter Your Search
        </h2>
        <label className="mb-4 block">
          <span className="text-gray-200">Select Vehicle Make</span>
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="focus:ring/50 mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-2 text-white focus:ring focus:ring-indigo-500"
          >
            <option value="">-- Select a Make --</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </select>
        </label>
        <label className="mb-4 block">
          <span className="text-gray-200">Select Model Year</span>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="focus:ring/50 mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-2 text-white focus:ring focus:ring-indigo-500"
          >
            <option value="">-- Select a Year --</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={handleNext}
          disabled={!selectedMake || !selectedYear}
          className={`mt-6 w-full rounded-lg px-4 py-2 text-lg font-semibold transition ${
            selectedMake && selectedYear
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "cursor-not-allowed bg-gray-500 text-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FilterForm;
