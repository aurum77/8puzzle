// Dosya: matrix.js
// İsim: getMatrix
// Ne yapar: Parametre olarak elementId'si verilen 
// html tablo elementinden veri alıp bir matris yaratır
// Girdi: string
// Çıktı: 3x3 matrix
// Örnek girdi:
//   elementId: "init_matrix"
//
// Örnek çıktı: 
//   [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '']
//   ]

function getMatrix(elementId) {
    let matrix = [[], [], []]
    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            matrix[i - 1].push(document.getElementById(elementId).rows[i].cells[j].children[0].value);
        }
    }
    return matrix;
}

