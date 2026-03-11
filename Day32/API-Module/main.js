import { fetchUsers, createUser, fetchUserById } from "./api.js";

// get users
fetchUsers()
  .then(users => {
    console.log("Users:", users);
  })
  .catch(error => console.error(error));

// create a new user
createUser({ id: 4, name: "David" })
  .then(user => {
    console.log("User created:", user);
  })
  .catch(error => console.error(error));

// get user by id
fetchUserById(1)
.then(result => console.log("User with id 1:", result))