import React from 'react';
import './App.css';
import { Flowers } from './shared/components/flowers/Flower.component';
import { Menu } from './shared/components/menu/Menu.component';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HumanBodyComponent } from './shared/components/human-body/human-body.component';
function App() {
    return (
        <div>
            <HumanBodyComponent />

            <Router>
                <Switch>
                    <Route path="/about">
                        <Flowers />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
