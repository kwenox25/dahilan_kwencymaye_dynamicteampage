console.log("js is running");

let characterImg = document.querySelectorAll(".characters a"),
    lightbox = document.querySelector('#lightbox');

function loadMemberData() {
    if (lightbox.style.display == 'block' && this.dataset.member == lightbox.dataset.member) {
        lightbox.style.display = 'none';
        return;
    }
    lightbox.querySelector(".role").textContent = member[this.dataset.member].role;
    lightbox.querySelector('h3').textContent = member[this.dataset.member].headline;
    lightbox.querySelector(".bio").textContent = member[this.dataset.member].bio;
    lightbox.querySelector(".skills").textContent = member[this.dataset.member].skills;
    lightbox.querySelector(".skills2").textContent = member[this.dataset.member].skills2;

    lightbox.style.display = 'block';
    lightbox.dataset.member = this.dataset.member;
    console.log("Displaying bio of", this.dataset.member);
}


characterImg.forEach(hero => hero.addEventListener('click', loadMemberData));
