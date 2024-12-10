
import { VehicleMake, VehicleModel, VehicleModelsResponse } from "@/types/api";
import api from "../utils/api";
import axios from "axios";

export const fetchVehicleMakes = async (): Promise<VehicleMake[]> => {
    const { data } = await api.get("vehicles/GetMakesForVehicleType/car?format=json");
    return data.Results;
  };

  export const fetchVehicleModels = async (makeId: string, year: string): Promise<VehicleModel[]> => {
    const response = await axios.get<VehicleModelsResponse>(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    return response.data.Results;
  };