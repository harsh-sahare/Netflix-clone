import React, { useEffect, useState } from "react";
import netflix_logo from "../Img/netflix_logo.png";
import side_logo from "../Img/side_logo.png";


export default function Navbar() {
  const [chaneNav,set_changeNav] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
    window.scrollY >= 100 ? set_changeNav(true) : set_changeNav(false)
  })},[])

  return (
      <div className={`nav ${chaneNav === true ? 'nav-dark' : '' }`}>
        <img src={netflix_logo} alt="Neflix logo" className="logo"></img>;
        <img src={side_logo} alt="Side logo" className="side-logo"></img>;
      </div>
  );
}
