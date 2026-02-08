import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppThemeContext } from './AppTheme';

function App() {
   const { theme, setTheme } = React.useContext(AppThemeContext);
  return (
    <div className="App">
      <label htmlFor="light">
        <input type="radio" id="light" name='theme' value='light' checked = {theme === "light"} onChange={() => setTheme("light")} />
        light theme</label>

     <label htmlFor="dark">
        <input type="radio" id="dark" name='theme' value='dark' checked = {theme === "dark"} onChange={() => setTheme("dark")} />
        Dark Theme</label>

        <div> selected Theme:{theme}</div>
    </div>
  );
}

export default App;
