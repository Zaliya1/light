import timer from './modules/timer.js';
import menu from './modules/menu';
import modal from './modules/modal';
import calculate from './modules/calculate';
import validateForm from './modules/validateForm';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('31 march 2022');
menu();
modal();
calculate(100);
validateForm();
tabs();
const classes = {
    class1: 'portfolio-item',
    class2: 'portfolio-item-active',
    class3: 'portfolio-content',
    class4: 'portfolio-dots',
    class5: 'dot',
    class6: 'dot-active',
};
slider(classes);