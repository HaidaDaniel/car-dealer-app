import React from "react";
import { VehicleModel } from "@/types/api";

interface Props {
  models: VehicleModel[];
}

const VehicleModelList: React.FC<Props> = ({ models }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold text-white mb-6 text-center">Available Models</h2>
      <ul className="space-y-4">
        {models.map((model) => (
          <li
            key={model.Model_ID}
            className="p-4 bg-gray-900 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
          >
            <p className="text-lg font-semibold text-white">{model.Model_Name}</p>
            <p className="text-gray-400">Make: {model.Make_Name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleModelList;
