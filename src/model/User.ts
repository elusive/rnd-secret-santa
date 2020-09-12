export interface IUser {
    id: number;
    fname: string;
    lname: string;
    uname: string;
    password: string;
    isAssigned: boolean;
    assigneeId: number;
}
