let operacion = '';
let operador = '';
let resultado = 0;

function agregarNumero(numero) {
    operacion += numero;
    actualizarPantalla();
}

function agregarOperador(op) {
    if (operador === '') {
        operador = op;
        operacion += operador;
    } else {
        calcularResultado();
        operador = op;
        operacion += operador;
    }
    actualizarPantalla();
}

function agregarDecimal() {
    if (operacion.indexOf('.') === -1) {
        operacion += '.';
        actualizarPantalla();
    }
}

function calcularResultado() {
    resultado = eval(operacion);
    operacion = resultado.toString();
    actualizarPantalla();
    operador = '';
}

function limpiar() {
    operacion = '';
    operador = '';
    resultado = 0;
    actualizarPantalla();
}

function actualizarPantalla() {
    document.getElementById('resultado').value = operacion;
}