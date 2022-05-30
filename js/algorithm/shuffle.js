// Dosya: shuffle.js
// İsim: shuffle
// Ne yapar: Parametre olarak matris, matristeki boşluğa komşu karoların koordinatlarını
// ve boş karonun koordinatlarını alır ve çocuk düğümler için matris oluşturur
// Girdi: matris, komşu karoların koordinatlarını bulunduran liste, boş karonun koordinatı
// Çıktı: çocuk matrisler
//
// Örnek girdi:
//   matrix:
//   [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', ''],
//   ]
//
//   adjacent:
//   [
//     {i: 2, j: 1},
//     {i: 1, j: 2}
//   ]
//   empty: 
//   {i: 2, j: 2}
// Örnek çıktı:
//   [
//     [
//       ['1', '2', '3'],
//       ['4', '5', ''],
//       ['7', '8', '6']
//     ],
//     [
//       ['1', '2', '3'],
//       ['4', '5', '6'],
//       ['7', '', '8']
//     ]
//   ]

function shuffle(matrix, adjacent, empty) {
    let temp;
    let matrices = [];

    adjacent.forEach(element => {
        // Sığ kopya
        let newMatrix = matrix.map(function (arr) {
            return arr.slice();
        });
        // boş hücre ve komşu hücrelerin yerlerinin değiş tokuşu
        temp = newMatrix[element.coordinates['i']][element.coordinates['j']];
        newMatrix[element.coordinates['i']][element.coordinates['j']] = '';
        newMatrix[empty['i']][empty['j']] = temp;
        matrices.push(newMatrix);
    });

    return matrices;
}