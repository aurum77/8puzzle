// matrixA ve matrixB' yi karşılaştır
function compareMatrices(matrixA, matrixB) {
    let isSame = 1;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            if(matrixA[i][j] != matrixB[i][j]) {
                isSame = 0;
            }
        }
    }

    return isSame;
}