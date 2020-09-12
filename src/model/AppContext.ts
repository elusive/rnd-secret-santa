import React from 'react';
import { IAppState, DefaultAppState } from './AppState';

export const DefaultAppContextValue = {
    state: DefaultAppState,
    setState: (value: IAppState) => {},
};

export const AppContext = React.createContext(DefaultAppContextValue);
