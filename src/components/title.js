import React, { Component } from 'react';
import Layout from './layout'
import Footer from './footer'


class Title extends Component {

  render() {
    return (
      <div>
          <Footer />
        <h5>title  {this.props.title}</h5>
        </div>
    );
  }
}

export default Title;
