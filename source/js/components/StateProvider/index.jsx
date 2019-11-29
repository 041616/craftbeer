// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
import React, { createContext, useContext, useReducer } from 'react';


export const stateContext = createContext();


export const useStateValue = () => useContext(stateContext);


export const StateProvider = ({reducer, initialState, children}) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);
