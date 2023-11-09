let entrada = "    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|\n                           ";
let ceros = " _  _  _  _  _  _  _  _  _ \n| || || || || || || || || |\n|_||_||_||_||_||_||_||_||_|"

const segmentos = {
    0: " _ | ||_|",
    1: "     |  |",
    2: " _  _||_ ",
    3: " _  _| _|",
    4: "   |_|  |",
    5: " _ |_  _|",
    6: " _ |_ |_|",
    7: " _   |  |",
    8: " _ |_||_|",
    9: " _ |_| _|"
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
    let parsed = "";
    for (let i = 0; i < digitos.length; i++) {
        switch (digitos[i]) {
            case segmentos[0]:
                parsed = parsed + "0"
                break;
            case segmentos[1]:
                parsed = parsed + "1"
                break;
            case segmentos[2]:
                parsed = parsed + "2"
                break;
            case segmentos[3]:
                parsed = parsed + "3"
                break;
            case segmentos[4]:
                parsed = parsed + "4"
                break;
            case segmentos[5]:
                parsed = parsed + "5"
                break;
            case segmentos[6]:
                parsed = parsed + "6"
                break;
            case segmentos[7]:
                parsed = parsed + "7"
                break;
            case segmentos[8]:
                parsed = parsed + "8"
                break;
            case segmentos[9]:
                parsed = parsed + "9"
                break;
            default:
                parsed = parsed + "?"
                break;
        }
    }
    return parsed
}

let digitosSegmentados = obtenerSegmentos(ceros)
let digitosParseados = obtenerDigitos(digitosSegmentados);

console.log(digitosParseados);
