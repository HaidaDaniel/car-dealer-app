import { VehicleModel } from "@/types/api";

interface Props {
  models: VehicleModel[];
}

const VehicleModelList: React.FC<Props> = ({ models }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Available Models</h2>
      <ul className="space-y-2">
        {models.map((model) => (
          <li key={model.Model_ID} className="border-b border-gray-300 pb-2">
            <p className="text-lg font-semibold">{model.Model_Name}</p>
            <p className="text-gray-500">Make: {model.Make_Name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleModelList;