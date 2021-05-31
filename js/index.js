window.addEventListener('DOMContentLoaded', () =>{

  const element = document.querySelector('.selectCustom');
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
    });



     var mySwiper = new Swiper('.hero-swiper-container', {
      // Optional parameters
      slidesPerView: 'auto',
      speed: 800,
      effect: 'fade',
      slideActiveClass: ('hero-swiper-slide-active'),
      allowTouchMove: true,
      autoplay: {
        delay: 10000,
      },

    });

    var mySwiper = new Swiper('.publications-swiper-container', {
      // Optional parameters
      slideClass: ('publications-swiper-slide'),
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      speed: 600,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
    var mySwiper = new Swiper('.galery-swiper-container', {
      // Optional parameters
      slideClass: ('galery-swiper-slide'),
      slidesPerGroup: 3,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      speed: 600,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });


    var mySwiper = new Swiper('.partners-swiper-container', {
      // Optional parameters
      slideClass: ('partners-swiper-slide'),
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: '.partners-swiper-button-next',
        prevEl: '.partners-swiper-button-prev',
      },

      speed: 600,

    });


    $(function () {
      $(".artist-accordeon").accordion();
    });


    $(function () {
      $(".artist-accordeon").accordion({
        active: false
      });
    });


    $(function () {
      var icons = {
        header: "arrow-down",
        activeHeader: "arrow-up"
      };
      $(".artist-accordeon").accordion({
        icons: icons
      });
      $("#toggle").button().on("click", function () {
        if ($(".artist-accordeon").accordion("option", "icons")) {
          $(".artist-accordeon").accordion("option", "icons", null);
        } else {
          $(".artist-accordeon").accordion("option", "icons", icons);
        }
      });
    });


    $(".artist-accordeon").accordion({
      heightStyle: "content"
    });


    $(".artist-accordeon").accordion("refresh");




    type = "text/javascript" >
      $(function () {
        $("a[href^='#']").click(function () {
          var _href = $(this).attr("href");
          $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
          });
          return false;
        });
      });





    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {
      // Создание карты.
      var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.758463, 37.601079],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
        controls: [],
        autoFitToViewport: 'always',
        suppressMapOpenBlock: false,
        suppressObsoleteBrowserNotifier: false,
      });


      var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-point.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
      });

      myMap.geoObjects
        .add(myPlacemark)

    };
//Табы-страны

const tabs = document.querySelector('.tabs');
const tabsBtn = document.querySelectorAll('.tabs__btn')
const tabsContent = document.querySelectorAll('.tabs-content')

if (tabs){
    tabs.addEventListener('click', (e) =>{
        if(e.target.classList.contains('tabs__btn')){
            const tabsPath = e.target.dataset.tabsPath;

          tabsHandler(tabsPath);
        }
    });
}

const tabsHandler = (path) => {
  tabsBtn.forEach(el => {el.classList.remove('tabs__btn_active')});
  document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn_active');

  tabsContent.forEach(el => {el.classList.remove('tabs-content_active')});
  document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content_active');
};

// Табы внутри аккордеона

const artTabs = document.querySelector('.artist-tabs');
const artBtn = document.querySelectorAll('.artist-accordeon__btn')
const artistInfo = document.querySelectorAll('.artist__info')

if (artTabs){
  artTabs.addEventListener('click', (e) =>{
        if(e.target.classList.contains('artist-accordeon__btn')){
            const artPath = e.target.dataset.artPath;

          artHandler(artPath);
        }
    });
}
console.log(artBtn);
const artHandler = (path) => {
  artBtn.forEach(el => {el.classList.remove('artist-accordeon__btn_active')});
  document.querySelector(`[data-art-path="${path}"]`).classList.add('artist-accordeon__btn_active');

  artistInfo.forEach(el => {el.classList.remove('artist__info_active')});
  document.querySelector(`[data-art-target="${path}"]`).classList.add('artist__info_active');
};



const artTabsRussia = document.querySelector('.russia-artist-tabs');
const artBtnRussia = document.querySelectorAll('.russia-artist-accordeon__btn')
const artistInfoRussia = document.querySelectorAll('.russia-artist__info')

