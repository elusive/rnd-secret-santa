import * as React from 'react';
import Assignment from './pages/assignment';
import SignInSide from './pages/sign-up';
import {
    SantaContext,
    DefaultSantaContextValue,
} from './model/SantaContext';
import './App.css';

interface IProps {}

const App: React.FC<IProps> = (props) => {
    const [state, setState] = React.useState(
        DefaultSantaContextValue.state,
    );

    return (
        <SantaContext.Provider value={{ state, setState }}>
            {state.isKnownUser ? <Assignment /> : <SignInSide />}
        </SantaContext.Provider>
    );
};

export default App;
