/*
let openBtn = document.getElementById('open-btn'),
    name = document.getElementsByClassName('name'),
    budget = document.getElementsByClassName('budget'),
    goods = document.getElementsByClassName('goods'),
    item = document.getElementsByClassName('item'),
    employers = document.getElementsByClassName('employers'),
    discount = document.getElementsByClassName('discount'),
    isopen = document.getElementsByClassName('isopen'),
    nameVal = document.getElementsByClassName('name-value')[0],
    budgetVal = document.getElementsByClassName('budget-value')[0],
    goodsVal = document.getElementsByClassName('goods-value')[0],
    itemVal = document.getElementsByClassName('item-value')[0],
    employersVal = document.getElementsByClassName('employers-value')[0],
    discountVal = document.getElementsByClassName('discount-value')[0],
    isopenVal = document.getElementsByClassName('isopen-value')[0],
    goodsBtn = document.getElementsByTagName('button')[1],
    budgetBtn = document.getElementsByTagName('button')[2],
    employersBtn = document.getElementsByTagName('button')[3],
    goodsItem = document.querySelectorAll('.goods-item'),
    timeVal = document.querySelector('#time'),
    countBudgetVal = document.querySelector('#budget'),
    employersItem = document.querySelectorAll('.hire-employers-item');

let money,
    name,
    time,
    price;

openBtn.addEventListener('click', ()=> {
    money = prompt('Ваш бюджет?', '123456');
    while (isNaN(money) || money == null || money == ''){
        money = prompt('Ваш бюджет?', '123456');
    }
    name = prompt('Название вашего магазина?', 'Леонардо').toUpperCase();
});

function start() {

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
        let items = prompt('Перечислите через запятую товары', '');
        while (!isNaN(items) || items == null || items == '') {
            items = prompt('Попробуйте еще раз!', '');
        }
        mainList.shopItems = items.split(', ');
        mainList.shopItems.push(prompt("Подождите, еще", ''));
        mainList.shopItems.sort();
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


*/
var budget,
    storeName,
    time,
    price;


function start(){
    budget = prompt('Ваш бюджет?', '');

    while(isNaN(budget) || budget == "" || budget == null) {
        budget = prompt('Вы ввели неверные данные. Введите корректное значение бюджета?', '');
    }

    storeName = prompt('Название вашего магазина', '').toUpperCase();
    time = 21;

}

//start();

var mainList = {
    cash: budget,
    name: storeName,
    shopGoods:[],
    employers:{},
    open: false,
    discount: true,
    shopItems: [],
    chooseGoods: function chooseGoods(){

        for (var i = 0; i < 5; i++) {

            var a = prompt('Какой тип товаров будем продавать?', '');

            if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
                console.log('Все верно!');
                mainList.shopGoods[i] = a;
            } else{
                i = i - 1;
            }
        }
    },
    workTime: function workTime(time){
        if(time < 0) {
            console.log('Такого не может быть!');
        } else if (time > 8 && time < 20){
            console.log("Время работать!");
            mainList.open = true;
        }else if (time < 24){
            console.log("Уже слишком поздно!");
        }
        else {
            console.log("В сутках только 24 часа!");
        }
    },
    dayBudget: function dayBudget(){
        alert('Ваш ежедневный бюджет ' + mainList.budget / 30);
    },
    discountPrice: function discountPrice(){
        if(mainList.discount == true){
            price = price * 0.8;
        }else{
            alert('У вас отсутствует скидка!');
        }
    },
    employersHiring: 	function employersHiring(){
        for (var i = 1; i < 5; i++) {
            var b = prompt('Введите имя Вашего сотрудника!', '');
            if((typeof(b)) === 'string' && (typeof(b)) != null && b != '' && b.length < 20 && isNaN(b)){
                console.log('Все верно!');
                mainList.employers[i] = b;
            } else{
                alert("Введите имя сотрудника используя только буквы");
                i = i - 1;
            }
        }
    },
    chooseShopItems: function chooseShopItems(){
        for(i = 0; i < 1; i++){

            var items = prompt("Перечислите Ваши товары через запятую", "");

            if((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && isNaN(items)){
                mainList.shopItems = items.split(",");
                mainList.shopItems.push(prompt("Вы точно указали все товары, которые необходимы?", ""));
                mainList.shopItems.sort();
                mainList.shopItems.forEach(function(item, i, arr){
                    alert("У нас вы можете купить: " + (i + 1) + ": " + item);
                });

            } else{
                i = i - 1;
            }
        }
    }

};

for(var key in mainList){
    console.log('Наш магазин включает в себя: ' + key + ' СО ЗНАЧЕНИЕМ: '+ mainList[key]);
}

var openBtn = document.getElementById('open-btn'),

    nameField = document.getElementsByClassName('name'),
    nameValueField = document.getElementsByClassName('name-value'),
    budgetField = document.getElementsByClassName('budget'),
    budgetValueField = document.getElementsByClassName('budget-value'),
    goodsField = document.getElementsByClassName('goods'),
    goodsValueField = document.getElementsByClassName('goods-value'),
    itemsField = document.getElementsByClassName('items'),
    itemsValueField = document.getElementsByClassName('items-value'),
    employersField = document.getElementsByClassName('employers'),
    employersValueField = document.getElementsByClassName('employers-value'),
    discountField = document.getElementsByClassName('discount'),
    discountValueField = document.getElementsByClassName('discount-value'),
    isopenField = document.getElementsByClassName('isopen'),
    isopenValueField = document.getElementsByClassName('isopen-value'),

    goodsItemInput = document.querySelectorAll('goods-item'),

    buttonApprove = document.getElementsByTagName('button')[1],
    buttonCount = document.getElementsByTagName('button')[2],
    buttonHire = document.getElementsByTagName('button')[3],

    chooseItem = document.querySelector('choose-item'),
    timeValue = document.querySelector('time-value'),
    countBudgetValue = document.querySelector('count-budget-value'),

    hireEmployersItemField = document.querySelectorAll('hire-employers-item');


console.log(goodsItemInput);