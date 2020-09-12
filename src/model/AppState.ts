import { IUser } from './model/User';

export interface IAppState {
    isKnownUser: boolean;
    currentUser: IUser | null;
    isAssigned: boolean;
    randomNumberUsed: number;
}

export const DefaultAppState: IAppState = {
    isAssigned: false,
    isKnownUser: false,
    currentUser: null,
    randomNumberUsed: -1,
};
