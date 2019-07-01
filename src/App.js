import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from "./Header/Header";
import Catalog from "./Catalog/Catalog";
import HaveToBuy from "./HaveToBuy/HaveToBuy";
import SourcesOfEBooks from "./SourcesOfEBooks/SourcesOfEBooks";
import Publishers from "./Publishers/Publishers";
import Footer from "./Footer/Footer";
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Catalog} />
          <Route path="/have-to-buy/" component={HaveToBuy} />
          <Route path="/sources/" component={SourcesOfEBooks} />
          <Route path="/publishers/" component={Publishers} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  console.log(match);
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}