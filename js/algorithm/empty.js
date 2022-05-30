// Dosya: empty.js
// İsim: getEmpty
// Ne yapar: Parametre olarak verilen matristeki boş karoyu bulur
// Girdi: 3x3 matris
// Çıktı: Boş karonun koordinatlarını içeren bir json objesi
// Örnek girdi: 
//   matrix:
//   [ 
//      ['1', '2', '3'],
//      ['4', '', '5'],
//      ['6', '7', '8']
//   ]
//
// Örnek çıktı: 
//   {
//      "i": 1,
//      "j": 1 
//   }

function getEmpty(matrix) {
    let emptyRow;
    let emptyCol;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] === '') {
                // Boş karoyu bul koordinatlarını eşitle 
                emptyRow = i;
                emptyCol = j;
            }
        }
    }

    return { "i": emptyRow, "j": emptyCol };
}