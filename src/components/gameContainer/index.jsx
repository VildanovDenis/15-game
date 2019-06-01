import React from 'react';
import styled from 'styled-components';

import {GameBgComponents} from '../gameBgComponent';
import {GamePlaygroundComponent} from '../gamePlaygroundComponent';
 
import { moveCells } from '../../logic/moveCells';
import { randomCells } from '../../logic/randomCells';
import { setDirectionName } from '../../logic/setDirectionName';

import { initialCells } from '../../gameData/index.js';

const StyledWrapper = styled.section`
    display: flex;
    justify-content: center;
    height: 475px;
    position: relative;
    width: 475px;
    margin: 0 auto;
`;
const StyledHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 475px;
    margin: 0 auto 15px;
`;
const StyledBtn = styled.button`
    width: 200px;
    height: 50px;
    padding: 0;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: 0.5px;
    text-align: center;
    background-color: rgba(238,228,218,0.9);
    color: #6a4e4e;
    outline: 0;
`;

export class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [],
            steps : 0
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onNewGameButtonClick = this.onNewGameButtonClick.bind(this);
    }


    handleKeyPress(event) {
        const direction = setDirectionName(event.code);
        if (direction !== '') {
            const { cells } = this.state;
            const newCells = moveCells(cells, direction);

            if (Boolean(newCells)) {
                const newSteps = this.state.steps + 1;

                this.setState({
                    cells: newCells,
                    steps: newSteps
                })
            }
        };
    }

    onNewGameButtonClick() {
        const newCells = randomCells(initialCells);

        this.setState({
            cells: newCells,
            steps: 0
        });
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
        const { cells, steps } = this.state;

        return (
            <React.Fragment>
                <StyledHeaderWrapper>
                    <StyledBtn
                        type="button"
                        onClick={this.onNewGameButtonClick}
                    >
                        Новая игра
                    </StyledBtn>
                    <StyledBtn as="div">Счет: {steps}</StyledBtn>
                </StyledHeaderWrapper>
                <StyledWrapper>
                <GameBgComponents />
                <GamePlaygroundComponent cells={cells}/>
                </StyledWrapper>
            </React.Fragment>
        )
    }
}

// export default GameContainer;