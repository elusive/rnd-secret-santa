import React from 'react';
import { IAppState, DefaultAppState } from '../App.state';

export const DefaultSantaContextValue = {
    state: DefaultAppState,
    setState: (value: IAppState) => {},
};

export const SantaContext = React.createContext(
    DefaultSantaContextValue,
);
