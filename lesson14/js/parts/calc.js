function calc() {

    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalVaiue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalVaiue.innerHTML = 0;


    persons.addEventListener('change', function () {
        persons.value = Math.ceil(Math.abs(persons.value));
        personSum = +this.value;
        total = (daysSum + personSum)*4000;
        if (restDays.value <= 0 || persons.value <= 0 ){
            totalVaiue.innerHTML = 0;
        } else {
            totalVaiue.innerHTML = total;
        }
    });
    restDays.addEventListener('change', function () {
        restDays.value = Math.ceil(Math.abs(restDays.value));
        daysSum = +this.value;
        total = (daysSum + personSum)*4000;
        if (persons.value <= 0 || restDays.value <= 0){
            totalVaiue.innerHTML = 0;
        } else {
            totalVaiue.innerHTML = total;
        }
    });
    place.addEventListener('change', function () {
        if (restDays.value <= 0 || persons.value <= 0 ){
            totalVaiue.innerHTML = 0;
        } else {
            let a = total;
            totalVaiue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}
module.exports = calc;