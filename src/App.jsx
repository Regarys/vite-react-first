import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './NavigationBar.jsx'
import BlankPage from './BlankPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About.jsx'
import IncreamentChoose from './IncreamentChoose.jsx'

function App() {
  const [count, setCountValue] = useState(0)
  const [step, setStep ] = useState(1)  

  const tambahCount = () => {
    setCountValue((prevCount)=> prevCount + step); 
  }

  const kurangCount = () =>{
    if (count <=0 ){
      alert('It cant be less than zero');
      return;
    }
    setCountValue((prevCount)=> prevCount - step);
  }

  const resetCount = () =>{
    setCountValue(0)
  }
  return (
    <>
      <Router>
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={
            <div>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <h3>Count : {count} </h3>
                <p>Current Counter : {step}</p>
                <IncreamentChoose setStep={setStep}></IncreamentChoose>
                <br/>
              <button onClick={tambahCount}>Count Increase</button>
              <br />
              <button onClick={kurangCount}>Count Decrease</button>
                <br />
                <button onClick={resetCount}>Reset</button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            </div>
          }/>
          <Route path="/blank" element={<BlankPage></BlankPage>}/>
          <Route path="/about" element={<About></About>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
