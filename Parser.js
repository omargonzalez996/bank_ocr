let entrada = "    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|\n                           ";
let ceros = " _  _  _  _  _  _  _  _  _ \n| || || || || || || || || |\n|_||_||_||_||_||_||_||_||_|"

const segmentos = {
    0: " _ | ||_|", 1: "     |  |", 2: " _  _||_ ", 3: " _  _| _|", 4: "   |_|  |",
    5: " _ |_  _|", 6: " _ |_ |_|", 7: " _   |  |", 8: " _ |_||_|", 9: " _ |_| _|"
}

let digitos = [];

function obtenerSegmentos(input) {
    let lineas = input.split('\n');
    let lineaUno = String(lineas[0]);
    let lineaDos = String(lineas[1]);
    let lineaTres = String(lineas[2]);

    for (let i = 0; i < lineaUno.length; i += 3) {
        digitos[i] = (lineaUno.substring(i, i + 3) + lineaDos.substring(i, i + 3) + lineaTres.substring(i, i + 3))
    }
    digitos = digitos.filter(String)
    return digitos
}

function obtenerDigitos(digitos) {
    let parsed = {
        "str": "",
        "arr": []
    };

    console.log(digitos);

    for (let i = 0; i < digitos.length; i++) {
        for (let k = 0; k <= digitos.length; k++) {
            if (digitos[i] === segmentos[k]) {
                parsed.str = parsed.str + String(k)
                parsed.arr.push(k)
            }
        }
    }
    return parsed
}

function checksum(data) {
    let sum = 0
    let position = 9
    for (let i = 0; i < data.arr.length; i++) {
        sum = sum + parseInt(data.arr[i] * position)
        position--
    }

    try {
        let check = (sum % 11)
        if (check === 0) {
            console.log(`${data.str} OK`);
        } else {
            console.log(`${data.str} ERR`);
        }
    } catch (error) {
        console.log(`${data.str} ILL`);
    }
}

let segmented = obtenerSegmentos(entrada)
let parsed = obtenerDigitos(segmented);
checksum(parsed)



