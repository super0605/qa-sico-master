import React, { Component } from 'react';
import NavBar from './extComps/NavBar';

export default class Header extends Component {
    state = {}

    render() {
        return (
            <div>
                <NavBar {...this.props.children.props} />
                {
                    this.props.children
                }
            </div>
        )
    }

}
