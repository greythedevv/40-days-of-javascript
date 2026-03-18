import { User } from "../models/user.js";

export class UserService{
    constructor() {
        this.users = new Map();
    }

    addUser(name) {
        if (!name) {
            throw new Error("user name is required");
        }

        const trimmedName = name.trim();

        if (this.users.has(trimmedName)) {
            throw new Error("user already exists");
        }

        const user = new User(trimmedName);
        this.users.set(trimmedName, user);
        return user;
    }

    getUser(name) {
        return this.users.get(name.trim());
    }

    getAllUsers() {
        return Array.from(this.users.values());
    }

    getUserNames() {
        return Array.from(this.users.keys());
    }

    hasUser(name) {
        return this.users.has(name.trim());
    }

    getUserCount() {
        return this.users.size; // ✅ fixed
    }

    deleteAUser(name) {
        this.users.delete(name.trim()); // ✅ fixed
    }

    clear() {
        this.users.clear();
    }
}