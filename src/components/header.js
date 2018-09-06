import React, { Component } from 'react';
import Layout from './layout'
import Footer from './footer'
import Title from './title'


class Header extends Component {

handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title)
}


  render() {
      this.props.changeTitle('newTitle');
    return (
      <div>
          <Title title={this.props.title} />
          <input onChange={this.handleChange.bind(this)} />
        </div>
    );
  }
}

export default Header;
