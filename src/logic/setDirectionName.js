import { direction } from './moveCells.js';

export const setDirectionName = (keycode) => {
    let directionName = '';
    switch (keycode) {
        case 'KeyA': {
            directionName = direction.left;
            break;
        };
        case 'KeyW': {
            directionName = direction.up;
            break;
        };
        case 'KeyS': {
            directionName = direction.down;
            break;
        };
        case 'KeyD': {
            directionName = direction.right;
            break;
        };
        default: { break };
    };

    return directionName
}