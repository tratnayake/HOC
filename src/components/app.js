import React, { Component } from 'react';

import Header from './header';

export default class App extends Component {
  render() {
    //Always display the header ontop of the rendered child content.
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
