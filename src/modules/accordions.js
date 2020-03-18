const accordions = () => {

    const firstAcc = document.querySelector('#accordion'),
          secondAcc = document.querySelector('#accordion-two'),
          allHeadingPanel = document.querySelectorAll('a[role="button"]'),
          allCollapsePanel = document.querySelectorAll('.panel-collapse'),
          collapsePanelBtn = document.querySelectorAll('.construct-btn');
    
    const toggleAcc = index => {
    
        for (let i = 0; i < allCollapsePanel.length; i++) {
          if (index === i) {
            allCollapsePanel[i].classList.toggle('in');
          } else {
            allCollapsePanel[i].classList.remove('in');
          }
        }
      };
    
      const toggleBtn = index => {
    
        for (let i = 0; i < allCollapsePanel.length; i++) {
          if (index === i) {
            i++;
            allCollapsePanel[i].classList.add('in');
          }
        };
      };
    
      firstAcc.addEventListener('click', event => {
    
        let target = event.target;
    
        target = target.closest('a[role="button"]')
    
        if (target) {
    
          allHeadingPanel.forEach((item, i) => {
            if (item === target) {
              toggleAcc(i);
            }
          });
        }
    
        target = event.target;
        while (target !== firstAcc) {
          if (target.classList.contains('construct-btn')) {
            
            collapsePanelBtn.forEach((item, i) => {
              if (item === target) {
                toggleBtn(i);
              }
            });
          };
    
          target = target.parentNode;
        };
      });
    
      secondAcc.addEventListener('click', event => {
    
        let target = event.target;
    
        if (target.closest('a[role="button"]')) {
    
          allHeadingPanel.forEach((item, i) => {
            if (item === target) {
              toggleAccord(i);
            }
          });
        }
      });
    
    };

export default accordions;    