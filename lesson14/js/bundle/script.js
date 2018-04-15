window.addEventListener('DOMContentLoaded', function () {
    let tabs = require('../parts/tabs');
    let timer = require('../parts/timer');
    let forms = require('../parts/forms');
    let slider = require('../parts/slider');
    let modal = require('../parts/modal');
    let calc = require('../parts/calc');

    tabs();
    modal();
    forms();
    slider();
    calc();
    timer();

});
