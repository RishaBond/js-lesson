let openBtn = document.getElementById('open-btn'),
    nameVal = document.getElementsByClassName('name-value')[0],
    budgetVal = document.getElementsByClassName('budget-value')[0],
    goodsVal = document.getElementsByClassName('goods-value')[0],
    itemVal = document.getElementsByClassName('items-value')[0],
    employersVal = document.getElementsByClassName('employers-value')[0],
    discountVal = document.getElementsByClassName('discount-value')[0],
    isopenVal = document.getElementsByClassName('isopen-value')[0],

    goodsBtn = document.getElementsByTagName('button')[1],
    budgetBtn = document.getElementsByTagName('button')[2],
    employersBtn = document.getElementsByTagName('button')[3],
    goodsItem = document.querySelectorAll('.goods-item'),
    chooseItem = document.querySelector('.choose-item'),
    timeVal = document.querySelector('.time-value'),
    countBudgetVal = document.querySelector('#budget'),
    countBudgetValue = document.querySelector('.count-budget-value'),
    employersItem = document.querySelectorAll('.hire-employers-item');

let money,
    price;

openBtn.addEventListener('click', ()=> {
    setTimeout(start, 2000);
});

function start() {
    money = prompt('Ваш бюджет?', '123456');
    while (isNaN(money) || money == null || money == ''){
        money = prompt('Ваш бюджет?', '123456');
    }
    budgetVal.textContent = money;

    nameVal.textContent = prompt('Название вашего магазина?', 'Леонардо').toUpperCase();

}

goodsBtn.addEventListener('click', ()=>{
    for( let i = 0; i < goodsItem.length; i++){
        let a = goodsItem[i].value;
        if (typeof(a) === 'string' && typeof(a) !== null && a.length < 50){
            console.log('Все верно');
            mainList.shopGoods[i] = a;
            goodsVal.textContent = mainList.shopGoods;
        } else {
            alert('Вы ввели неверные значения. Попробуйте еще раз!');
            i--;
        }
    }
});

chooseItem.addEventListener('change', ()=> {
    let tmp = chooseItem.value;
    if (isNaN(tmp) && tmp !== "") {
        mainList.shopItems = tmp.split(",").sort();
        itemVal.textContent = mainList.shopItems;
    }
});

timeVal.addEventListener('change', ()=> {
    let time = timeVal.value;
    if ( time >= 8 && time <= 20 ) {
        mainList.open = true;
    } else {
        mainList.open = false;
    }
    if (mainList.open) {
        isopenVal.style.backgroundColor = 'green';
    } else {
        isopenVal.style.backgroundColor = 'red';
    }
});
budgetBtn.addEventListener('click', ()=>{
    countBudgetVal.value = money / 30;
});
employersBtn.addEventListener('click', ()=> {
    for( let j = 0; j < employersItem.length; j++){
        let nameEmployer = employersItem[j].value;
        mainList.employers[j] = nameEmployer;
        employersVal.textContent += mainList.employers[j] + ', ';
    }
});

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: [],
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
};


console.log(mainList);

