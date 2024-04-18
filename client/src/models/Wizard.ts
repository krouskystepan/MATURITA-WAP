import type { IWizardForm } from "@/types";

/**
 * Function to fetch all wizards from the server.
 * @returns Object containing status, message, and payload data.
 */
export const getAllWizards = async () => {
  const req = await fetch("http://localhost:3000/wizards", {
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
 * Function to fetch a wizard by their ID from the server.
 * @param id string - ID of the wizard to fetch.
 * @returns Object containing status, message, and payload data.
 */
export const getWizardById = async (id: string) => {
  const req = await fetch(`http://localhost:3000/wizards/${id}`, {
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
 * Function to create a new wizard on the server.
 * @param formData IWizardForm - Form data for the new wizard.
 * @returns Object containing status, message, and payload data.
 */
export const createWizard = async (formData: IWizardForm) => {
  const req = await fetch(`http://localhost:3000/wizards`, {
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
 * Function to update an existing wizard on the server.
 * @param id string - ID of the wizard to update.
 * @param formData IWizardForm - Form data for the updated wizard.
 * @returns Object containing status, message, and payload data.
 */
export const updateWizard = async (id: string, formData: IWizardForm) => {
  const req = await fetch(`http://localhost:3000/wizards/${id}`, {
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
 * Function to delete a wizard from the server.
 * @param id string - ID of the wizard to delete.
 * @returns Object containing status, message, and payload data.
 */
export const deleteWizard = async (id: string) => {
  const req = await fetch(`http://localhost:3000/wizards/${id}`, {
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
