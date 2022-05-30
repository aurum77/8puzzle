// İsim: clean
// Ne yapar: html üzerindeki nodesContainer adlı div'in içini temizler
// Girdi: yok
// Çıktı: yok
// Örnek girdi: yok
// Örnek çıktı: yok

function clean() {
    let container = document.getElementById("nodesContainer");
    let nodes = container.appendChild(document.createElement('div'));
    nodes.id = 'nodes';

    container.removeChild(document.getElementById("nodes"));
    container.appendChild(nodes);
}