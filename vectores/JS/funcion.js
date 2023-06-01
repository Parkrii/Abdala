function promedio(a) {
    let prom = 0;
    for (let i = 0; i < a.length; i++) {
        prom += a[i];
    }
    prom /= a.length;

    return prom;
}

function mayores(a, prom) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > prom) {
            b.push(a[i]);
        }
    }
    return b;
}

function multiplos(a) {
    let multi = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0 || a[i] % 3 == 0) {
            multi++;
        }
    }

    return multi;
}

function suma(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    return sum;
}

function pordos(a) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] * 2);
    }

    return c;
}