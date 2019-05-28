import rotate from 'matrix-rotate';

export const direction = {
    up: 'UP',
    down: 'DOWN',
    left: 'LEFT',
    right: 'RIGHT'
}


export const moveCells = (cells, moveDirection) => {
    // Создает матрицу 4х4 заполненную пустыми объектами;
    const matrix = Array.from(
        new Array(4), () => Array.from(new Array(4), () => new Object)
    );

    cells.forEach(cell => {
        matrix[cell.y][cell.x] = cell;
    })

    rotate(matrix);
    console.log(matrix);

    // for (let y = 0; y < 4; y++) {
    //     const isMooved = false;

    //     for (let x = 0; x < 4; x++) {
    //         if (matrix[y][x].value != '') { continue }
    //         else {
    //             const cellValue = matrix[y+1][x];
    //             matrix[y+1][x] = matrix[y][x] ;
    //             matrix[y][x] = cellValue;
    //             isMooved = true;
    //             break;
    //         }
    //     }

    //     if (isMooved) { 
    //         isMooved = false; 
    //         break 
    //     };
    // }

    const newCells = [...matrix[0], ...matrix[1], ...matrix[2], ...matrix[3]];

    return newCells;
}


function moveCell(moveDirection, x, y) {
    switch (moveDirection) {
        case direction.up: {
            if (y === 0) { break }
            else {
                
            }
        }
    }
}