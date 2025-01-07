import './App.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


function NavitgationBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() =>{
    const handleResize = () =>{
      if (window.innerWidth < 768 ) {
        setIsHidden(true);
      } else{
        setIsHidden(false);
        setClicked(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleActive = () => {
    setClicked(!clicked);
  };


  console.log("isHidden:", isHidden, "clicked:", clicked);
  return (
    <>
      <nav className="navBar">
        <p>Vi<span className="logoSpan">Te</span></p>
        
        <div className={`navItem ${isHidden ? 'hidden' : ''}`}>
          <Link to="/">Counter</Link>
          <Link to="/blank">Blank Page</Link>
          <Link to="/about">About This Page</Link>
        </div>

        {/* Mobile Menu */}
        <div className={`hamburgerMenu ${isHidden ? '' : 'hidden'}`}>
          <a onClick={toggleActive}>
            <img src="/hamburgerMenu.svg" alt="Menu" />
          </a>
          <div className={`dropdownMenu`} style={{ display: clicked ? 'flex' : 'none' }}>
            <Link to="/">Counter</Link>
            <Link to="/blank">Blank Page</Link>
            <Link to="/about">About This Page</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavitgationBar;
