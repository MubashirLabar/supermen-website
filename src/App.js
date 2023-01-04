import {BrowserRouter, Route} from "react-router-dom"
import './css/App.scss';

/* Screen */
import Header from './component/Header'
import Footer from "./component/Footer"
import Home from './screen/Home'
import Resturants from "./screen/Resturants"
import ResturantStore from "./screen/ResturantStore"
import Checkout from "./screen/Checkout"

// Footer Pages
import About from "./Footer/About"
import FAQ from "./Footer/FAQ"
import Terms from "./Footer/Terms"

global.siteName = "My SuperMen"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/> 
        <Route exact path="/" component={Home} />
        <Route exact path="/resturants" component={Resturants} />
        <Route exact path="/resturants/:section" component={ResturantStore} />
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} /> 
        <Route exact path="/terms" component={Terms}/> 
        <Footer />    
      </BrowserRouter>  
    </div>
  );  
}
  
export default App;
