/*  To find whether number is a plindrom*/

function getPlindrom() {
    var temp, reverse, final = 0;
    var number = document.getElementById('NUM').value;
    parse_num = parseInt(number);

    temp = parse_num;

    while (parse_num > 0) {
        reverse = parse_num % 10;
        parse_num = parseInt(parse_num / 10);
        final = final * 10 + reverse;

    }
    if (final == temp) {
        alert("Number is Plindrom 🆗");
    } else {
        alert("Not Plindrom ✖");
    }

}

/* To print n prime numbers... */

function getPrime() {
    var i = 0;
    var j = 0;

    limit_numbers = document.getElementById('limit').value;

    //loop till i equals to limit_numbers of numbers
    for (i = 1; i <= limit_numbers; i++) {
        count = 0;

        for (j = 1; j <= i; j++) {
            // % modules will give the reminder value, so if the reminder is 0 then it is divisible
            if (i % j == 0) {
                //increment the value of count
                count++;
            }
        }


        //prime number should be exactly divisible by 2 times only (itself and 1)
        if (count == 2) {
            document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
        }
    }
}

/* Find Sum Of N Numbers */

function findSum() {
    let number = document.getElementById("SUM").value;
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result = result + i;
    }
    return alert(result);
}



/**
 print n number of tables 
 */
function getTable() {

    var result = ' x   ';

    function buff(val) {
        var buff = '';
        var pad = 4 - val;
        while (pad-- > 0)
            buff += ' ';
        return buff;
    }

    // Here  number variable is number of tables  
    var number = document.getElementById("Num").value;


    for (var i = 0; i <= number; i++) {
        if (number >= 15) {
            alert("Number Should be less than 15")
            return
        }
        for (var j = 0; j <= 10; j++) {

            if (i == 0 && j > 0) {
                result += '[' + j + ']' + buff((j + '').length + 2);
            }
            else if (j == 0 && i > 0) {
                result += '[' + i + ']';
            }
            else if (i > 0 && j > 0) {
                result += buff((i * j + '').length) + i * j;
            }
        }
        result += '\n'
    }
    alert(result);

}


