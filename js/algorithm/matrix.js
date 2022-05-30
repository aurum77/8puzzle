// elementId'si verilen elementten matris yarat
function getMatrix(elementId) {
    let matrix = [[], [], []]
    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            matrix[i - 1].push(document.getElementById(elementId).rows[i].cells[j].children[0].value);
        }
    }
    return matrix;
}