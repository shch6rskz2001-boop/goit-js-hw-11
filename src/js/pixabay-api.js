import axios from "axios";

const API_KEY = "42598065-1779ad5a953180c3fe77c2809";

axios.defaults.baseURL = "https://pixabay.com/api/";

export async function fetchImages(query) {
    try {
        const response = await axios.get("", {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            },
        });

        return response.data.hits;

    } catch (error) {
        console.error(error);
        return [];
    }
}
