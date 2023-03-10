import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import Fooddetails from './Components/Fooddetails'
import Availablefood from './Components/Availablefood';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Orders from './Components/Orders';
import Footer from './Components/Footer';
import Foodcard from './Components/Foodcard';
import History from './Components/History';
import LR from './Components/LR';

function App() {
  return (
    <div className="App">
      
     <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/fd/:id' element={<Fooddetails/>}/>
        <Route exact path='/afd' element={<Availablefood/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
        <Route exact path='/footer' element={<Footer/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/LR' element={<LR/>}/>
      </Routes>
     </Router>
 

    </div>
  );
}

export default App;
