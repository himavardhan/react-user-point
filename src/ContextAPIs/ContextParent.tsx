import {FC, useContext} from 'react';
import { ContextData, DataShare } from './DataShare';





const ContextParent :FC = () =>  {

   const { data, updateData } = useContext(DataShare) as ContextData;

    const handleChange = (e:any) => {

        const {name,value} = e.target;
        console.log(name, ' === ', value);
        updateData({...data,[name]:value});

    }

    return (<div>

           <input type='text' name='name' placeholder='name' onChange={(e)=>handleChange(e)} ></input>
           <input type='text' name='dob' placeholder='DOB' onChange={(e)=>handleChange(e)} ></input>
           <input type='text' name='age' placeholder='Age' onChange={(e)=>handleChange(e)} ></input>
    </div>)
}

export default ContextParent;