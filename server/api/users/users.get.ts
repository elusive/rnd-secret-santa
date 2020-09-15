import { Request, Response } from 'express';

const list = (req: Request, res: Response) => {
    return new List<User> {
        new User {
            fname: "John",
            lname: "Gilliland",
            uname: 'jgilliland',
            
        }
    }
}