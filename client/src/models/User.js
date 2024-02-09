export const getAllUsers = async () => {
  const req = await fetch('http://localhost:300/users', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  const data = req.json()
}

export const getUserById = async (id) => {
  const req = await fetch(`http://localhost:300/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  const data = req.json()
}

export const createUser = async (formData) => {
  const req = await fetch(`http://localhost:300/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(formData),
  })
  const data = req.json()
}

export const updateUser = async (id, formData) => {
  const req = await fetch(`http://localhost:300/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(formData),
  })
  const data = req.json()
}

export const deleteUser = async (id) => {
  const req = await fetch(`http://localhost:300/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
  const data = req.json()
}
