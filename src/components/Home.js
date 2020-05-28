import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

class Home extends React.Component {
    render() {
        return (
            <>
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                    #root {
                        background-image: linear-gradient(#212121dd, #212121dd), url(/images/hero.jpg);
                        background-size: cover;
                        position: absolute;
                        height: 100%;
                        width: 100%;
                    }
                `,
                    }}
                ></style>
                <Navbar />
                <Header />
            </>
        );
    }
}

export default Home;
