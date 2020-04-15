import React from 'react';
import Home from './components/Home';
import Resume from './components/Resume';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
