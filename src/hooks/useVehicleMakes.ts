import { VehicleMake } from "@/types/api";
import { fetchVehicleMakes } from "@/utils/vehicles";
import { useEffect, useState } from "react";


export const useVehicleMakes = () => {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchVehicleMakes();
        setMakes(results);
      } catch (err) {
        console.error("Error fetching vehicle makes:", err);
        setError("Failed to fetch vehicle makes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { makes, loading, error };
};
