import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'


class Layout extends Component {
    constructor() {
        super()
        this.state = {
            // name: 'Will',
            title: 'okokokookokokok'

        };
    }

    

    changeTitle(title) {

        this.setState({
            //   name : 'HArry',
            title
            })
        // this.setState({ title: 'Welcome all'})
    }

    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} />
            </div>
        );
    }
}

export default Layout;
