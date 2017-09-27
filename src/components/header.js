import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  //Display the appropriate button based on their authentication state.
  authButton(){
    if (this.props.authenticated){
      return <button onClick={()=>this.props.authenticate(false)}>Sign Out</button>
    }
    else{
      return <button onClick={()=>this.props.authenticate(true)}>Sign In</button>
    }

  }
  render(){
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

//Expose the state.authenticated to this component.
function mapStateToProps(state){
  return { authenticated: state.authenticated }
}

//The Header component should have access to the actions we've defined
//as well as the application state.
export default connect(mapStateToProps, actions)(Header);
