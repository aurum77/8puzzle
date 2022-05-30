// İsim: createDivider
// Ne yapar: Verilen level parametresine göre
// html üzerindeki matrisler arasında ayıraç oluşturur
// Girdi: sayı
// Çıktı: yok
// Örnek girdi: yok
// Örnek çıktı: yok

function createDivider(level) {
    let headerDiv = document.createElement("div");
    let line = document.createElement("hr");
    let header = document.createElement("h3");

    header.className = "divident"
    header.innerHTML = `adım=${level}`;

    headerDiv.appendChild(header);
    headerDiv.appendChild(line);

    let mainDiv = document.getElementById("nodes");

    mainDiv.appendChild(headerDiv);
}