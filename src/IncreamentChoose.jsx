import './App.css'

function IncreamentChoose({ setStep }) {
  const handleClick = (value) => {
    setStep(value);
  }
  return(
    <> 
      <div className="btnChoose">
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(7)}>7</button>
      </div>
    </>
  );
}

export default IncreamentChoose;
