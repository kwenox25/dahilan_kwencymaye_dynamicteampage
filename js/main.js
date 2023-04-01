let heroButtons = document.querySelectorAll(".characters a"),
    lightbox = document.querySelector('#lightbox');

function loadHeroData() {
    // debugger;
    lightbox.querySelector(".name").textContent = member[this.dataset.member].name;
    lightbox.querySelector('h3').textContent = member[this.dataset.member].headline;
    
    lightbox.querySelector(".bio").textContent = member[this.dataset.member].bio;

    lightbox.querySelector(".skills").textContent = member[this.dataset.member].skills;
    lightbox.querySelector(".skills2").textContent = member[this.dataset.member].skills2;

    lightbox.style.display = 'block';
}

function hideLightbox(event) {
    if (!event.target.closest('#lightbox-content')) {
      lightbox.style.display = 'none';
    }
  }

heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));
lightbox.addEventListener('click', hideLightbox);