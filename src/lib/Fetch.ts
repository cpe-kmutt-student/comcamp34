import axios from "axios";
const url = import.meta.env.VITE_backend_URL;

let fetch = axios.create({
   baseURL: url,
   // headers :
   // withCredentials: true,
});

export const test = async () => {
   const response = await fetch.post("/api/hello");
   return response;
};

export const Login = async (secret: string) => {
   try {
   } catch (err) {}
   const response = await fetch.post(`/api/users/${secret}`);
   return response;
};

export const getData = async (token: string, page: number) => {
   const response = await axios.get(`${url}/api/pages/${page}`, {
      headers: {
         "access-token": token,
      },
   });

   return response;
};

export const updateData = async (token: string, page: number, data: object) => {
   const response = axios.post(`${url}/api/pages/${page}`, data, {
      headers: {
         "access-token": token,
      },
   });

   return response;
};