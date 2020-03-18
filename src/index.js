'use strict';

import "@babel/polyfill"; // Полифил babel
import 'nodelist-foreach-polyfill'; // Полифил forEach
import elementClosest from 'element-closest'; // Полифил closest
elementClosest(window);
import 'formdata-polyfill'; // Полифил formData
import 'es6-promise'; // Полифил Promise


import popup from './modules/popup';
import sendForm from './modules/sendForm';
import panelAcordion from './modules/panelAcordion';
import accordions from './modules/accordions';
import createBlock from './modules/createBlock';
import addListenerForСalculateCost from './modules/calc';
import btnMore from './modules/btnMore';
import discount from './modules/discount';
import checkList from './modules/checkList';
import consultation from './modules/consultation';
import addElementToObj from './modules/addElementToObj';


//Перезвоните мне

popup();

// Отправка форм

sendForm();
  
//Аккордион

panelAcordion();

//Кнопка следующий шаг

accordions();

// Удаление блока

createBlock();

// Калькулятор

addListenerForСalculateCost();

// Кнопка больше

btnMore ();

// Узнать цену и скидку

discount();

// Получить чек-лист и скидку

checkList();

// Консультация

consultation();

//

addElementToObj();


