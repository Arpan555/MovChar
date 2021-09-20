import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./Components/Home"
import Characters from './Components/Characters';
import Movies from './Components/Movies';
import MovieDetails from "./Components/MovieDetails"
import MovieQuote from "./Components/MovieQuote"
import CharactersQuote from "./Components/CharactersQuote"
import CharactersDetails from "./Components/CharacterDetails"
import MovieFilter from "./Components/MovieFilter"
import MovieFilterEx from './Components/MovieFilterEx';
function App() {
  return (
    <div >
     <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movies" component={Movies}/>
            <Route exact path="/movies/:id" component={MovieDetails}/>
            <Route exact path="/movies/:id/quotes" component={MovieQuote}/>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/characters/:id" component={CharactersDetails}/>
            <Route exact path="/characters/:id/quotes" component={CharactersQuote}/>
            <Route exact path="/moviefilter" component={MovieFilter}/>
            <Route exact path="/moviefilterex" component={MovieFilterEx}/>
        </Switch>
     </BrowserRouter>
    </div>
  );
}
export default App;
