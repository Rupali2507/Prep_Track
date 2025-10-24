import { toast } from "react-toastify";
const BASE_URL = "http://localhost:5000/api";

const request = async (endpoint, method = "GET", data = null, token = null) => {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const config = { method, headers };
  if (data) config.body = JSON.stringify(data);

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const result = await response.json();

    if (!response.ok) {
      // Check for Zod validation errors
      if (result.errors && Array.isArray(result.errors)) {
        const errorMessages = result.errors
          .map((err) => err.message)
          .join(", ");
        toast.error(errorMessages);
        return;
      }
      // Check for normal error message
      else if (result.message) {
        toast.error(result.message);
        return;
      }
      // Fallback
      else {
        toast.error("Something went wrong");
        return;
      }
    }

    return result;
  } catch (err) {
    console.error("API request error:", err);
    throw err;
  }
};

export const api = {
  signup: (data) => request("/user/signup", "POST", data),
  signin: (data) => request("/user/signin", "POST", data),
};
