import { useVehicleMakes } from "@/hooks/useVehicleMakes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Loader from "../Loader/Loader";


const FilterForm = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const { makes, loading, error } = useVehicleMakes();

  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => 2015 + i
  );
  const router = useRouter();
  const handleNext = () => {
    if (selectedMake && selectedYear) {
      router.push(`/result/${selectedMake}/${selectedYear}`);
    }
  };

  if (loading) return <Loader/>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <h1 className="text-3xl  mb-8">Car Dealer App</h1>
    <div className="w-full max-w-md bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl">
      <h2 className="text-white text-2xl font-semibold mb-6">Filter Your Search</h2>
      <label className="block mb-4">
        <span className="text-gray-200">Select Vehicle Make</span>
        <select
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 text-white p-2 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        >
          <option value="">-- Select a Make --</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </label>
      <label className="block mb-4">
        <span className="text-gray-200">Select Model Year</span>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 text-white p-2 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
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
        className={`w-full py-2 px-4 mt-6 rounded-lg transition font-semibold text-lg ${
          selectedMake && selectedYear
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
    </>
  );
};

export default FilterForm;