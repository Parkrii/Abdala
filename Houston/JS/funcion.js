function houston(v1, v2, n) {
    let total = [];
    v1.sort(), v2.sort();
    for (let i = 0; i < n; i++) {
        total[i] = v1[i] * v2[i];
    }
    return total;
}