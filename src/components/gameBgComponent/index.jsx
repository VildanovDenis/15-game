import React from 'react';
import styled from 'styled-components';

export const StyledBg = styled.div`
    align-content: space-between;
    background-color: #bbada0;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 450px;
    justify-content: space-between;
    padding: 5px;
    position: absolute;
    width: 450px;
`;

export const StyledBgCell = styled.div`
    margin: 5px;
    background-color: rgba(238, 228, 218, 0.35);
    height: 100px;
    width: 100px;
    border-radius: 5px;
`;

const bgCellArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
]

function GameBgComponents() {
    return (
        <StyledBg>  
            {bgCellArr.map(id => <StyledBgCell key={id} />)}
        </StyledBg>
    )
}

export default GameBgComponents;