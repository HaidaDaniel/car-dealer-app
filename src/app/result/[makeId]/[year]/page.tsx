import React, { Suspense } from "react";
import { fetchVehicleModels } from "@/utils/vehicles";
import VehicleModelList from "@/components/VehicleModelList/VehicleModelList";
import Loader from "@/components/Loader/Loader";

interface Props {
  params: {
    makeId: string;
    year: string;
  };
}

const VehicleModels = async ({ params }: Props) => {
  const { makeId, year } = params;
  const models = await fetchVehicleModels(makeId, year);

  if (models.length === 0) {
    return (
      <p className="text-gray-400 text-lg">
        No models found for the selected make and year.
      </p>
    );
  }

  return <VehicleModelList models={models} />;
};

const ResultPage: React.FC<Props> = ({ params }) => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
        <Suspense fallback={<Loader/>}>
          <VehicleModels params={params} />
        </Suspense>
      </div>
    );
  };

export default ResultPage;
