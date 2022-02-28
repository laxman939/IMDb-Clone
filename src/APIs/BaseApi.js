import Axios from "axios";

const BaseApi = Axios.create({
  baseURL: "https://api.themoviedb.org/",
});

export default BaseApi;

export const API_KEY = "d7a3fef03d316da2d557be3ba83065a1";
