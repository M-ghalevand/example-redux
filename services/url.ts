import axios from "axios";

export const post = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
