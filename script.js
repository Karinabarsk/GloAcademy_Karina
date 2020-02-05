'use strict';

let numberBooks = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');

console.log (numberBooks, book);    

numberBooks[0].insertBefore(book[1], book [0]);
numberBooks[0].insertBefore(book[4], book [2]);
numberBooks[0].insertBefore(book[2], book [5]);
numberBooks[0].insertBefore(book[5], book [2]);

let body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

book[4].childNodes[1].children[0].innerHTML = 'Книга 3. this и Прототипы Объектов';

let promotion = document.querySelector('.adv');
console.log (promotion);
    promotion.remove();

   
   let chap = document.querySelectorAll('ul'),
   chapterTwo = chap[1],
   chapterFive = chap[4],
   itemChapterTwo = chapterTwo.children,
   itemChapterFive = chapterFive.children;

  chapterTwo.insertBefore(itemChapterTwo[6], itemChapterTwo[4]);
  chapterTwo.insertBefore(itemChapterTwo[8], itemChapterTwo[5]);
  chapterTwo.insertBefore(itemChapterTwo[2], itemChapterTwo[10]);
  
  chapterFive.insertBefore(itemChapterFive[9], itemChapterFive[2]);
  chapterFive.insertBefore(itemChapterFive[3], itemChapterFive[6]);
  chapterFive.insertBefore(itemChapterFive[6], itemChapterFive[9]);

  let newElement = document.createElement ('ul');
      newElement.textContent = 'Глава 8: За пределами ES6';
      book[2].appendChild(newElement);

  let del = document.querySelectorAll('ul'), 
    chapterSix = del[5],
    itemChapterSix = chapterSix.children; 
    chapterSix.removeChild(itemChapterSix[9]);
   