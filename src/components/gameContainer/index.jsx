import React from 'react';
import styled from 'styled-components';

import GameBgComponents from '../gameBgComponent/index.jsx';
import GamePlaygroundComponent from '../gamePlaygroundComponent/index.jsx';

import { moveCells } from '../../logic/moveCells.js';
import { randomCells } from '../../logic/randomCells.js';

import { initialCells } from '../../gameData/index.js';

const StyledWrapper = styled.section`
    height: 475px;
    position: relative;
    width: 475px;
`;

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: []
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    handleKeyPress(event) {
        const { cells } = this.state;
        const newCells = moveCells(cells, 'LEFT');

        this.setState({
            cells: newCells
        })
    }

    componentDidMount() {
        const newCells = randomCells(initialCells);
        this.setState({
            cells: newCells
        });

        document.addEventListener('keypress', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
    }

    render() {
        const { cells } = this.state;

        return (
            <StyledWrapper>
                <GameBgComponents />
                <GamePlaygroundComponent cells={cells}/>
            </StyledWrapper>
        )
    }
}

export default GameContainer;