function Hamming(b, b2, largo) {
    let hamming = 0;

    for (let i = 0; i < largo; i++) {
        if (b[i] != b2[i]) {
            hamming++;
        }
    }
    return hamming;
}
