let money,
    name,
    time,
    price,
    discount;

function start() {
    money = prompt('Ваш бюджет?', '123456');
    while (isNaN(money) || money == null || money == ''){
        money = prompt('Ваш бюджет?', '123456');
    }
    name = prompt('Название вашего магазина?', 'Леонардо').toUpperCase();
    time = 19;
    price = 1555;
    discount = true;
}
// start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
};
//Выбираем тип товаров
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

// Узнаем, работает ли магазин
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

//Выводим бюджет на 1 день
function budgetDay() {
    alert('Ваш бюджет на 1 день составит ' + mainList.budget / 30);
}

//Заносим имена новых сотрудников
function hiring() {
    for( let j = 1; j < 5; j++){
        let a = prompt('Введите имя ' + j + ' сотрудника');
        if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 20){
            console.log('Все верно');
            mainList.employers[j] = a;
        } else {
            alert('Попробуйте еще раз!');
            j--;
        }
    }
}

//Выводим старую и новую уцену на товар с учетом скидки
function discountDay() {
    if (discount){
        alert('Хочешь скидку? ;)');
        alert('Старая цена товара ' + price);
        price *= 0.8;
        alert('Новая цена товара ' + price);
    } else {
        alert('Сегодня скидок нет');
    }
}


chooseGoods();
workTime();
budgetDay();
hiring();
discountDay();

console.log(mainList);
