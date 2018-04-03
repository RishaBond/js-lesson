/*
let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let menuItem5 = document.createElement('li');
let adv = document.getElementsByClassName('adv');
let title = document.getElementById('title');
let addPrompt = document.getElementById('prompt');

document.body.style.background = "url('img/apple_true.jpg')";

menu.insertBefore(menuItem[2], menuItem[1]);
menuItem5.classList.add('menu-item');
menuItem5.textContent = 'Пятый пункт';
menu.appendChild(menuItem5);

adv[0].style.display = 'none';

title.textContent = 'Мы продаем только подлинную технику Apple';

let review = prompt('Как вы относитесь к технике Apple?', 'Хорошо :)');
addPrompt.textContent = review;
*/
document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

var menu = document.querySelector('.menu'),
    listItem = document.createElement('li'),
    menuItem = document.getElementsByClassName('menu-item'),
    adv = document.querySelector('.adv'),
    propmt = document.getElementById('prompt');

listItem.innerHTML = "<li class='menu-item'>Пятый пункт</li>";
menu.appendChild(listItem);
menu.insertBefore(menuItem[2], menuItem[1]);
title.textContent = "Мы продаем только подлинную технику Apple";
adv.remove();//Вычитал на https://learn.javascript.ru/modifying-document. Или использовать другой способ и, если да, то какой?
propmt.textContent = "Как вы относитесь к технике Apple?";