'use strickt';


let hello = function (quest) {

    quest = prompt('Ввeдите слово');
    quest = quest.trim();

    if (isNaN(quest) || quest == null) {
       console.log('ōk');
    } else {
        alert('Ошибка! Вы ввели число!!!');
    }   
    if (quest.length <= 30)
    
    return quest;
    
    quest = quest.slice(0, 30) + '...';
    
    return quest;
}

console.log(hello());

