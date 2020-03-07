const toggleMenu = () => {


    const menu = document.querySelector('menu');

      document.addEventListener('click', (event) => {
         let target = event.target;
         if (target = target.closest('.menu')) {
            menu.classList.add('active-menu');
         } else {
            target = event.target;
            if (menu.classList.contains('active-menu')) {
               if (target !== target.closest('.active-menu')) {
                  menu.classList.remove('active-menu');
               } else {
                  if (target !== target.closest('.active-menu')) {
                     menu.classList.remove('active-menu');
                  }
               }
            }
            return;
         }
      });


};

export default toggleMenu;