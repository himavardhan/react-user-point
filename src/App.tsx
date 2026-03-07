import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppThemeContext } from './AppTheme';
import { Home } from './Home';
import { Login } from './Login';

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
    </div>
  );
}

export default App;
