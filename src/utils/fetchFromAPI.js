import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchFromAPI(url) {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
