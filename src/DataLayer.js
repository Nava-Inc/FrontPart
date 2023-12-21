import React,{createContext , useContext , useReducer} from "react";

export const DataLayerContext = createContext();
export const DataLayer = ({ initioalState, Reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(Reducer, initioalState)}>
        {children}
    </DataLayerContext.Provider>

) ;

export const useDataLayerValue = () => useContext(DataLayerContext);
