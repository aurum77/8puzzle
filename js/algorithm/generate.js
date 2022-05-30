// Dosya: generate.js
// İsim: generateNodes
// Ne yapar: Parametre olarak shuffle fonksiyonu ile oluşturulmuş
// 3x3 matrislerin bulunduğu bir liste, hedef matrisi ve g değeri alarak
// çocuk MyNode objelerini içeren bir liste döndürür
// Girdi: Shuffle fonksiyonu ile oluşturulmuş 3x3 matris bulunduran bir liste,
// 3x3 matris, sayı
// Çıktı: MyNodes listesi
// Örnek girdi:
//   matrixArray:
//   [ 
//     [
//       ['1', '2', '3'],
//       ['4', '5', '6'],
//       ['7', '', '8']
//     ],
//     [
//       ['1', '2', '3'],
//       ['4', '5', ''],
//       ['7', '8', '6']
//     ]
//   ]
//     
//   goal_matrix:
//   [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '', '8']
//   ]
//
//   gval: 1
//
// Örnek çıktı:
//   [
//     [
//       {
//         'matrix':[
//           ['1', '2', '3'],
//           ['4', '5', '6'],
//           ['7', '', '8']
//         ],
//         'fval':1,
//         'gval':1,
//         'hval':0,
//         'chosen':0
//       },
//       {
//         'matrix':[
//           ['1', '2', '3'],
//           ['4', '5', ''],
//           ['7', '8', '6']
//         ],
//         'fval':3,
//         'gval':1,
//         'hval':2,
//         'chosen':0
//       },
//     ]
//   ]

function generateNodes(matrixArray, goal_matrix, gval) {
    let nodes = [];
    let hval = 0;

    matrixArray.forEach(matrix => {
        hval = getHVal(matrix, goal_matrix);
        nodes.push(new MyNode(matrix, hval + gval, gval, hval, 0));
    });

    return nodes;
}