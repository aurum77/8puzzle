// Dosya: compare.js
// İsim: compareMatrices
// Ne yapar: Parametre olarak verilen matrislerin
// eşit olup olmadıklarını kontrol eder
// Girdi: 3x3 matris
// Çıktı: Matrisler eşit ise 1, değil ise 0
// Örnek girdi: 
//   matrixA:
//   [ 
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '']
//   ]
//   matrixB: 
//   [
//     ['1', '2', '3'], 
//     ['4', '5', '6'],
//     ['7', '8', '']
//   ]
//
// Örnek çıktı: 1

function compareMatrices(matrixA, matrixB) {
    // Aynı olduklarını varsayalım
    let isSame = 1;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            // Farklı bir element bulunduğunda farklı
            // olduklarını belirtmek için isSame=0 yap
            if(matrixA[i][j] != matrixB[i][j]) {
                isSame = 0;
            }
        }
    }

    return isSame;
}