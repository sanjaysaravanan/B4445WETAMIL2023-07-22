const moviesUrl = 'https://64b3d5560efb99d862686c9a.mockapi.io';

// Get Users
const getUsers = async () => {
  // default method GET
  const response = await fetch(`${moviesUrl}/users`);

  const users = response.json();

  console.log(users);
}


// getUsers();


// Create user
const createUser = async (userData) => {

  const response = await fetch(
    `${moviesUrl}/users`,
    {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "batch": 'B4445WEENG'
      }
    }
  );

  const createdUser = response.json();

  console.log(createdUser);

}


createUser({
  "name": "Sanjay",
  "gender": "Male",
  "image": "https://cdn3.vectorstock.com/i/1000x1000/36/32/person-gray-photo-placeholder-man-vector-23503632.jpg",
});


const updateUser = async (userId, userData) => {

  const response = await fetch(
    `${moviesUrl}/users/${userId}`,
    {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
    }
  );

  const updateuser = response.json();

  console.log(updateuser);

}

// updateUser(1, {
//   "name": "Sam",
//   "gender": "Male",
//   "image": "https://cdn3.vectorstock.com/i/1000x1000/36/32/person-gray-photo-placeholder-man-vector-23503632.jpg",
// });


const deleteUser = async (userId) => {

  const response = await fetch(
    `${moviesUrl}/users/${userId}`,
    {
      method: 'DELETE',
    }
  );

  const deleteUser = response.json();

  console.log(deleteUser);

}

// deleteUser(1);

