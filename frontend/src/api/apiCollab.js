import { toast } from "react-toastify";
const BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL
    : import.meta.env.VITE_API_BASE_URL_PROD;

const request = async (endpoint, method, data = null, token = null) => {
  const headers = { "Content-Type": "application/json" };
  const authToken = token || localStorage.getItem("accessToken");

  if (authToken) headers["Authorization"] = `Bearer ${authToken}`;

  const config = { method, headers };
  if (data) config.body = JSON.stringify(data);
  console.log("done");
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    console.log("🚀 Fetch Request:", {
      url: `${BASE_URL}${endpoint}`,
      method,
      headers,
      body: data,
    });

    const result = await response.json();
    if (!response.ok) {
      if (result.errors && Array.isArray(result.errors)) {
        const errorMessages = result.errors
          .map((err) => err.message)
          .join(", ");
        toast.error(errorMessages);
        return;
      } else if (result.message) {
        toast.error(result.message);
        return;
      } else {
        toast.error("Something went wrong");
        return;
      }
    }
    return result;
  } catch (err) {
    console.log("API request error:", err);
    toast.error("Network error, please try again.");
    throw err;
  }
};

export const collabApi = {
  createRoom: (data, token) => request("/rooms", "POST", data, token),
  getRooms: (token) => request("/rooms", "GET", null, token),
  getRoomById: (id, token) => request(`/rooms/${id}`, "GET", null, token),
  inviteUser: (roomId, data, token) =>
    request(`/rooms/${roomId}/invite`, "POST", data, token),
  assignTask: (roomId, data, token) =>
    request(`/rooms/${roomId}/assign-task`, "POST", data, token),
  sendMessage: (roomId, data, token) =>
    request(`/rooms/${roomId}/message`, "POST", data, token),
  deleteRoom: (roomId, token) =>
    request(`/rooms/${roomId}`, "DELETE", null, token),
};
