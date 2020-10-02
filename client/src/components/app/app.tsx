import * as React from 'react';
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
            <SignInSide />
        </AppContext.Provider>
    );
};

export default App;
