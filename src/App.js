// import logo from './logo.svg';
 
import './App.css';
import CardItem from './components/CardItem';
import Discover from './components/Discover';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
       <Navbar />
    <CardItem />
    <Discover />
    </div>
  );
}

export default App;