if (artTabsRussia){
  artTabsRussia.addEventListener('click', (e) =>{
        if(e.target.classList.contains('russia-artist-accordeon__btn')){
            const artPath = e.target.dataset.artPath;

          artHandlerRussia(artPath);
        }
    });
}
console.log(artBtnRussia);
const artHandlerRussia = (path) => {
  artBtnRussia.forEach(el => {el.classList.remove('russia-artist-accordeon__btn_active')});
  document.querySelector(`[data-art-path="${path}"]`).classList.add('russia-artist-accordeon__btn_active');

  artistInfoRussia.forEach(el => {el.classList.remove('russia-artist__info_active')});
  document.querySelector(`[data-art-target="${path}"]`).classList.add('russia-artist__info_active');
};


const artTabsFrance = document.querySelector('.france-artist-tabs');
const artBtnFrance = document.querySelectorAll('.france-artist-accordeon__btn')
const artistInfoFrance = document.querySelectorAll('.france-artist__info')

if (artTabsFrance){
  artTabsFrance.addEventListener('click', (e) =>{
        if(e.target.classList.contains('france-artist-accordeon__btn')){
            const artPath = e.target.dataset.artPath;

          artHandlerFrance(artPath);
        }
    });
}
console.log(artBtnFrance);
const artHandlerFrance = (path) => {
  artBtnFrance.forEach(el => {el.classList.remove('france-artist-accordeon__btn_active')});
  document.querySelector(`[data-art-path="${path}"]`).classList.add('france-artist-accordeon__btn_active');

  artistInfoFrance.forEach(el => {el.classList.remove('france-artist__info_active')});
  document.querySelector(`[data-art-target="${path}"]`).classList.add('france-artist__info_active');
};


const artTabsGermany = document.querySelector('.germany-artist-tabs');
const artBtnGermany = document.querySelectorAll('.germany-artist-accordeon__btn')
const artistInfoGermany = document.querySelectorAll('.germany-artist__info')

if (artTabsGermany){
  artTabsGermany.addEventListener('click', (e) =>{
        if(e.target.classList.contains('germany-artist-accordeon__btn')){
            const artPath = e.target.dataset.artPath;

          artHandlerGermany(artPath);
        }
    });
}

const artHandlerGermany = (path) => {
  artBtnGermany.forEach(el => {el.classList.remove('germany-artist-accordeon__btn_active')});
  document.querySelector(`[data-art-path="${path}"]`).classList.add('germany-artist-accordeon__btn_active');

  artistInfoGermany.forEach(el => {el.classList.remove('germany-artist__info_active')});
  document.querySelector(`[data-art-target="${path}"]`).classList.add('germany-artist__info_active');
};

const artTabsBelgium = document.querySelector('.belgium-artist-tabs');
const artBtnBelgium = document.querySelectorAll('.belgium-artist-accordeon__btn')
const artistInfoBelgium = document.querySelectorAll('.belgium-artist__info')

if (artTabsBelgium){
  artTabsBelgium.addEventListener('click', (e) =>{
        if(e.target.classList.contains('belgium-artist-accordeon__btn')){
            const artPath = e.target.dataset.artPath;

          artHandlerBelgium(artPath);
        }
    });
}

const artHandlerBelgium = (path) => {
  artBtnBelgium.forEach(el => {el.classList.remove('belgium-artist-accordeon__btn_active')});
  document.querySelector(`[data-art-path="${path}"]`).classList.add('belgium-artist-accordeon__btn_active');

  artistInfoBelgium.forEach(el => {el.classList.remove('belgium-artist__info_active')});
  document.querySelector(`[data-art-target="${path}"]`).classList.add('belgium-artist__info_active');
};


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


  window.addEventListener('click', (event) => {
    event.preventDefault();
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
  })

  /* Кнопка Все события*/


  const moreBtn = document.querySelector('.more-btn');
  const eventsMore = document.querySelectorAll('.events-more')


if (moreBtn){
  moreBtn.addEventListener('click', (e) =>{
    if(moreBtn.style.display === "none"){
      moreBtn.style.display="inline";
      eventsMore.style.display="none";

    }else {
      moreBtn.style.display="none";
      eventsMore.forEach(el => {el.classList.add('events-more_active')});
    }

    });
}








});

