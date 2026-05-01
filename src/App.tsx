import React from 'react';
import { AppThemeContext } from './AppTheme';
import { Login } from './Login';
import Helper from './helper';

function App() {
   const { theme, setTheme } = React.useContext(AppThemeContext);
   
   var x=20;
   var x=30;
   x=40;
   if(true){
    var x=50;
   }
    console.log(x);
  return (
    <div className="App">
      <label htmlFor="light">
        <input type="radio" id="light" name='theme' value='light' checked = {theme === "light"} onChange={() => setTheme("light")} />
        light theme</label>

     <label htmlFor="dark">
        <input type="radio" id="dark" name='theme' value='dark' checked = {theme === "dark"} onChange={() => setTheme("dark")} />
        Dark Theme</label>

        <div> selected Theme:{theme}</div>
        {/* <Home></Home> */}
        <Login></Login>
        <Helper></Helper>
    </div>
  );
}

export default App;
