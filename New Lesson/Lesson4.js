// 1

function filter(number)
{
    let a = {};
    if (parseInt(number) > 999)
    {
        return a;
    }
    a = {'единицы': number[2], 'десятки': number[1], 'сотни': number[0]};
    return a;
}

let a = prompt('Please number - ');

console.log(filter(a));

// 2

function countBasketPrice(goods)
{
    let totalPrice = 0;
    for (var good in goods)
    {
        totalPrice += goods[good];
    }
    return totalPrice;
}

let basket = { Computer: 45000, Keyboard: 5000, };
console.log(countBasketPrice(basket));
