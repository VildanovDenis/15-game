export const randomCells = (cells) => {
    const min = 0;
    const max = 15;
    const cloneCells = cells.slice();

    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
        const randomNumber2 = Math.floor(min + Math.random() * (max + 1 - min));

        const cell = cloneCells[randomNumber].value;
        cloneCells[randomNumber].value = cloneCells[randomNumber2].value;
        cloneCells[randomNumber2].value = cell;
    }

    return cloneCells
}