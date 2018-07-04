window.addEventListener('DOMContentLoaded', function () {
    //Создание модального окна
    let popup = document.querySelector('.popup'),
        popupBtn = document.getElementById('popup-btn'),
        overlay = document.querySelector('.overlay'),
        custom = document.querySelector('.custom'),
        customInfo = custom.querySelector('.custom-info'),
        customChar = custom.querySelector('.custom-char'),
        customStyle = custom.querySelector('.custom-style'),
        main = document.querySelector('.main'),
        mainCards = document.getElementsByClassName('main-cards')[0];

    popupBtn.addEventListener('click', start);
    function start() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        mainCards.classList.add('fadeOut');
        main.style.display = 'none';
        custom.style.display = 'flex';
        customInfo.style.display = 'block';
        customChar.style.display = 'block';
        customStyle.style.display = 'block';
    }

    let candidate_name = document.querySelector('#name'),
        candidate_age = document.querySelector('#age'),
        candidate_select = document.querySelector('#select'),
        candidate_bio = document.querySelector('#bio'),
        readyBtn = document.querySelector('#ready'),
        radio = document.querySelector('.radio'),
        sex = customInfo.querySelectorAll('input[name=sex]'),
        sexVal,
        person = document.getElementById('person'),
        personSkin = document.getElementById('person-skin'),
        personClothes = document.getElementById('person-clothes'),
        personHair = document.getElementById('person-hair'),
        skinSlides = document.getElementsByClassName('skin-color'),
        hairSlides = document.getElementsByClassName('hair-style'),
        clothesSlides = document.getElementsByClassName('clothes-style'),
        skinSlideIndex = 1,
        hairSlideIndex = 1,
        clothesSlideIndex = 1,
        skinMale1 = function () {
            personSkin.style.background = 'url("img/skin/skin-1.png") center no-repeat';
            personSkin.style.backgroundSize = 'cover';
        },
        skinMale2 = function () {
            personSkin.style.background = 'url("img/skin/skin-2.png") center no-repeat';
            personSkin.style.backgroundSize = 'cover';
        },
        skinMale3 = function () {
            personSkin.style.background = 'url("img/skin/skin-3.png") center no-repeat';
            personSkin.style.backgroundSize = 'cover';
        },
        skinFemale1 = function () {
            personSkin.style.background = 'url("img/skin/skin-4.png") center no-repeat';
            personSkin.style.backgroundSize = 'cover';
        },
        skinFemale2 = function () {
            personSkin.style.background = 'url("img/skin/skin-5.png") center no-repeat';
            personSkin.style.backgroundSize = 'cover';
        },
        skinFemale3 = function () {
            personSkin.style.background = 'url("img/skin/skin-6.png") center no-repeat';
            personSkin.style.backgroundSize = 'cover';
        },

        hairMale1 = function () {
            personHair.style.background = 'url("img/hair/construct/hair-1.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
        },
        hairMale2 = function () {
            personHair.style.background = 'url("img/hair/construct/hair-2.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
        },
        hairMale3 = function () {
            personHair.style.background = 'url("img/hair/construct/hair-3.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
        },

        hairFemale1 = function () {
            personHair.style.background = 'url("img/hair/construct/hair-4.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
        },
        hairFemale2 = function () {
            personHair.style.background = 'url("img/hair/construct/hair-5.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
        },
        hairFemale3 = function () {
            personHair.style.background = 'url("img/hair/construct/hair-6.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
        },

        clothesMale1 = function () {
            personClothes.style.background = 'url("img/clothes/construct/clothes-1.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
        },
        clothesMale2 = function () {
            personClothes.style.background = 'url("img/clothes/construct/clothes-2.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
        },
        clothesMale3 = function () {
            personClothes.style.background = 'url("img/clothes/construct/clothes-3.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
        },

        clothesFemale1 = function () {
            personClothes.style.background = 'url("img/clothes/construct/clothes-4.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
        },
        clothesFemale2 = function () {
            personClothes.style.background = 'url("img/clothes/construct/clothes-5.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
        },
        clothesFemale3 = function () {
            personClothes.style.background = 'url("img/clothes/construct/clothes-6.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
        },
        skinArrMale = [skinMale1,skinMale2,skinMale3],
        skinArrFemale = [skinFemale1,skinFemale2,skinFemale3],
        hairArrMale = [hairMale1,hairMale2,hairMale3],
        hairArrFemale = [hairFemale1,hairFemale2,hairFemale3],
        clothesArrMale = [clothesMale1,clothesMale2,clothesMale3],
        clothesArrFemale = [clothesFemale1,clothesFemale2,clothesFemale3];

    sex[0].addEventListener( 'click', function () {
        personSkin.style.background = 'url("img/skin/skin-1.png") center no-repeat';
        personSkin.style.backgroundSize = 'cover';
        personHair.style.background = 'url("img/hair/construct/hair-1.png") center no-repeat';
        personHair.style.backgroundSize = 'cover';
        personClothes.style.background = 'url("img/clothes/construct/clothes-1.png") center no-repeat';
        personClothes.style.backgroundSize = 'cover';
        sexVal = sex[0].value;

        for ( let i = 0; i < skinSlides.length; i++ ) {
            skinSlides[i].style.display = 'none';
        }
        skinSlides[0].style.display = 'block';

        for ( let i = 0; i < hairSlides.length; i++ ) {
            hairSlides[i].style.display = 'none';
        }
        hairSlides[0].style.display = 'block';

        for ( let i = 0; i < clothesSlides.length; i++ ) {
            clothesSlides[i].style.display = 'none';
        }
        clothesSlides[0].style.display = 'block';

        skinSlideIndex = 1;
        hairSlideIndex = 1;
        clothesSlideIndex = 1;
    });

    sex[1].addEventListener( 'click', function () {
        personSkin.style.background = 'url("img/skin/skin-4.png") center no-repeat';
        personSkin.style.backgroundSize = 'cover';
        personHair.style.background = 'url("img/hair/construct/hair-4.png") center no-repeat';
        personHair.style.backgroundSize = 'cover';
        personClothes.style.background = 'url("img/clothes/construct/clothes-4.png") center no-repeat';
        personClothes.style.backgroundSize = 'cover';
        sexVal = sex[1].value;

        for ( let i = 0; i < skinSlides.length; i++ ) {
            skinSlides[i].style.display = 'none';
        }
        skinSlides[0].style.display = 'block';

        for ( let i = 0; i < hairSlides.length; i++ ) {
            hairSlides[i].style.display = 'none';
        }
        hairSlides[3].style.display = 'block';

        for ( let i = 0; i < clothesSlides.length; i++ ) {
            clothesSlides[i].style.display = 'none';
        }
        clothesSlides[3].style.display = 'block';

        skinSlideIndex = 1;
        hairSlideIndex = 4;
        clothesSlideIndex = 4;
    });


// Слайдер

    let prev = document.getElementsByClassName( 'prev' ),
        next = document.getElementsByClassName( 'next' );

    showSkinSlides( skinSlideIndex );

    function showSkinSlides ( n ) {

        if ( sex[0].checked) {
            if ( n > skinSlides.length ) {
                skinSlideIndex = 1;
            }
            if ( n < 1 ) {
                skinSlideIndex = skinSlides.length;
            }
            for ( let i = 0; i < skinSlides.length; i++ ) {
                skinSlides[i].style.display = 'none';
            }
            skinSlides[skinSlideIndex - 1].style.display = 'block';
            skinArrMale[skinSlideIndex - 1]();
        }
        if ( sex[1].checked ) {
            if ( n > skinSlides.length ) {
                skinSlideIndex = 1;
            }
            if ( n < 1 ) {
                skinSlideIndex = skinSlides.length;
            }
            for ( let i = 0; i < skinSlides.length; i++ ) {
                skinSlides[i].style.display = 'none';
            }
            skinSlides[skinSlideIndex - 1].style.display = 'block';
            skinArrFemale[skinSlideIndex - 1]();
        }
    }

    function plusSkinSlides ( n ) {
        showSkinSlides( skinSlideIndex += n );
    }

    prev[0].addEventListener ('click', function () {
        plusSkinSlides(-1);
    });
    next[0].addEventListener( 'click', function () {
        plusSkinSlides(1);
    });

    showHairSlides( hairSlideIndex );

    function showHairSlides ( n ) {

        if ( sex[0].checked ) {
            if ( n > hairSlides.length - 3 ) {
                hairSlideIndex = 1;
            }
            if ( n < 1 ) {
                hairSlideIndex = hairSlides.length - 3;
            }
            for ( let i = 0; i < hairSlides.length; i++ ) {
                hairSlides[i].style.display = 'none';
            }
            hairSlides[hairSlideIndex - 1].style.display = 'block';
            hairArrMale[hairSlideIndex - 1]();
        }
        if ( sex[1].checked ) {
            if ( n > hairSlides.length ) {
                hairSlideIndex = 4;
            }
            if ( n < 4 ) {
                hairSlideIndex = hairSlides.length;
            }
            for ( let i = 0; i < hairSlides.length; i++ ) {
                hairSlides[i].style.display = 'none';
            }
            hairSlides[hairSlideIndex - 1].style.display = 'block';
            hairArrFemale[hairSlideIndex - 1 - 3]();
        }
    }
    function plusHairSlides ( n ) {
        showHairSlides( hairSlideIndex += n );
    }
    prev[1].addEventListener ( 'click', function () {
        plusHairSlides(-1);
    });
    next[1].addEventListener( 'click', function () {
        plusHairSlides(1);
    });

    showClothesSlides( clothesSlideIndex );

    function showClothesSlides ( n ) {

        if ( sex[0].checked ) {
            if ( n > clothesSlides.length - 3 ) {
                clothesSlideIndex = 1;
            }
            if ( n < 1 ) {
                clothesSlideIndex = clothesSlides.length - 3;
            }
            for ( let i = 0; i < clothesSlides.length; i++ ) {
                clothesSlides[i].style.display = 'none';
            }
            clothesSlides[clothesSlideIndex - 1].style.display = 'block';
            clothesArrMale[clothesSlideIndex - 1]();
        }
        if ( sex[1].checked ) {
            if ( n > clothesSlides.length ) {
                clothesSlideIndex = 4;
            }
            if ( n < 4 ) {
                clothesSlideIndex = clothesSlides.length;
            }
            for ( let i = 0; i < clothesSlides.length; i++ ) {
                clothesSlides[i].style.display = 'none';
            }
            clothesSlides[clothesSlideIndex - 1].style.display = 'block';
            clothesArrFemale[clothesSlideIndex - 1 - 3]();
        }

    }
    function plusClothesSlides ( n ) {
        showClothesSlides( clothesSlideIndex += n );
    }
    prev[2].addEventListener ( 'click', function () {
        plusClothesSlides(-1);
    });
    next[2].addEventListener( 'click', function () {
        plusClothesSlides(1);
    });


    let card = mainCards.children[0].cloneNode(true),
        fio = card.querySelector('.name'),
        age = card.querySelector('.age'),
        gender = card.querySelector('.sex'),
        views = card.querySelector('.views'),
        bio = card.querySelector('.bio'),
        candidate_photo = card.querySelector('.photo'),
        photoSkin = candidate_photo.querySelector('.person-skin'),
        photoHair = candidate_photo.querySelector('.person-hair'),
        photoClothes = candidate_photo.querySelector('.person-clothes'),
        photoShoes = candidate_photo.querySelector('.person-shoes'),
        resultCounts = document.getElementsByClassName('result-count'),
        progressBars = document.getElementsByClassName('progress-bar');

    readyBtn.addEventListener('click', function() {
        let valid = true;
        if (candidate_name.value !== '' && isNaN(+candidate_name.value)) {
            document.querySelector("#name").style.border = "none";
        } else {
            document.querySelector("#name").style.border = "1px solid red";
            alert('Пожалуйста, введите имя');
            valid = false;
        }
        if (candidate_age.value !== '' && !isNaN(+candidate_age.value) && + candidate_age.value >= 30 && + candidate_age.value <= 85) {
            document.querySelector("#age").style.border = "none";
        } else {
            document.querySelector("#age").style.border = "1px solid red";
            alert('Возраст кандидата должен быть от 30 до 85 лет');
            valid = false;
        }
        if (candidate_bio.value !== '' && isNaN(+candidate_bio.value)) {
            document.querySelector("#bio").style.border = "none";
        } else {
            document.querySelector("#bio").style.border = "1px solid red";
            alert('Пожалуйста, заполните поле с биографией!');
            valid = false;
        }
        if (!valid) {
            return;
        }
        main.style.display = 'block';
        mainCards.classList.add('fadein');
        mainCards.classList.remove('fadeOut');
        custom.style.display = 'none';
        customInfo.style.display = 'none';
        customChar.style.display = 'none';
        customStyle.style.display = 'none';

        card.classList.remove('main-cards-item-active');
        mainCards.children[0].classList.remove('main-cards-item-active');

        mainCards.insertBefore(card, mainCards.children[1]);

        fio.textContent = candidate_name.value;
        age.textContent = candidate_age.value + " лет";
        gender.textContent = sexVal;
        views.textContent = candidate_select.value;
        bio.textContent = candidate_bio.value;
        candidate_photo.style.background = "none";
        photoSkin.style.background = personSkin.style.background;
        photoHair.style.background = personHair.style.background;
        photoClothes.style.background = personClothes.style.background;
        photoShoes.style.background = 'url("img/clothes/construct/shoes.png") center no-repeat';
        photoShoes.style.backgroundSize = 'cover';

        for (let i = 0; i < resultCounts.length; i++) {

            resultCounts[i].textContent = 0 + "%";
            progressBars[i].style.height = '0%';

        }
    });

    let resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', function() {
        start();
        candidate_name.value = "";
        candidate_age.value = "";
        candidate_select.value = customInfo.querySelector('#select').children[0];
        candidate_bio.value = "";
        candidate_name.style.border = 'none';
        candidate_age.style.border = 'none';
        candidate_bio.style.border = 'none';

    });

    let votingBtn = document.getElementById('voting'),
        total;
    votingBtn.addEventListener('click', function() {
        total = 100;
        for (let i = 0; i < resultCounts.length; i++) {

            if (i == (resultCounts.length - 1)) {
                if (total > 98 || total < 1) {
                    i = 0;
                    total = 100;
                } else {
                    resultCounts[i].textContent = total + "%";
                    progressBars[i].style.height = (total * 1.6) + 'px';
                }
            } else {
                let num = Math.floor(Math.random() * total);
                while (num > 98 || num < 1) {
                    num = Math.floor(Math.random() * total);
                }
                total -= num;
                resultCounts[i].textContent = num + "%";
                progressBars[i].style.height = (num * 1.6 ) + 'px';
            }
        }
    });

    let crimeBtn = document.getElementById('crime');
    crimeBtn.addEventListener('click', function() {
        total = 75;
        for (let i = 0; i < resultCounts.length; i++) {
            if (i == (resultCounts.length - 1)) {
                if (total > 98 || total < 1) {
                    i = 0;
                    total = 100;
                } else {
                    resultCounts[i].textContent = total + "%";
                    progressBars[i].style.height = (total * 1.6) + 'px';
                }
            } else if (i == 1) {
                let num = Math.floor(Math.random() * total);
                while (num > 98 || num < 1) {
                    num = Math.floor(Math.random() * total);
                }
                total -= num;
                resultCounts[i].textContent = num + 25 + "%";
                progressBars[i].style.height = ((num + 25) * 1.6 ) + 'px';
            } else {
                let num = Math.floor(Math.random() * total);
                while (num > 98 || num < 1) {
                    num = Math.floor(Math.random() * total);
                }
                total -= num;
                resultCounts[i].textContent = num + "%";
                progressBars[i].style.height = (num * 1.6 ) + 'px';
            }
        }
    });
});