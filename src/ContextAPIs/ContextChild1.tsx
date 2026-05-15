
import {FC, useContext} from 'react';
import { DataShare } from './DataShare';
import {ContextData} from './DataShare';

const ContextChild1 :FC = () =>  {

   const context = useContext<ContextData | undefined>(DataShare)
   const data = context?.data


    return (<div>
            Child1 {data && typeof data === 'object' && Object.keys(data).length > 0 ? JSON.stringify(data) : String(data)}
    </div>)
}

export default ContextChild1;
