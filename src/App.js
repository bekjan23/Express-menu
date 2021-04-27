import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Options from './Components/Options/Options';
import Services from './Components/Services/Services';
import Order from './Components/Order/Order';
import Process from './Components/Process/Process';
import Coments from './Components/Coments/Coments';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Options/>
      <Services/>
      <Order/>
      <Process/>
      <Coments/>
      <Footer/>
    </div>
  );
}

export default App;
