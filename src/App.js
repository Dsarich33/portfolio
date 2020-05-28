import React from 'react';
import Projects from './components/Projects';
import About from './components/About';
import MobileSideNav from './components/MobileSideNav';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import M from 'materialize-css/dist/js/materialize.min.js';

import './styles/app.css';

const theme = createMuiTheme();
const rtheme = responsiveFontSizes(theme);

class App extends React.Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }
    render() {
        return (
            <>
                <ThemeProvider theme={rtheme}>
                    <Router>
                        <Switch>
                            <Route exact path='/'>
                                <MobileSideNav />
                                <Home />
                            </Route>
                            <Route path='/projects'>
                                <MobileSideNav />
                                <Projects />
                            </Route>
                            <Route path='/about'>
                                <MobileSideNav />
                                <About />
                            </Route>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </>
        );
    }
}

export default App;
