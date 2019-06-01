import { direction } from './moveCells.js';

/**
 * Преобразует код клавиши в направление движения
 */
export const setDirectionName = (keycode) => {
    switch (keycode) {
        case 'KeyA': {
            return direction.left
        };

        case 'KeyW': {
            return direction.up
        };

        case 'KeyS': {
            return direction.down
        };

        case 'KeyD': {
            return direction.right
        };
    };
    return ''
}