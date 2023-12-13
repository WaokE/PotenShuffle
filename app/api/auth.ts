import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const signUp = (email: string, name: string, password: string) => {
    if (!serverUrl) throw new Error("NEXT_PUBLIC_SERVER_URL is not defined");
    return axios.post(serverUrl + "/sign-up", {
        email,
        name,
        password,
    });
};

export const signIn = (email: string, password: string) => {
    if (!serverUrl) throw new Error("NEXT_PUBLIC_SERVER_URL is not defined");
    return axios.post(serverUrl + "/sign-in", {
        email,
        password,
    });
};
