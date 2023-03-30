let heroButtons = document.querySelectorAll(".characters a"),
    lightbox = document.querySelector('#lightbox');

function loadHeroData() {
    // debugger;
    lightbox.querySelector(".name").textContent = member[this.dataset.member].name;
    lightbox.querySelector('h3').textContent = member[this.dataset.member].headline;
    
    lightbox.querySelector(".bio").textContent = member[this.dataset.member].bio;

    lightbox.querySelector(".faveColor").textContent = member[this.dataset.member].faveColor;

    // heroes[this.dataset.member].headline 
}


heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));