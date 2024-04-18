import type { IJuiceForm } from "@/types";

/**
 * Function to fetch all juices from the server.
 * @returns Object containing status, message, and payload data.
 */
export const getAllJuices = async () => {
  const req = await fetch("http://localhost:3000/juices", {
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
 * Function to fetch a juice by their ID from the server.
 * @param id string - ID of the juice to fetch.
 * @returns Object containing status, message, and payload data.
 */
export const getJuiceById = async (id: string) => {
  const req = await fetch(`http://localhost:3000/juices/${id}`, {
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
 * Function to create a new juice on the server.
 * @param formData IJuiceForm - Form data for the new juice.
 * @returns Object containing status, message, and payload data.
 */
export const createJuice = async (formData: IJuiceForm) => {
  const req = await fetch(`http://localhost:3000/juices`, {
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
 * Function to update an existing juice on the server.
 * @param id string - ID of the juice to update.
 * @param formData IJuiceForm - Form data for the updated juice.
 * @returns Object containing status, message, and payload data.
 */
export const updateJuice = async (id: string, formData: IJuiceForm) => {
  const req = await fetch(`http://localhost:3000/juices/${id}`, {
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
 * Function to delete a juice from the server.
 * @param id string - ID of the juice to delete.
 * @returns Object containing status, message, and payload data.
 */
export const deleteJuice = async (id: string) => {
  const req = await fetch(`http://localhost:3000/juices/${id}`, {
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
