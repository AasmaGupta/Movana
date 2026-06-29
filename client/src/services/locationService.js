import axios from "axios";

export const searchLocation = async (query) => {

    if (!query) return [];

    const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: query,
                format: "json",
                addressdetails: 1,
                limit: 5,
            },
            headers: {
                "Accept-Language": "en",
            },
        }
    );

    return response.data;
};