"use client";

import React from "react";

import { useVehicleMakes } from "../hooks/useVehicleMakes";
import FilterForm from "@/components/Filter/FilterForm";
import Loader from "@/components/Loader/Loader";

const FilterPage = () => {
  const {  loading } = useVehicleMakes();


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 ">
      {loading ? <Loader/> :  <FilterForm />}
    </div>
  );
};

export default FilterPage;