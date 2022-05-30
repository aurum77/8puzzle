// Tablodaki boş yeri bul ve koordinatlarını döndür
function getEmpty(matrix) {
    let emptyRow;
    let emptyCol;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] === '') {
                emptyRow = i;
                emptyCol = j;
            }
        }
    }

    return { "i": emptyRow, "j": emptyCol };
}