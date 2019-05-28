import React from 'react';
import styled from 'styled-components';

import GameBgComponents from '../gameBgComponent/index.jsx';
import GamePlaygroundComponent from '../gamePlaygroundComponent/index.jsx';

import { moveCells } from '../../logic/moveCells.js';

import initialCells from '../../gameData/index.js';

const StyledWrapper = styled.section`
    height: 475px;
    position: relative;
    width: 475px;
`;

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: initialCells
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    handleKeyPress(event) {
        const newCells = moveCells(this.state.cells, 'UP');
        this.setState({
            cells: newCells
        })
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
                <GamePlaygroundComponent cells={this.state.cells}/>
            </StyledWrapper>
        )
    }
}

export default GameContainer;