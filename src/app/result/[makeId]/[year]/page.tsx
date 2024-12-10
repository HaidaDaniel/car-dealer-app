import React, { Suspense } from "react";
import { fetchVehicleModels } from "@/utils/vehicles";
import { generateParams } from "@/utils/generateParams";
import VehicleModelList from "@/components/VehicleModelList/VehicleModelList";
import Loader from "@/components/Loader/Loader";
import NoModelsFound from "@/components/NoModelsFound/NoModelsFound";
import { VehicleModel } from "@/types/api";

interface Props {
  params: Promise<{
    makeId: string;
    year: string;
  }>;
}

export { generateParams as generateStaticParams };

const VehicleModels = ({ models }: { models: VehicleModel[] }) => {
  if (models.length === 0) {
    return <NoModelsFound />;
  }

  return <VehicleModelList models={models} />;
};

const ResultPage = async ({ params }: Props) => {
  const { makeId, year } = await params;
  const models = await fetchVehicleModels(makeId, year);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <Suspense fallback={<Loader />}>
        <VehicleModels models={models} />
      </Suspense>
    </div>
  );
};

export default ResultPage;
