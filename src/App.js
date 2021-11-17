import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import CreateForm from './CreateForm';
import store from './store';
import { Provider as UseChangeProvider } from 'use-change';
import ViewForm from './ViewForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <UseChangeProvider value={store}>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <CreateForm/>
          </Route>
          <Route path="/viewForm">
            <ViewForm/>
          </Route>
        </Switch>
      </div>
    </div>
    </UseChangeProvider>
    </Router>
  );
}

export default App;
