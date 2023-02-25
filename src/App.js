import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.style.setProperty('--background-color', '#222');
      document.documentElement.style.setProperty('--text-color', '#eee');
    } else {
      setTheme('light');
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#222');
    }
  }

  return (
    <div className="App">
      <div >
       <div id='header'>
        <h1>Overreacted</h1>
        <button id='but' onClick={handleThemeChange}>Toggle Me</button>
       </div>
       <div className='text'>
            <h1>The Wet Codebase</h1>
            <p>Sunday 4th 2020 11min read</p>
            <p>come waste your time with me</p>
       </div>
       <div className='text2'>
        <h1>Goodby, clean code</h1>
        <p>Sunday 4th 2020 11min read</p>
         <p>come waste your time with me</p>
       </div>
       <div className='text3'>
         <h1>My Decade in Review</h1>
         <p>Sunday 4th 2020 11min read</p>
         <p>come waste your time with me</p>
       </div>
       <div className='text4'>
            <h1>What Are The React Team Principles</h1>
            <p>Thursday 4th,2015 5 min read</p>
       </div>
    </div>
    </div>
  );
}

export default App;