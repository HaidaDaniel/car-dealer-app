import React from "react";
import { VehicleModel } from "@/types/api";

interface Props {
  models: VehicleModel[];
}

const VehicleModelList: React.FC<Props> = ({ models }) => {
  return (
    <div className="w-full max-w-md rounded-xl bg-gray-800 p-6 shadow-lg">
      <h2 className="mb-6 text-center text-xl font-bold text-white">
        Available Models
      </h2>
      <ul className="space-y-4">
        {models?.map((model) => (
          <li
            key={model.Model_ID}
            className="rounded-lg border border-gray-700 bg-gray-900 p-4 transition hover:bg-gray-700"
          >
            <p className="text-lg font-semibold text-white">
              {model.Model_Name}
            </p>
            <p className="text-gray-400">Make: {model.Make_Name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleModelList;
