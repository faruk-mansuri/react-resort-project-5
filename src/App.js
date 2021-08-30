import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/rooms'>
          <Rooms />
        </Route>
        <Route path='/room/:slug' component={SingleRoom }></Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;