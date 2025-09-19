// src/audius.js
const API_URL = "http://127.0.0.1:5000"; // Flask backend

export const getRandomTrack = async (query = "lofi chill") => {
  try {
    const response = await fetch(`${API_URL}/audius?query=${encodeURIComponent(query)}`);

    if (!response.ok) throw new Error("Backend fetch failed");

    const data = await response.json();
    if (!data || !data.streamUrl) return null;

    return data; // { title, artist, streamUrl }
  } catch (err) {
    console.error("Audius fetch failed:", err);
    return null;
  }
};
