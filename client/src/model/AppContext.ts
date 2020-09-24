import React from 'react';
import { IAppState, DefaultAppState } from './AppState';

export const DefaultAppContextValue = {
    appState: DefaultAppState,
    setAppState: (value: IAppState) => {},
};

export const AppContext = React.createContext(DefaultAppContextValue);
