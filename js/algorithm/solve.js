// Dosya: solve.js
// İsim: solve
// Ne yapar: Parametre olarak verilen init ve goal matrisleri alır
// ve yardımcı fonksiyonları kullanarak a* algoritmasını uygulayarak 
// init matrisinin durumundan goal matrisinin durumuna en kısa yolu
// hesaplar ve bunu html DOM manipülasyonu ile görsele döker
// manipülasyonu kullanrak görselleştirir
// Girdi: 3x3 matris, 3x3 matris
// Çıktı: yok
// Örnek girdi: 
// Örnek çıktı: yok

function solve(init_matrix, goal_matrix) {
    // zaman sayaci
    let calculationStart = new Date();

    let rootHVal = getHVal(init_matrix, goal_matrix);
    let rootNode = new MyNode(init_matrix, rootHVal, 0, rootHVal, 1);
    let gval = 0;
    // rootNode'u en ucuz olarak alalım
    let cheapestNode = rootNode;
    // 1=başarılı, -1=başarısız (ulaşılabilecek tüm düğümler ulaşıldı)
    let status = 0;

    let visited = [[rootNode]];

    while (true) {
        gval++;

        shuffled = shuffle(cheapestNode.matrix, getAdjacent(cheapestNode.matrix), getEmpty(cheapestNode.matrix));
        visited.forEach(depth => {
            depth.forEach(node => {
                shuffled.forEach(matrix => {
                    if (compareMatrices(node.matrix, matrix)) {
                        shuffled.splice(shuffled.indexOf(matrix), 1);
                    }
                });
            });
        });

        let nextLevel = generateNodes(shuffled, goal_matrix, gval);

        // en ucuz dugumden baska dugumler
        // yaratilamadiginda dur
        if(nextLevel.length == 0) {
            status = -1;
        }
        visited.push(nextLevel);

        visited[gval].forEach(node => {
            if (cheapestNode.gval != gval) {
                cheapestNode = visited[gval][0];
            }

            if (cheapestNode.hval > node.hval) {
                cheapestNode = node;
            }

            if (node.hval == 0) {
                status = 1;
            }
        });

        cheapestNode.chosen = 1;

        if (status != 0) {
            break;
        }
    }
    const calculationEnd = new Date();

    const visualizationStart = new Date();
    visualize(visited);
    const visualizationEnd = new Date();

    const calculationTime = `Hesaplama: ${calculationEnd.getSeconds() - calculationStart.getSeconds()} saniye, ${Math.abs(calculationEnd.getMilliseconds() - calculationStart.getMilliseconds())} milisaniye`;
    const visualizationTime = `Görselleştirme: ${visualizationEnd.getSeconds() - visualizationStart.getSeconds()} saniye, ${Math.abs(visualizationEnd.getMilliseconds() - visualizationStart.getMilliseconds())} milisaniye sürdü`;

    getStats(calculationTime, visualizationTime, status);
}