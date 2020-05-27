import React from 'react';
import { Keyframes } from 'react-spring/renderprops';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function ToResume() {
    const Content = Keyframes.Spring(async (next) => {
        // None of this will cause React to render, the component renders only once :-)

        while (true) {
            await next({
                from: { marginTop: 0 },
                opacity: 1,
                marginTop: 10,
                config: { mass: 1, tension: 170, friction: 26 },
            });
            await next({
                from: { marginTop: 10 },
                marginTop: 0,
                config: { mass: 1, tension: 170, friction: 26 },
            });
        }
    });

    return (
        <div className='downwardArrow'>
            <Content>
                {(props) => {
                    return (
                        <>
                            <ArrowDownwardIcon fontSize='inherit' style={props} />
                        </>
                    );
                }}
            </Content>
        </div>
    );
}

export default ToResume;
