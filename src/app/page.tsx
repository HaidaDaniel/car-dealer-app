"use client";

import React from "react";

import { useVehicleMakes } from "../hooks/useVehicleMakes";
import FilterForm from "@/components/Filter/FilterForm";
import Loader from "@/components/Loader/Loader";

const FilterPage = () => {
  const { makes, loading, error } = useVehicleMakes();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <FilterForm makes={makes} />
    </div>
  );
};

export default FilterPage;
