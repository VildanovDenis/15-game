import rotate from 'matrix-rotate';

export const direction = {
    up: 'UP',
    down: 'DOWN',
    left: 'LEFT',
    right: 'RIGHT'
};

export const moveCells = (cells, moveDirection) => {
    // Создает матрицу 4х4 заполненную пустыми объектами;
    const matrix = Array.from(
        new Array(4), () => Array.from(new Array(4), () => new Object)
    );

    cells.forEach(cell => {
        matrix[cell.y][cell.x] = cell;
    })

    rotateMatrixForward(matrix, moveDirection);
    printMatrix(matrix);

    for (let y = 0; y < 4; y++) {
        const isMooved = false;

        for (let x = 0; x < 4; x++) {
            if (matrix[y][x].value != '') { continue }
            else {
                // Текущая ячейка с пустым значением.
                swapCells(matrix[y+1][x], matrix[y][x]);
                isMooved = true;
                break;
            }
        }

        if (isMooved) { 
            isMooved = false; 
            break 
        };
    }

    printMatrix(matrix);
    rotateMatrixBack(matrix, moveDirection);

    const newCells = [...matrix[0], ...matrix[1], ...matrix[2], ...matrix[3]];

    return newCells;
};


function rotateMatrixForward(matrix, moveDirection) {
    switch(moveDirection) {
        case direction.up: {
            break
        };
        case direction.down: {
            rotate(matrix);
            rotate(matrix);
            break
        }
        case direction.left: {
            rotate(matrix);
            break
        }
        case direction.right: {
            rotate(matrix);
            rotate(matrix);
            rotate(matrix);
            break;
        }
        default: { break }
    }
};

function rotateMatrixBack(matrix, moveDirection) {
    switch(moveDirection) {
        case direction.up: {
            break
        };
        case direction.down: {
            rotate(matrix);
            rotate(matrix);
            break
        }
        case direction.right: {
            rotate(matrix);
            break
        }
        case direction.left: {
            rotate(matrix);
            rotate(matrix);
            rotate(matrix);
            break;
        }
        default: { break }
    }
};

function swapCells(prevCell, curCell) {
    const prevCellY = prevCell.y;
    const prevCellId = prevCell.id;
    const prevCellValue = prevCell.value;

    prevCell.y = curCell.y;
    prevCell.id = curCell.id;
    prevCell.value = curCell.value;

    curCell.y = prevCellY;
    curCell.id = prevCellId;
    curCell.value = prevCellValue;
}

function printMatrix(matrix) {
    let printString = '[\n'
  
    Array.from(new Array(4), (x, i) => i).forEach(colNum => {
      printString += '  '
      printString += Array.from(new Array(4), (x, i) => i)
        .map(rowNum => JSON.stringify(matrix[colNum][rowNum]).padStart(40, ' '))
        .join(', ')
      printString += ',\n'
    })
  
    printString += ']'
    console.log(printString)
  }