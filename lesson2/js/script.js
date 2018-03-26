let money = prompt('Ваш бюджет?', '');
let name = prompt('Название вашего магазина?', '');

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: true
};


/*
for( let i = 0; i < 3; i++){
    let a = prompt('Какой тип товаров будем продавать?', '');
    if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50){
        console.log('Все верно');
        mainList.shopGoods[i] = a;
    } else {
        alert('Вы ввели неверные значения. Попробуйте еще раз!');
        i--;
    }
}
*/

/*let i = 0;
for(; i < 3; i++){
    let a = prompt('Какой тип товаров будем продавать?', '');
    if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50){
        console.log('Все верно');
        mainList.shopGoods[i] = a;
    } else {
        alert('Вы ввели неверные значения. Попробуйте еще раз!');
        i--;
    }
}*/

let i = 0;
do {
    let a = prompt('Какой тип товаров будем продавать?', '');
    if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50){
        console.log('Все верно');
        mainList.shopGoods[i] = a;
        i++;
    } else {
        alert('Вы ввели неверные значения. Попробуйте еще раз!');
    }
} while (i < 3);


alert('Ваш бюджет на 1 день составит ' + mainList.budget / 30);

console.log(mainList);
