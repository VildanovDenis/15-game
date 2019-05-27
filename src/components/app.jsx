import React from 'react';

import GameContainer from './gameContainer/index.jsx';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GameContainer />
            </React.Fragment>
        )
    }
}