import { IUser } from './User';

export interface IAppState {
    isKnownUser?: boolean;
    currentUser: IUser | null;
}

export const DefaultAppState: IAppState = {
    isKnownUser: false,
    currentUser: null,
};
