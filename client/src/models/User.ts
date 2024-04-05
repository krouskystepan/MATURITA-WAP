import type { IUserForm } from "@/types";

/**
 * Function to fetch all users from the server.
 * @returns Object containing status, message, and payload data.
 */
export const getAllUsers = async () => {
  const req = await fetch("http://localhost:3000/users", {
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
 * Function to fetch a user by their ID from the server.
 * @param id string - ID of the user to fetch.
 * @returns Object containing status, message, and payload data.
 */
export const getUserById = async (id: string) => {
  const req = await fetch(`http://localhost:3000/users/${id}`, {
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
 * Function to create a new user on the server.
 * @param formData IUserForm - Form data for the new user.
 * @returns Object containing status, message, and payload data.
 */
export const createUser = async (formData: IUserForm) => {
  const req = await fetch(`http://localhost:3000/users`, {
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
 * Function to update an existing user on the server.
 * @param id string - ID of the user to update.
 * @param formData IUserForm - Form data for the updated user.
 * @returns Object containing status, message, and payload data.
 */
export const updateUser = async (id: string, formData: IUserForm) => {
  const req = await fetch(`http://localhost:3000/users/${id}`, {
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
 * Function to delete a user from the server.
 * @param id string - ID of the user to delete.
 * @returns Object containing status, message, and payload data.
 */
export const deleteUser = async (id: string) => {
  const req = await fetch(`http://localhost:3000/users/${id}`, {
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
