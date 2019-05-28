import React from 'react';
import styled from 'styled-components';

import {StyledBgCell, StyledBg} from '../gameBgComponent/index.jsx';

const StyledPlayground = styled(StyledBg)`
    background-color: transparent;
`;

const StyledCell = styled(StyledBgCell)`
    transform: translate(${({ x }) => x * 113.5}px, ${({ y }) => y * 113.5}px);
    text-align: center;
    line-height: 100px;
    background-color: ${({value}) => calcCellBg(value)};
    position: absolute;
    transition-property: transform;
    transition: 100ms ease-in-out;
    color: #6a4e4e;
    font-weight: 700;
    font-size: 66px;
    font-family: 'Roboto', sans-serif;
`;

const calcCellBg = value => {
    if (value === '') {
        return 'transparent'
    } else { return 'rgba(238, 228, 218, 0.9)'}
}

class GamePlaygroundComponent extends React.Component {
    render() {
        const {cells} = this.props;
        return (
            <StyledPlayground>
                {cells.map(({x, y, value, id}) => (
                    <StyledCell key={id} x={x} y={y} value={value}>
                        {value}
                    </StyledCell>
                ))}
            </StyledPlayground>
        )
    }
}

export default GamePlaygroundComponent;