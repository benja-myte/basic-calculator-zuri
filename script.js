let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function operation(op) {
    result.value += op;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
