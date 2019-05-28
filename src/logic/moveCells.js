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

    if (Object.keys(nextCell).length === 0) { return cells };

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
            if (coord < 0) return {};
            const nextCell = cells.find(cell => {
                if (cell.y === coord && cell.x === x) {
                    return cell
                };
            });
            return nextCell
        };
        case direction.down: {
            const coord = y + 1;
            if (coord > 3) return {};
            const nextCell = cells.find(cell => {
                if (cell.y === coord && cell.x === x) {
                    return cell
                };
            });
            return nextCell
        };
        case direction.left: {
            const coord = x - 1;
            if (coord < 0) return {};
            const nextCell = cells.find(cell => {
                if (cell.x === coord && cell.y === y) {
                    return cell
                };
            });
            return nextCell
        };
        case direction.right: {
            const coord = x + 1;
            if (coord > 3) return {};
            const nextCell = cells.find(cell => {
                if (cell.x === coord && cell.y === y) {
                    return cell
                };
            });
            return nextCell
        };
    };
}