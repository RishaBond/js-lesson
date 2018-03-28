let money,
    name,
    time,
    price;

function start() {
    money = prompt('Ваш бюджет?', '123456');
    while (isNaN(money) || money == null || money == ''){
        money = prompt('Ваш бюджет?', '123456');
    }
    name = prompt('Название вашего магазина?', 'Леонардо').toUpperCase();
    time = 19;
}

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
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
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log('Такого не может быть!');
        } else if (time > 8 && time < 20) {
            console.log('Время работать!');
            mainList.open = true;
        } else if (time < 24) {
            console.log('Уже слишком поздно!');
        } else {
            console.log('В сутках 24 часа!');
        }
    },
    budgetDay: function budgetDay() {
        alert('Ваш бюджет на 1 день составит ' + mainList.budget / 30);
    },
    discountDay: function discountDay() {
        if (discount == true){
            alert('Хочешь скидку? ;)');
            alert('Старая цена товара ' + price);
            price *= 0.8;
            alert('Новая цена товара ' + price);
        } else {
            alert('Сегодня скидок нет');
        }
    },
    hiring: function hiring() {
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
    },
    chooseShopItems: function chooseShopItems() {
        for(let n = 0; n < 1; n++){
            let items = prompt('Перечислите через запятую ваши товары');
            let sec = prompt('Подождите, еще ', '');
            if (typeof(items) === 'string' && typeof(items) !== null && items != ''){
                mainList.shopItems = items.split(',');
            } if (typeof(sec) === 'string' && typeof(sec) !== null && sec != ''){
                mainList.shopItems.push(sec);
                mainList.shopItems.sort();
            } else {
                alert('Вы ввели неверные значения. Попробуйте еще раз!');
                n--;
            }
        }
    },
    showShopItem: function showShopItem(){
        mainList.shopItems.forEach(function (item, i, shopItems) {
            i++;
            alert('Вы можете купить у нас ' + i + ': ' + item );
        });
    }
};

console.log('В нашем магазине есть: ');
for(let key in mainList){
    console.log(key);
}

console.log(mainList);
