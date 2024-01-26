import axios from "axios";

export const getServices = async () => {
  return axios.get("https://irepair-backend-rho.vercel.app/api/v1/serdfdvices");
};

// export const getServices = async () => {
//   const res = await fetch(
//     "https://irepair-backend-rho.vercel.app/api/v1/serdfdvices"
//   ).then((res) => res.json());

//   if (!res.success) {
//     throw new Error("Something went wrong");
//   }

//   return res;
// };
