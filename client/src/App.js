import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Container } from 'reactstrap';
import {Home, Login, Signup, CityTrack, Sym} from './pages'
import {NavBar, ProtectedRoute} from './components'



function App() {
  return (
    <div>
      <NavBar/>
      <Container>
      <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/CityTrack" component={CityTrack} exact />
          </Switch>
      <Route path='/login' component={Login} exact/>
      <Route path="/signup" component={Signup} exact />
      <Route path="/symptomes" component={Sym} exact />
      </Container>
    </div>
  );
}

export default App;
