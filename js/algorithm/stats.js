// bilgi al ve nodes'a ekle
function getStats(calculation, visualize, status) {
    let container = document.getElementById('nodes');
    let header = document.createElement('h3');
    let result = document.createElement('h3');

    header.innerHTML = `${calculation}, ${visualize}`;

    if(status == 1) {
        result.innerHTML = "Çözüm Başarılı";
    }
    else {
        result.innerHTML = "Çözüm Başarısız, mümkün olan tüm düğümler açıldı ancak hval=0'a ulaşılamadı";
    }

    container.appendChild(header);
    container.appendChild(result);
}