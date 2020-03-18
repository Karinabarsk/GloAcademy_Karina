const panelAcordion = () => {

    let acc = document.querySelectorAll('.panel-heading');
    let panel = document.querySelectorAll('.panel-collapse');
   
    panel[0].classList.add('show');
    panel[0].classList.add('in');
   
   for(let i = 0; i < acc.length; i++){
     acc[i].onclick = function () {
       for(let x = 0; x < panel.length; x++){
         panel[x].classList.remove('show');
         panel[x].classList.remove('in');
       }
       this.nextElementSibling.classList.toggle('show');
       this.nextElementSibling.classList.toggle('in');
     };
   
   }
   
   };

   export default panelAcordion;