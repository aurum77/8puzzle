// Dosya: adjacent.js
// İsim: getAdjacent
// Ne yapar: Boş elemana komşu olan karoların
// koordinatlarını döndürür
// Girdi: 3x3 matris
// Çıktı: Komşu karoların koordinatlarının 
// bulunduğu json objeleri bulunduran bir liste
// Örnek girdi: 
//   matrix:
//   [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '']
//   ]
//
// Örnek çıktı:
//   [ 
//     { "coordinates": { "i": 2, "j": 1 } },
//     { "coordinates": { "i": 1, "j": 2 } }
//   ]

function getAdjacent(matrix) {
    // Boş karonun indislerini bul
    let indices = getEmpty(matrix);

    let top, bottom, left, right;

    // karonun yukarısındaki karonun koordinatlarını almaya çalış
    if (matrix[indices['i']][indices['j'] - 1]) {
        top = { 'coordinates': { 'i': indices['i'], 'j': indices['j'] - 1 } };
    }

    // karonun altındaki karonun koordinatlarını almaya çalış
    if (matrix[indices['i']][indices['j'] + 1]) {
        bottom = { 'coordinates': { 'i': indices['i'], 'j': indices['j'] + 1 } };
    }

    // karonun solunaki karonun koordinatlarını almaya çalış
    if (matrix[indices['i'] - 1] != undefined) {
        left = { 'coordinates': { 'i': indices['i'] - 1, 'j': indices['j'] } };
    }

    // karonun sağındaki karonun koordinatlarını almaya çalış
    if (matrix[indices['i'] + 1] != undefined) {
        right = { 'coordinates': { 'i': indices['i'] + 1, 'j': indices['j'] } };
    }

    let items = [top, bottom, left, right];
    let adjacent = [];

    // Undefined olmayan elemanları adjacent dizisine ekle
    items.forEach(item => {
        if (item !== undefined) {
            adjacent.push(item);
        }
    });

    return adjacent;
}