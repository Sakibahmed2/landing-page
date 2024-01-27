import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");

  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch(
        "https://irepair-backend-rho.vercel.app/api/v1/services",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  console.log({ isError, isSuccess });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: "Description",
      devices: ["iPhone", "android"],
      price: 1000,
    };

    console.log(serviceData);
    await mutateAsync(serviceData);
    console.log("done");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
