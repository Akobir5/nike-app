import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('/img/blue.png');

  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav'>
          <div className="logo">
          <svg className="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
          </div>

          <div className="navBlock">
            <button className='busket'>
            <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path><path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path></svg>
            </button>
            <button className='humburger'>
            <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"></path></svg>
            </button>
          </div>
        </nav>

        <div className="sneakerMain">
          <img className='sneakerPhoto' src={color} alt="" />
        </div>

        <div className="footer">
          <div className="info">
            <div>
              <span className='line'><span className='blackLine'></span></span>
              <div className='btns'>
              <button className='btnCircle blue' onClick={() => setColor('/img/blue.png')}></button>
              <button className='btnCircle black' onClick={() => setColor('/img/black.png')}></button>
              <button className='btnCircle white' onClick={() => setColor('/img/white.png')}></button>
              <button className='btnCircle green' onClick={() => setColor('/img/green.png')}></button>
              </div>
            </div>
            <div>
            <span className='line'><span className='blackLine'></span></span>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            </div>
            <div>
            <span className='line'><span className='blackLine'></span></span>
            <div>
              <h1>$299.00</h1>
            </div>
            </div>
          </div>
          <div className="buyBlock">
          <span className='line'><span className='blackLine'></span></span>
          <div>
          <h2>Mix n Match</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum beatae saepe quae veniam perspiciatis?</p>
          <button className="buyBtn">BUY NOW</button>
          </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
