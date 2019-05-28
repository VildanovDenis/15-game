export const direction = {
    up: 'UP',
    down: 'DOWN',
    left: 'LEFT',
    right: 'RIGHT'
};

export const moveCells = (cells, moveDirection) => {
    const emptyCell = cells.find(cell => {
        if (cell.value === '') {
            return cell
        }
    });

    const x = emptyCell.x;
    const y = emptyCell.y;

    const nextCell = getNextCell(cells, x, y, moveDirection);
    const newCells = cells.filter(cell => {
        const isThereEmptyCell = (cell.value === emptyCell.value) ? true : false;
        const isThereNextCell = (cell.value === nextCell.value) ? true : false;

        if (isThereEmptyCell || isThereNextCell) {
            return false
        } else return true
    });

    emptyCell.x = nextCell.x;
    emptyCell.y = nextCell.y;

    nextCell.x = x;
    nextCell.y = y;

    return [...newCells, nextCell, emptyCell]
};

function getNextCell(cells, x, y, moveDirection) {
    switch(moveDirection) {
        case direction.up: {
            const coord = y - 1;
            const nextCell = cells.find(cell => {
                if (cell.y === coord && cell.x === x) {
                    return cell
                };
            });
            return nextCell
        };
        case direction.down: {
            const coord = y + 1;
            const nextCell = cells.find(cell => {
                if (cell.y === coord && cell.x === x) {
                    return cell
                };
            });
            return nextCell
        };
        case direction.left: {
            const coord = x - 1;
            const nextCell = cells.find(cell => {
                if (cell.x === coord && cell.y === y) {
                    return cell
                };
            });
            return nextCell
        };
        case direction.right: {
            const coord = x + 1;
            const nextCell = cells.find(cell => {
                if (cell.x === coord && cell.y === y) {
                    return cell
                };
            });
            return nextCell
        };
    };
}

function rotateMatrixForward(matrix, moveDirection) {
    switch(moveDirection) {
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