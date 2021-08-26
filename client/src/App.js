import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/homepage';
import SignInUp from './pages/sign-in-up/SignInUp';
import { connect } from 'react-redux';
import Expense from './pages/expenses/Expenses';

class App extends React.Component { 

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }
  
  

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} /> 
          <Route path="/expense" component={Expense} />
          <Route path="/sign-in-up" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  
  setUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App);
