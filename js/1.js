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
        // copy array to result array
        // Are digits enabled
    }
    if (document.getElementById('param-3').checked) {
        result = result.concat(arr3);
        // copy array to result array
        // Are uppercase letters enabled
    }
    if (document.getElementById('param-4').checked) {
        result = result.concat(arr4);
        // copy array to result array
        // Are lowercase letters enabled
    }

    if (document.getElementById('param-5').checked) {
        result = result.concat(arr5); // copy array to result array
        // Are special characters enabled
    }

    result.sort(compareRandom); // shuffle the result array

    document.getElementById('out').innerHTML = '';
for (var k = 0; k < 6; k++) {
    var out = ''; // future password
    var passLenght = parseInt(document.getElementById('param-1').value); // Password length
    for (var i = 0; i < passLenght; i++) {
        // Loop through password length
        // Random value is selected from result array
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
