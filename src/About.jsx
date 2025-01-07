import React from 'react'
import './App.css'

function About() {
  return (
      <div>
        <h1>About</h1>
        <p>Jadi ini adalah website ke berapa ku ga tau menggunakan react vite, ternyata react itu.. Gitulah</p>
        <p>A person who make this :</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/regaryys/" target="_blank"><img src="/instagram.svg"/></a>
          <a href="https://github.com/Regarys" target="_blank"><img src="/github.svg"/></a> 
        </div>
      </div>
  );
}

export default About;
