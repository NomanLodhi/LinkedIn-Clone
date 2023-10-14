import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Firstsection from './Firstsection';
import Middlesection from './Middlesection';
import Secondsection from './Secondsection';

function App() {
  return (
<>
<Navbar/>
<div className="container d-flex">
  <Firstsection/>
  <Middlesection/>
  <Secondsection/>
</div>
</>
  );
}

export default App;
