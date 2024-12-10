import React from "react";
import { fetchVehicleModels } from "@/utils/vehicles";
import VehicleModelList from "@/components/VehicleModelList/VehicleModelList";

interface Props {
  params: {
    makeId: string;
    year: string;
  };
}

const ResultPage: React.FC<Props> = async ({ params }) => {
  const { makeId, year } = params;

  try {
    const models = await fetchVehicleModels(makeId, year);

    if (models.length === 0) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500 text-lg">No models found for the selected make and year.</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <VehicleModelList models={models} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching vehicle models:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to fetch vehicle models. Please try again later.</p>
      </div>
    );
  }
};

export default ResultPage;
