//Importing all the modules 
import React from 'react';
import '../styles/main.css'
import logo from '../../assets/logo.png'


function App() {
  return (
    <div className="App">
      <div className='Title_bar'>
        <div className='Logo'>
            <img className='logo_image' src={logo} width={50} height={50}/>
            <div className='logo_text'>Thirdweel</div>
        </div>
        <div className='Links'>
            <div className='home'>Home</div>
            <div className='about_us'>About Us</div>
            <div className='hiring'>Hiring</div>
            <div className='contact_us'>Contact Us</div>

        </div>
      </div>

    </div>
  );
}

export default App;
