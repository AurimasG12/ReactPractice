import * as React from 'react';
import { Component } from 'react';

import { Link, BrowserRouter as Router } from 'react-router-dom';
export class Menu extends Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                {' '}
                <a href="/about">about</a>
            </div>
        );
    }
}
