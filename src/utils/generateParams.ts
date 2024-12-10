import axios from "axios";
import { years } from "./years";

export async function generateParams() {
  try {
    const response = await axios.get(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
    );
    const makes = response.data.Results.slice(0, 3); // generate props only for 3 makes

    const params = [];

    for (const make of makes) {
      for (const year of years) {
        params.push({ makeId: make.MakeId.toString(), year: year.toString() });
      }
    }

    return params;
  } catch (error) {
    console.error("Error fetching vehicle makes:", error);
    throw new Error("Failed to fetch vehicle makes");
  }
}
