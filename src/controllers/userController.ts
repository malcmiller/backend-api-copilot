import { Request, Response } from 'express';
import userService from '../services/UserService';

class UserController {
    getAllUsers(req: Request, res: Response): void {
        res.json(userService.getAllUsers());
    }

    getUserById(req: Request, res: Response): void {
        const user = userService.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(user);
        }
    }

    addUser(req: Request, res: Response): void {
        const newUser = userService.addUser(req.body);
        res.status(201).json(newUser);
    }

    updateUser(req: Request, res: Response): void {
        const updatedUser = userService.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(updatedUser);
        }
    }

    deleteUser(req: Request, res: Response): void {
        const success = userService.deleteUser(req.params.id);
        if (!success) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(204).send();
        }
    }
}

export default new UserController();