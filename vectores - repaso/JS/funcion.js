function partido(parti) {
    let a = 0, b = 0, resultado = "";

    for (let i = 0; i < parti.length; i++) {
        if (parti[i] == "a" || parti[i] == "A") {
            a++;
        }
        if (parti[i] == "b" || parti[i] == "B") {
            b++;
        }
    }
    resultado = a + "-" + b;
    return resultado;
}