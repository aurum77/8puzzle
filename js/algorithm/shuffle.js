// Dosya: shuffle.js
// İsim: shuffle
// Ne yapar: Parametre olarak verilen 
// Girdi:
// Çıktı:
// Örnek girdi:
// Örnek çıktı:

// Verilen matris(matrix), komşu elemanlar(adjacent)
// ve boş hücrenin koordinatlarını(empty) alıp çocuk matrisleri yarat
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