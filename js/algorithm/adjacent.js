// Boş elemana komşu olan sayıları döndür
function getAdjacent(matrix) {
    let indices = getEmpty(matrix);

    let left, right, top, bottom;

    if (matrix[indices['i']][indices['j'] - 1]) {
        left = { 'val': matrix[indices['i']][indices['j'] - 1], 'coordinates': { 'i': indices['i'], 'j': indices['j'] - 1 } };

    }

    if (matrix[indices['i']][indices['j'] + 1]) {
        right = { 'val': matrix[indices['i']][indices['j'] + 1], 'coordinates': { 'i': indices['i'], 'j': indices['j'] + 1 } };
    }

    if (matrix[indices['i'] - 1] != undefined) {
        bottom = { 'val': matrix[indices['i'] - 1][indices['j']], 'coordinates': { 'i': indices['i'] - 1, 'j': indices['j'] } };
    }

    if (matrix[indices['i'] + 1] != undefined) {
        top = { 'val': matrix[indices['i'] + 1][indices['j']], 'coordinates': { 'i': indices['i'] + 1, 'j': indices['j'] } };
    }

    let items = [left, right, bottom, top];
    let adjacent = [];

    items.forEach(item => {
        if (item !== undefined) {
            adjacent.push(item);
        }
    });

    return adjacent;
}