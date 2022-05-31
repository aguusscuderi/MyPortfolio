
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import Index from '../src/components/Index/Index'
import Carrousel from '../src/components/Index/Carrousel'

function App() {
  return (
    <div className="App">
        <NavBar className="NavBar"/>
        <Index/>
        <Carrousel/>
    </div>
  );
}

export default App;
