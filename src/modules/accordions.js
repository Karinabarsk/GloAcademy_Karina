const accordions = () => {

  const accordion = document.getElementById('accordion');
  const accordionTwo = document.getElementById('accordion-two');
  
  const accordionList = [accordion, accordionTwo];
  
  accordionList.forEach((accordion) => {
      
      const panelHeadingSelector = '.panel-heading';
      const panelCollapseSelector = '.panel-collapse';
      const panelDefaultSelector = '.panel-default';
      const nextBtnSelector = 'a.construct-btn';
      
      const addedClass = 'in';
      
      const panelHeadingList = accordion.querySelectorAll(panelHeadingSelector);
      const panelCollapseList = accordion.querySelectorAll(panelCollapseSelector);
      const nextBtnList = accordion.querySelectorAll(nextBtnSelector);
      
      const listenerPanelAccordion = (event) => {
          
          event.preventDefault();
          
          const panelDefault = event.currentTarget.closest(panelDefaultSelector);
          const currentPanelCollapse = panelDefault.querySelector(panelCollapseSelector);
          
          panelCollapseList.forEach( (panelCollapse) => {
              
              if(panelCollapse !== currentPanelCollapse && 
                  panelCollapse.classList.contains(addedClass)){
                      
                  panelCollapse.classList.remove(addedClass);
                  
              }
              
          });
          
          currentPanelCollapse.classList.toggle(addedClass);
          
      };
      
      const listenerNextBtnAccordion = (event) => {
    
    event.preventDefault();
      
          let nextPanelCollapseFound = false;
          
          panelCollapseList.forEach( (panelCollapse) => {
              
              if(nextPanelCollapseFound){
                  panelCollapse.classList.add(addedClass);
                  nextPanelCollapseFound = false;
              }
              else if(panelCollapse.classList.contains(addedClass)){
                  panelCollapse.classList.remove(addedClass);
                  nextPanelCollapseFound = true;
              }
              
          });
          
      };
      
      panelHeadingList.forEach((panelHeading) => {
          panelHeading.addEventListener('click', listenerPanelAccordion);
      });
      
      nextBtnList.forEach((nextBtn) => {
          nextBtn.addEventListener('click', listenerNextBtnAccordion);
      });
      
      
  });
  
  
};

export default accordions;    