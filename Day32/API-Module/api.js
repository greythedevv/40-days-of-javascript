import { users } from "./user.js";

// fetch all users
export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1500);
  });
}

// fetch a single user
export function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1500);
  });
}

// create a new user
export function createUser(newUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = users.find(u => u.id === newUser.id);

      if (exists) {
        reject("User already exists");
      } else {
        users.push(newUser);
        resolve(newUser);
      }
    }, 1500);
  });
}