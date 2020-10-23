import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

export type InitialStateType = {
    search: string
    region: string | undefined
    currency: string | undefined
    language: string | undefined
};

const initialState: InitialStateType = {
    search: '',
    region: '',
    currency: '',
    language: ''
}

export type AppContextType = {
    filters: InitialStateType
    setFilters: Dispatch<SetStateAction<InitialStateType>>
}

export const StateContext = createContext<AppContextType | null>(null);

export const StateProvider = ({children}) => {
    const [filters, setFilters] = useState(initialState);
    return (
        <StateContext.Provider value = {{ filters, setFilters }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateValue = () => useContext(StateContext);