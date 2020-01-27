'use strickt';

let lang = 'ru';

if (lang == 'ru' ) {
    console.log ('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}
if (lang == 'en' ) {
    console.log ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
    case 'ru':
        console.log ('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
    case 'en':
        console.log ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');    
    break;
    }

let day = [
    ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'], 
    ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'] 
];
      if (lang == 'ru') {
          console.log(day[0]); 
      } else if (lang == 'en') {
          console.log(day[1]);
      } 

    let name = prompt('Введите имя', 'Максим');

    let namePerson = (name == 'Артём') ? console.log('директор'): (name == 'Максим') ? console.log ('преподаватель'): console.log('студент');