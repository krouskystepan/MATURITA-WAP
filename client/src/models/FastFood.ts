import type { IFastFoodForm } from "@/types";

/**
 * Function to fetch all fastFoods from the server.
 * @returns Object containing status, message, and payload data.
 */
export const getAllFastFoods = async () => {
  const req = await fetch("http://localhost:3000/fastFoods", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  };
};

/**
 * Function to fetch a fastFood by their ID from the server.
 * @param id string - ID of the fastFood to fetch.
 * @returns Object containing status, message, and payload data.
 */
export const getFastFoodById = async (id: string) => {
  const req = await fetch(`http://localhost:3000/fastFoods/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  };
};

/**
 * Function to create a new fastFood on the server.
 * @param formData IFastFoodForm - Form data for the new fastFood.
 * @returns Object containing status, message, and payload data.
 */
export const createFastFood = async (formData: IFastFoodForm) => {
  const req = await fetch(`http://localhost:3000/fastFoods`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  };
};

/**
 * Function to update an existing fastFood on the server.
 * @param id string - ID of the fastFood to update.
 * @param formData IFastFoodForm - Form data for the updated fastFood.
 * @returns Object containing status, message, and payload data.
 */
export const updateFastFood = async (id: string, formData: IFastFoodForm) => {
  const req = await fetch(`http://localhost:3000/fastFoods/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });
  const data = await req.json();

  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  };
};

/**
 * Function to delete a fastFood from the server.
 * @param id string - ID of the fastFood to delete.
 * @returns Object containing status, message, and payload data.
 */
export const deleteFastFood = async (id: string) => {
  const req = await fetch(`http://localhost:3000/fastFoods/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  };
};
