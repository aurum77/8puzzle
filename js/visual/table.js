// İsim: createTable
// Ne yapar: Bir MyNode objesi alarak html üzerinde 
// matris tablosu yaratır ve nodes div elementine ekler
// Girdi: MyNode objesi
// Çıktı: yok
// Örnek girdi: yok
// Örnek çıktı: yok

function createTable(node) {
    let table = document.createElement("table");
    let tableDiv = document.createElement("div");
    let cost = document.createElement("h3");
    let chosen = document.createElement("h3");
    cost.innerHTML = `f=${node.gval + node.hval}, g=${node.gval}, h=${node.hval}`;

    if (node.chosen == 1) {
        chosen.innerHTML = 'SEÇİLDİ';
    }

    tableDiv.className = "node";

    let k = 0;

    for (let i = 0; i < 3; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < 3; j++) {
            row.insertCell(j);
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            table.rows[i].cells[j].innerHTML = node.matrix[i][j];
            k++;
        }
    }

    tableDiv.appendChild(chosen);
    tableDiv.appendChild(table);
    tableDiv.appendChild(cost);

    let mainDiv = document.getElementById("nodes");
    mainDiv.appendChild(tableDiv);
}