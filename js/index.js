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


/*Dropdown Menu*/


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
        bottomNavLink[index].classList.remove('bottom-navigation__link_is-active')


        } else {
            scrollCont.forEach((el) => el.classList.remove('scroll-container_is-active'))
          scrollContClassList.add('scroll-container_is-active')
          navArrow.forEach((el) => el.classList.remove('bottom-navigation__arrow_is-active'))
          navArrow[index].classList.add('bottom-navigation__arrow_is-active')
          bottomNavLink.forEach((el) => el.classList.remove('bottom-navigation__link_is-active'))
          bottomNavLink[index].classList.add('bottom-navigation__link_is-active')
        }
    });


  });




  window.onclick = function(event) {
    if (!event.target.matches('.bottom-navigation__link')) {
      let dropdowns = document.getElementsByClassName('scroll-container');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('scroll-container_is-active')) {
          openDropdown.classList.remove('scroll-container_is-active');
        }
      }

    }

    if (!event.target.matches('.bottom-navigation__link')) {
      let dropArrows = document.getElementsByClassName('bottom-navigation__arrow');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('bottom-navigation__arrow_is-active')) {
          openDropdown.classList.remove('bottom-navigation__arrow_is-active');
        }
      }

    }

    if (!event.target.matches('.bottom-navigation__link')) {
      let dropArrows = document.getElementsByClassName('bottom-navigation__link');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('bottom-navigation__link_is-active')) {
          openDropdown.classList.remove('bottom-navigation__link_is-active');
        }
      }

    }
  }






});
