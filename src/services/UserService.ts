import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid';

class UserService {
    private users: User[] = [];

    constructor() {
        // Initialize with 10 default users
        for (let i = 1; i <= 10; i++) {
            this.users.push({
                id: uuidv4(),
                email: `user${i}@example.com`,
                firstName: `FirstName${i}`,
                lastName: `LastName${i}`
            });
        }
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    addUser(user: Omit<User, 'id'>): User {
        const newUser: User = { id: uuidv4(), ...user };
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: string, updatedUser: Partial<Omit<User, 'id'>>): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return undefined;

        this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
        return this.users[userIndex];
    }

    deleteUser(id: string): boolean {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return false;

        this.users.splice(userIndex, 1);
        return true;
    }
}

export default new UserService();