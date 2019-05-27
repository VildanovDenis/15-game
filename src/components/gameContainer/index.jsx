import React from 'react';
import styled from 'styled-components';

import GameBgComponents from '../gameBgComponent/index.jsx';
import GamePlaygroundComponent from '../gamePlaygroundComponent/index.jsx';

import initialCells from '../../GameData/index.js';

const StyledWrapper = styled.section`
    height: 475px;
    position: relative;
    width: 475px;
`;

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getNewState();
    }

    getNewState() {
        return {
            cells: initialCells
        }
    }

    handleKeyPress(event) {
        console.log(event.code);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
    }

    render() {
        return (
            <StyledWrapper>
                <GameBgComponents />
                <GamePlaygroundComponent cells={initialCells}/>
            </StyledWrapper>
        )
    }
}

export default GameContainer;