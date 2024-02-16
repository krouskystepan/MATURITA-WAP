export const getAllUsers = async () => {
  const req = await fetch('http://localhost:3000/users', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  const data = await req.json()
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  }
}

export const getUserById = async (id) => {
  const req = await fetch(`http://localhost:3000/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  const data = await req.json()
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  }
}

export const createUser = async (formData) => {
  const req = await fetch(`http://localhost:3000/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(formData),
  })
  const data = await req.json()
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  }
}

export const updateUser = async (id, formData) => {
  const req = await fetch(`http://localhost:3000/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(formData),
  })
  const data = await req.json()
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  }
}

export const deleteUser = async (id) => {
  const req = await fetch(`http://localhost:3000/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
  const data = await req.json()
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload,
  }
}
