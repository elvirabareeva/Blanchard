window.addEventListener('DOMContentLoaded', () =>{

/*Табы*/

const tabs = document.querySelector('.tabs');

if (tabs){
    tabs.addEventListener('click', (e) =>{
        if(e.target.classList.contains('tabs__btn')){
            const tabsPath = e.target.dataset.tabsPath;
            console.log(tabsPath)
        }
    });
}


/* Dropdown*/

const bottomNavLink = document.querySelectorAll('.bottom-navigation__link');
const scrollCont = document.querySelectorAll('.scroll-container');
const navArrow = document.querySelectorAll('.bottom-navigation__arrow');

bottomNavLink.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
        
      const scrollContClassList = scrollCont[index].classList;
      if (scrollContClassList.contains('scroll-container_is-active')) {
        scrollContClassList.remove('scroll-container_is-active')
        navArrow[index].classList.remove('bottom-navigation__arrow_is-active')

        } else {
            scrollCont.forEach((el) => el.classList.remove('scroll-container_is-active'))
          scrollContClassList.add('scroll-container_is-active')
          navArrow[index].classList.add('bottom-navigation__arrow_is-active')
        }
    })
  
  })


  bottomNavLink.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
        
      const bottomNavLinkClassList = bottomNavLink[index].classList;
      if (bottomNavLinkClassList.contains('bottom-navigation__link_is-active')) {
        bottomNavLinkClassList.remove('bottom-navigation__link_is-active')
        } else {
            bottomNavLinkClassList.remove('bottom-navigation__link_is-active')
            bottomNavLinkClassList.add('bottom-navigation__link_is-active')
          
        }
    })
  
  })
});
