
// Number 1

// Если плюсы справа то они прибавляют 1 только к числу после того как d присвоело значение
// Если плюсы слева то они прибавляют 1 к числу но до того как C присвоело значение

// Number 2

// 5

// Number 3

let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * -10);
console.log(a, b);

if (a >= 0 && b >= 0)
{
    console.log(a - b);
}
else if (a < 0 && b < 0)
{
    console.log(a * b);
}
else
{
    console.log(a + b);
}

// Number 4

a = Math.floor(Math.random() * 15);

switch(a)
{
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

// Number 5

function summ(a, b)
{
    return a + b;
}

function minus(a, b)
{
    return a - b;
}

function total(a, b)
{
    return a * b;
}

function dell(a, b)
{
    return a / b;
}

console.log('2 + 2 = ' + summ(2, 2));
console.log('3 - 2 = ' + minus(3, 2));
console.log('2 * 2 = ' + total(2, 2));
console.log('2 / 2 = ' + dell(2, 2));

// Number 6

function mathOperation(arg1, arg2, operation)
{
    let a;
    switch(operation)
    {
        case 'sum':
            a = summ(arg1, arg2);
            break;
        case 'minus':
            a = minus(arg1, arg2);
            break;
        case 'total':
            a = total(arg1, arg2);
            break;
        case 'del':
            a = dell(arg1, arg2);
            break;
    }
    return a;
}

console.log('2 + 2 = ' + mathOperation(2, 2, 'sum'));
console.log('3 - 2 = ' + mathOperation(3, 2, 'minus'));
console.log('2 * 2 = ' + mathOperation(2, 2, 'total'));
console.log('2 / 2 = ' + mathOperation(2, 2, 'del'));