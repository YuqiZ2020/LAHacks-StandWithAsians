import './App.css';
import Navbar from "./Components/Navbar.js"

function App() {
  return (
    <div className="App">
      <div className='title'>
        title
      </div>


      <div className='content'>
      <Navbar />
      </div>
      
      <div className='footer'>
        © LA Hacks 2021
      </div>
    </div>
  );
}

export default App;
