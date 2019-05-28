/**
 * Возможные направления движения ячеек
 */
export const direction = {
    up: 'UP',
    down: 'DOWN',
    left: 'LEFT',
    right: 'RIGHT'
};

/**
 * Двигает массив cells в заданном направлении
 */
export const moveCells = (cells, moveDirection) => {
    const emptyCell = {
        ...cells.find(({value}) =>
            value === ''
        )
    };
    const {x: emptyX, y: emptyY} = emptyCell;

    const nextCell = getNextCell(cells, emptyX, emptyY, moveDirection);
    const isNextCellEmpty = !nextCell;
    if (isNextCellEmpty) {
        return cells;
    };

    const {x: nextX, y: nextY} = nextCell;

    const newCells = cells
        .reduce((acc, cell) => {
            const {value} = cell;
            if (value === '') {
                return [...acc, {...cell, x: nextX, y: nextY}];
            }
            if (value === nextCell.value) {
                return [...acc, {...cell, x: emptyX, y: emptyY}]
            }

            return [...acc, cell];
        },
        []
    );

    return newCells;
};

function getNextCell(cells, x, y, moveDirection) {
    switch(moveDirection) {
        case direction.up: {
            const coord = y - 1;
            if (coord < 0) {
                return null;
            }

            const nextCell = cells.find(cell => {
                if (cell.y === coord && cell.x === x) {
                    return cell
                };
            });

            return nextCell
        }

        case direction.down: {
            const coord = y + 1;
            if (coord > 3) {
                return null;
            }

            const nextCell = cells.find(cell => {
                if (cell.y === coord && cell.x === x) {
                    return cell
                };
            });

            return nextCell
        }

        case direction.left: {
            const coord = x - 1;
            if (coord < 0) {
                return null;
            }

            const nextCell = cells.find(cell => {
                if (cell.x === coord && cell.y === y) {
                    return cell
                };
            });
            return nextCell
        }

        case direction.right: {
            const coord = x + 1;
            if (coord > 3) {
                return null;
            }

            const nextCell = cells.find(cell => {
                if (cell.x === coord && cell.y === y) {
                    return cell
                };
            });

            return nextCell
        };
        default:
            return null;
    };
}