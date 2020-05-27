import React from 'react';
import Projects from './components/Projects';
import About from './components/About';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/app.css';

const theme = createMuiTheme();
const rtheme = responsiveFontSizes(theme);

function App() {
    return (
        <>
            <ThemeProvider theme={rtheme}>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/projects'>
                            <Projects />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
