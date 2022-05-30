// Dosya: stats.js
// İsim: getStats
// Ne yapar: Hesaplama, görselleştirme ve durum parametrelerine 
// göre html'deki nodes div'inin sonuna bir mesaj ekler
// Girdi: string, string, sayı
// Çıktı: yok
// Örnek girdi: 
//   calculation:
//     Hesaplama: 1 saniye, 119 milisaniye sürdü
//   visualization:
//     Görselleştirme: 0 saniye, 117 milisaniye sürdü
//   status: 1
//
// Örnek çıktı: yok

function getStats(calculation, visualize, status) {
    let container = document.getElementById('nodes');
    let header = document.createElement('h3');
    let result = document.createElement('h3');

    header.innerHTML = `${calculation}, ${visualize}`;

    if(status == 1) {
        result.innerHTML = "Çözüm Başarılı";
    }
    else {
        result.innerHTML = "Çözüm Başarısız, mümkün olan tüm düğümler açıldı ancak h=0'a ulaşılamadı";
    }

    container.appendChild(header);
    container.appendChild(result);
}