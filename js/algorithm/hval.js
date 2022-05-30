// Dosya: hval.js
// İsim: getHVal
// Ne yapar: Parametre olarak bir matris ve hedef matrisini
// alarak manhattan distance kullanarak matrisin H değerini hesaplar
// Girdi: 3x3 matris, 3x3 matris
// Çıktı: sayı
// Örnek girdi: 
//   matrixA:
//   [ 
//     ['1', '2', '3'],
//     ['4', '', '5'],
//     ['6', '7', '8']
//   ]
//   matrixB: 
//   [
//     ['1', '2', '3'], 
//     ['4', '5', '6'],
//     ['7', '8', '']
//   ]
//
// Örnek çıktı: 6

// Verilen bir matris(matrix) hedef matrisi
// kullanarak h değerini döndür
function getHVal(matrix, goal_matrix) {
    let x1, y1;
    let x2, y2;
    let cost = 0;

    let elements = matrix.map(function (elements) {
        return elements.slice();
    });
    elements = elements.flat();

    // '' elementini çıkar
    elements.splice(elements.indexOf(''), 1);
    elements.forEach(char => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (char != '') {
                    if (matrix[i][j] === char) {
                        x1 = i;
                        y1 = j;
                    }

                    if (goal_matrix[i][j] === char) {
                        x2 = i;
                        y2 = j;
                    }
                }
            }
        }
        // cost = |x1 - x2| + |y1 - y2|
        cost += Math.abs(x1 - x2) + Math.abs(y1 - y2);
    });

    return cost;
}