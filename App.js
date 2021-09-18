// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Donation from "./components/Donation";
import Aboutus from "./components/Aboutus";
import Main from "./components/Main";
import Campaigns from './components/Campaigns';
import Faqs from './components/Faqs';

function App() {

  return (
      <Router>
      <div className = "App">
        <Route path="/" exact component={Main} />
        <Route path="/about" component={Aboutus} />
        <Route path="/donation" component={Donation} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/faqs" component={Faqs} />
      </div>
      </Router>
  );
}

export default App;