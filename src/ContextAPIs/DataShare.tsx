import {FC, ReactNode, createContext, useState} from 'react';

type userData = {
    name:string,
    dob:string,
    age:number
}

export type ContextData = {
    data: userData | {},
    updateData:(data:any) => void
}

export const DataShare = createContext<ContextData | undefined >(undefined);


const DataShareApi = ({children}:{children : ReactNode}) => {

    const [data,setData] = useState<userData | {}>({});

    const updateData = (data:any) => {
         setData(data);
    }

    return (<DataShare.Provider value={{data,updateData}}>
        {children}
    </DataShare.Provider>)
} 


export default DataShareApi;

