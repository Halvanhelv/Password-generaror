var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr3 = ['A', 'B', 'C', 'D'];
var arr4 = ['a', 'b', 'c', 'd'];
var arr5 = ['!', '@', '#', '$'];

document.getElementById('param-1').oninput = function () {
    console.log(this.value);
    document.getElementById('password-length').innerHTML = this.value
}
generatePass();
document.getElementById('generator').onclick = generatePass;

function generatePass() {
    var result = [];
    if (document.getElementById('param-2').checked) {
        result = result.concat(arr2);
        // копирую массив в результирующий массив
        // Включенны ли цифры
    }
    if (document.getElementById('param-3').checked) {
        result = result.concat(arr3);
        // копирую массив в результирующий массив
        // Включенны ли прописные
    }
    if (document.getElementById('param-4').checked) {
        result = result.concat(arr4);
        // копирую массив в результирующий массив
        // Включенны ли строчные
    }

    if (document.getElementById('param-5').checked) {
        result = result.concat(arr5); // копирую массив в результирующий массив
        // Включенны ли спец символы 
    }

    result.sort(compareRandom); // перемешиваю результирующий массив

    document.getElementById('out').innerHTML = '';
for (var k = 0; k < 6; k++) {
    var out = ''; // будущий пароль
    var passLenght = parseInt(document.getElementById('param-1').value); // Длинна пароля
    for (var i = 0; i < passLenght; i++) {
        // Цикл по длинне пароля
        // Выбирается случайное значение из массива result
        out += result[randomInteger(0, result.length - 1)];
        //        console.log(result);    
        
    }

document.getElementById('out').innerHTML += '<p>' + out + '</p>';
}
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
