function Moda(A) {
    let cuenta = 0, contador = 0, moda = 0;
    A.map(m => {
        cuenta = 0;
        A.map(m2 => {
            if (m == m2) { cuenta++ }
        })
        if (cuenta > contador) {
            contador = cuenta;
            moda = m;
        }
    })
    return moda;
}