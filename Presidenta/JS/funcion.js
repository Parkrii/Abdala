function EsPrimo(n) {
    let divi = 0;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            divi++;
        }
    }
    return divi == 0;
}