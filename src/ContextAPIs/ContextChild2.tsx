

import {FC, useContext} from 'react';
import { DataShare } from './DataShare';
import {ContextData} from './DataShare';



const ContextChild2 :FC = () =>  {

   const context = useContext<ContextData | undefined>(DataShare)
   const data = context?.data


    return (<div>
           Child2  {data && typeof data === 'object' && Object.keys(data).length > 0 ? JSON.stringify(data) : String(data)}
    </div>)
}

export default ContextChild2;
