function mediana(a, n) {
    let mitad = 0, media = 0;
    if (n % 2 == 0) {
       mitad = n / 2;
       media = (a[mitad-1] + a[mitad]);
    }
    else {
        mitad = parseInt(n / 2);
        media = a[mitad] * 2;
    }
    return media;
}