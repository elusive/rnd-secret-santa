import * as React from 'react';
import Assignment from './pages/assignment';
import SignInSide from './pages/sign-up';
import {
    AppContext,
    DefaultAppContextValue,
} from './model/AppContext';
import './App.css';

interface IProps {}

const App: React.FC<IProps> = (props) => {
    const [state, setState] = React.useState(
        DefaultAppContextValue.state,
    );

    return (
        <AppContext.Provider value={{ state, setState }}>
            {state.isKnownUser ? <Assignment /> : <SignInSide />}
        </AppContext.Provider>
    );
};

export default App;
