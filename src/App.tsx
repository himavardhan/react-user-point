import React, { useState } from 'react';
import { AppThemeContext } from './AppTheme';
import { Login } from './Login';
import Helper from './helper';
import { BookingForm } from './bookingForm';
import  AppModel  from './Components/appModel';
import ProdcutSearch from './Components/productSearch';
import MatForm from './Components/materialForm';
import DataShareApi from './ContextAPIs/DataShare';
import ContextParent from './ContextAPIs/ContextParent';
import ContextChild1 from './ContextAPIs/ContextChild1';
import ContextChild2 from './ContextAPIs/ContextChild2';


function App() {
   const { theme, setTheme } = React.useContext(AppThemeContext);
  const [openModel,setOpenModel] = useState(false);
   var x=20;
   var x=30;
   x=40;
   if(true){
    var x=50;
   }
    console.log(x);

  
  const  handleClose = () => {
      setOpenModel(false);
  }
  return (
    <div className="App">
      {/* <label htmlFor="light">
        <input type="radio" id="light" name='theme' value='light' checked = {theme === "light"} onChange={() => setTheme("light")} />
        light theme</label>

     <label htmlFor="dark">
        <input type="radio" id="dark" name='theme' value='dark' checked = {theme === "dark"} onChange={() => setTheme("dark")} />
        Dark Theme</label>

        <div> selected Theme:{theme}</div>
        <Home></Home> 
        <Login></Login>
        <Helper></Helper> */}

        {/* <BookingForm></BookingForm> */}

        
          {/* <AppModel open={openModel} close={() => handleClose()} />

            <button onClick= {() => { console.log('click the button'); setOpenModel((pre) => !pre)}} >Open</button>
            
           <ProdcutSearch />}
           {/* <MatForm></MatForm> */}

          {/* Context API */}
          <DataShareApi>
            <ContextParent></ContextParent>
            <ContextChild1></ContextChild1>
            <ContextChild2></ContextChild2>
          </DataShareApi>


    </div>
  );
}

export default App;
