function toggleMenu() {
    const nav = document.getElementById("nav");
    const main = document.querySelector("main");

    nav.classList.toggle("active");
    main.classList.toggle("inactive");
  }
function toogleMenu(){
    const nav = document.getElementById("nav");
    const subtitle = document.querySelector(".subtitle");

    nav.classList.toggle("active");
    subtitle.classList.toggle("oculta")
}
