export const getServices = async () => {
  return await fetch(
    "https://irepair-backend-rho.vercel.app/api/v1/services"
  ).then((res) => res.json());
};
