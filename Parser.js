const segmentos = {
    0: " _ | ||_|", 1: "     |  |", 2: " _  _||_ ", 3: " _  _| _|", 4: "   |_|  |",
    5: " _ |_  _|", 6: " _ |_ |_|", 7: " _   |  |", 8: " _ |_||_|", 9: " _ |_| _|"
}


function obtenerSegmentos(input) {
    let digitos = [];
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
    // let coincidencia
    for (let i = 0; i < digitos.length; i++) {
        switch (digitos[i]) {
            case segmentos[0]:
                parsed.str = parsed.str + String("0");
                parsed.arr.push(0);
                break;
            case segmentos[1]:
                parsed.str = parsed.str + String("1");
                parsed.arr.push(1);
                break;
            case segmentos[2]:
                parsed.str = parsed.str + String("2");
                parsed.arr.push(2);
                break;
            case segmentos[3]:
                parsed.str = parsed.str + String("3");
                parsed.arr.push(3);
                break;
            case segmentos[4]:
                parsed.str = parsed.str + String("4");
                parsed.arr.push(4);
                break;
            case segmentos[5]:
                parsed.str = parsed.str + String("5");
                parsed.arr.push(5);
                break;
            case segmentos[6]:
                parsed.str = parsed.str + String("6");
                parsed.arr.push(6);
                break;
            case segmentos[7]:
                parsed.str = parsed.str + String("7");
                parsed.arr.push(7);
                break;
            case segmentos[8]:
                parsed.str = parsed.str + String("8");
                parsed.arr.push(8);
                break;
            case segmentos[9]:
                parsed.str = parsed.str + String("9");
                parsed.arr.push(9);
                break;
            default:
                parsed.str = parsed.str + "?";
                parsed.arr.push("?");
                break;
        }
    }
    return parsed
}

function checksum(data) {
    let sum = 0
    let n = 1
    for (let i = data.arr.length; i > 0; i--) {
        sum += n * data.arr[i - 1]
        n++
    }
    try {
        let check = (sum % 11)

        if (isNaN(check)) {
            console.log(`${data.str} ILL`);
        }
        if (check === 0) {
            console.log(`${data.str} OK`);
        } else if (check > 0) {
            console.log(`${data.str} ERR`);
        }
    } catch (error) {
        console.log(`OCURRIÓ UN ERROR`);
    }
}

let unoalnueve = "    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|\n                           ";
let ceros = " _  _  _  _  _  _  _  _  _ \n| || || || || || || || || |\n|_||_||_||_||_||_||_||_||_|\n                           ";
let wrong = " _  _  _     _  _  _  _  _ \n| || || || || || || || || |\n|_||_||_||_||_||_||_||_||_|\n                           ";
let unos = "                           \n  |  |  |  |  |  |  |  |  |\n  |  |  |  |  |  |  |  |  |\n                           "
let ochos = " _  _  _  _  _  _  _  _  _ \n|_||_||_||_||_||_||_||_||_|\n|_||_||_||_||_||_||_||_||_|\n                           "

let segmented = obtenerSegmentos(unoalnueve)
let parsed = obtenerDigitos(segmented);
checksum(parsed)



