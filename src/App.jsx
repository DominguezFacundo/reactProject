import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer className="main-title" greeting="Welcome to the kuro market"/>
    </div>
  );
}

export default App;
