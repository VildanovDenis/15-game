import { direction } from './moveCells.js';

export const setDirectionName = (keycode) => {
    const directionName = '';
    switch (keycode) {
        case 'keyA': {
            directionName = direction.left;
            break;
        };
        case 'keyW': {
            directionName = direction.up;
            break;
        };
        case 'keyS': {
            directionName = direction.down;
            break;
        };
        case 'keyD': {
            directionName = direction.right;
            break;
        };
        default: { break };
    };

    return directionName
}