import type { ICameramanForm } from "@/types";

/**
 * Function to fetch all cameramans from the server.
 * @returns Object containing status, message, and payload data.
 */
export const getAllCameramans = async () => {
  const req = await fetch("http://localhost:3000/cameramans", {
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
 * Function to fetch a cameraman by their ID from the server.
 * @param id string - ID of the cameraman to fetch.
 * @returns Object containing status, message, and payload data.
 */
export const getCameramanById = async (id: string) => {
  const req = await fetch(`http://localhost:3000/cameramans/${id}`, {
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
 * Function to create a new cameraman on the server.
 * @param formData ICameramanForm - Form data for the new cameraman.
 * @returns Object containing status, message, and payload data.
 */
export const createCameraman = async (formData: ICameramanForm) => {
  const req = await fetch(`http://localhost:3000/cameramans`, {
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
 * Function to update an existing cameraman on the server.
 * @param id string - ID of the cameraman to update.
 * @param formData ICameramanForm - Form data for the updated cameraman.
 * @returns Object containing status, message, and payload data.
 */
export const updateCameraman = async (id: string, formData: ICameramanForm) => {
  const req = await fetch(`http://localhost:3000/cameramans/${id}`, {
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
 * Function to delete a cameraman from the server.
 * @param id string - ID of the cameraman to delete.
 * @returns Object containing status, message, and payload data.
 */
export const deleteCameraman = async (id: string) => {
  const req = await fetch(`http://localhost:3000/cameramans/${id}`, {
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
