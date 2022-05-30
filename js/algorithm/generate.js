// matrislerin bulunduğu bir dizi(matrixArray),
// hedef matris(goal_matrix) ve derinlik değeri(gval)
// yeni MyNode dizisi döndür 
function generateNodes(matrixArray, goal_matrix, gval) {
    let nodes = [];
    let hval = 0;

    matrixArray.forEach(matrix => {
        hval = getHVal(matrix, goal_matrix);
        nodes.push(new MyNode(matrix, hval + gval, gval, hval, 0));
    });

    return nodes;
}