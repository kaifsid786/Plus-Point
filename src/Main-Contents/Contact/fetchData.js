// geocodingApi.js

import axios from "axios";

const getCoordinatesFromAddress = async (address) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );

    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { lat: parseFloat(lat), lon: parseFloat(lon) };
    } else {
      throw new Error("No coordinates found for the provided address.");
    }
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

export default getCoordinatesFromAddress;
