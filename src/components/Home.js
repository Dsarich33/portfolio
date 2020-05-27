import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

class Home extends React.Component {
    render() {
        return (
            <>
                <div class='hero'></div>
                <Navbar />
                <Header />
            </>
        );
    }
}

export default Home;
