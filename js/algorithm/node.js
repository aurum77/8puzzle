// Düğüm yapısı
class MyNode {
    constructor(matrix, fval, gval, hval, chosen) {
        this.matrix = matrix;
        this.fval = fval; // gval + hval
        this.gval = gval;
        this.hval = hval;
        this.chosen = chosen;
    }
}