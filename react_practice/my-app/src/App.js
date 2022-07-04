import logo from './logo.svg';
import './App.css';
import Car from './Car/Car.js';

function App() {
  const divStyle = {
    'text-align':'center'
  }
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
     <Car name = {"Ford"} year={2018}> 
      <p>Color</p>
     </Car>
     <Car name = {"Audi"} year={2014}/>
     <Car name = {"Volga"} year={1990}/>
    </div>
    </>
  );


 
}

export default App;
