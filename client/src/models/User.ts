import type { IUserForm } from "@/types";

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
