/**
 * Function to fetch all data from the server.
 * @returns Object containing status, message, and payload data.
 */
export const getAllData = async () => {
  const req = await fetch("http://localhost:3000/all", {
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
