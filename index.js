window.addEventListener('DOMContentLoaded', function(){

    const navArtItems = document.querySelectorAll('.nav-art-item');
    const scrollContainers = document.querySelectorAll('.scroll-container');

    navArtItems.forEach((navArtItem) => navArtItem.addEventListener(`click`, function(){
        scrollContainers.forEach((scrollContainer) => scrollContainer.classList.toggle('is-active'))
    }))
});