import * as React from 'react';
import Assignment from '../../pages/assignment';
import SignInSide from '../../pages/sign-up';
import {
    AppContext,
    DefaultAppContextValue,
} from '../../model/AppContext';
import './app.css';

interface IProps {}

const App: React.FC<IProps> = (props) => {
    const [appState, setAppState] = React.useState(
        DefaultAppContextValue.appState,
    );

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {appState.isKnownUser ? <Assignment /> : <SignInSide />}
        </AppContext.Provider>
    );
};

export default App;
