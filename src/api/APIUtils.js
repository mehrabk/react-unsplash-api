import axios from "axios";

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2o1iVaIMta-_GCkuFk8-3pLZTptfXJslOedJ6yeN9Q0",
  },
});
