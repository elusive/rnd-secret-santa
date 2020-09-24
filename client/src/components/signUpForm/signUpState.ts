export type State = {
    fname: string;
    lname: string;
    uname: string;
    isButtonDisabled: boolean;
    helpText: string;
    isError: boolean;
};

export const initialState = {
    fname: '',
    lname: '',
    uname: '',
    isButtonDisabled: true,
    helpText: '',
    isError: false,
};

export enum ActionEnum {
    SetFirstName = 'SetFirstName',
    SetLastName = 'SetLastName',
    SetUserName = 'SetUserName',
    SignUpSuccess = 'SignUpSuccess',
    SignUpFailure = 'SignUpFailure',
    SetIsError = 'SetIsError',
    SetIsButtonDisabled = 'SetIsButtonDisabled',
}

export type Action =
    | { type: ActionEnum.SetFirstName; payload: string }
    | { type: ActionEnum.SetLastName; payload: string }
    | { type: ActionEnum.SetUserName; payload: string }
    | { type: ActionEnum.SignUpSuccess; payload: string }
    | { type: ActionEnum.SignUpFailure; payload: string }
    | { type: ActionEnum.SetIsError; payload: boolean }
    | { type: ActionEnum.SetIsButtonDisabled; payload: boolean };

export const reducer = (
    signUpState: State,
    action: Action,
): State => {
    switch (action.type) {
        case ActionEnum.SetFirstName:
            return {
                ...signUpState,
                fname: action.payload,
            };
        case ActionEnum.SetLastName:
            return {
                ...signUpState,
                lname: action.payload,
            };
        case ActionEnum.SetUserName:
            return {
                ...signUpState,
                uname: action.payload,
            };
        case ActionEnum.SetIsButtonDisabled:
            return {
                ...signUpState,
                isButtonDisabled: action.payload,
            };
        case ActionEnum.SignUpSuccess:
            return {
                ...signUpState,
                helpText: action.payload,
                isError: false,
            };
        case ActionEnum.SignUpFailure:
            return {
                ...signUpState,
                helpText: action.payload,
                isError: true,
            };
        case ActionEnum.SetIsError:
            return {
                ...signUpState,
                isError: action.payload,
            };
    }
};
