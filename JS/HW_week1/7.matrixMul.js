function matrixMul(a, b) {
    var i, j, c = [[],[]];
    for (var i=0 ; i<a.length ; i++) {
        for (var j=0 ; j<a[i].length ; j++) {
            c[i][j] = a[i][j] * b[i][j];
        }
    }
    return c;
}

console.log(matrixMul([[15,12],[6,3]], [[4,5],[10,20]]));
