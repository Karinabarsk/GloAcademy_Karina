'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';

import countTimer from './modules/counttimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendform';



countTimer('28 april 2020');


// menu

toggleMenu();

// 

togglePopup();

//

tabs();

// слайдер

slider();

//

calc(100);

//
 
sendForm(); 