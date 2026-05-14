import { FC, Fragment, useMemo, useState } from 'react';

const ProdcutSearch:FC = () =>{
    const [inputValue,setInputValue] = useState('');
    const itemList = [
        {
            id:'1',
            name:'Iphone10',
            year:'2017'
        },
        {
            id:'2',
            name:'Iphone10 X',
            year:'2017'
        },
         {
            id:'3',
            name:'Iphone12',
            year:'2019'
        },
        {
            id:'4',
            name:'Iphone12 pro',
            year:'2019'
        }

    ]

    const filterItems = useMemo(()=> {
        const resultItems = itemList.filter((item) => Object.values(item).some(value => value.toLowerCase().includes(inputValue.toLowerCase())));
        return resultItems;
    }, [inputValue]);


    const handleChange = (event:any) => {
        const { value, name  } = event.target;
        setInputValue(value);
        console.log(value, name);
    }

    return (<Fragment>
      
      {/* <label htmlFor='product-search'> Product List </label> */}
      <input aria-label='Product List' type='text' id='product-search' onChange={(event)=> {handleChange(event)}}/>
       
       {
        filterItems.length > 0 && filterItems.map((item)=>{
            return <div key={item.id}>{item.name} : {item.year}</div>
        })
       }


    </Fragment>);

}

export default ProdcutSearch;


