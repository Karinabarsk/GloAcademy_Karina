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

let day = {
        'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
        'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
    };
    console.log (day[lang]);

    let name = prompt('Введите имя', 'Максим');

    let namePerson = (name == 'Артём') ? console.log('директор'): (name == 'Максим') ? console.log ('преподаватель'): console.log('студент');