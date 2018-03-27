
let money,
    name,
    time;

function start() {
    money = prompt('Ваш бюджет?', '123456');
    while (isNaN(money) || money == null || money == ''){
        money = prompt('Ваш бюджет?', '123456');
    }
    name = prompt('Название вашего магазина?', 'Леонардо').toUpperCase();
    time = 19;
}
start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
};

function chooseGoods() {
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
}
chooseGoods();

function workTime(time) {
    if (time < 0) {
        console.log('Такого не может быть!');
        } else if (time > 8 && time < 20) {
            console.log('Время работать!');
            } else if (time < 24) {
                console.log('Уже слишком поздно!');
                } else {
                    console.log('В сутках 24 часа!');
                }
}
workTime();


alert('Ваш бюджет на 1 день составит ' + mainList.budget / 30);

console.log(mainList);
