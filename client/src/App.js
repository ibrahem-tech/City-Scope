import React from 'react';
import {Route} from 'react-router-dom';
import { Container } from 'reactstrap';
import {Home, Login, Signup} from './pages'
import {NavBar} from './components'


function App() {
  return (
    <div>
      <NavBar/>
      <Container>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} exact/>
      <Route path="/signup" component={Signup} exact />
      </Container>
    </div>
  );
}

export default App;
