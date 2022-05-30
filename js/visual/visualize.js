// İsim: visualize
// Ne yapar: Parametre olarak bir MyNode listesi olan nodeArray'i alır ve 
// yardımcı fonksiyonları kullanarak bu listeyi görselleştirir
// Girdi: MyNode objeleri bulunduran bir liste
// Çıktı: yok
// Örnek girdi: yok
// Örnek çıktı: yok

function visualize(nodeArray) {
    // Görselleştirmeden önce temizleyelim
    clean();
    let oldDepth = 0;
    let len = 0;

    nodeArray.forEach(depth => {
        depth.forEach(node => {
            if (node.gval > oldDepth) {
                // Her gval artışında ayıraç oluştur
                createDivider(node.gval);
                oldDepth++;
            }
            // Tablo oluştur
            createTable(node);
            len++;
        });
    });
}