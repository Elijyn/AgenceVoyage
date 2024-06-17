var cat1 = document.getElementById("categorie1");
var cat2 = document.getElementById("categorie2");
var cat3 = document.getElementById("categorie3");
var burger = document.getElementById("menu-burger");
var nav = document.getElementById("navbar");

cat1.addEventListener("click", function() {
    this.classList.add("categorie-clicked");
    cat2.classList.remove("categorie-clicked");
    cat3.classList.remove("categorie-clicked");
});

cat2.addEventListener("click", function() {
    this.classList.add("categorie-clicked");
    cat1.classList.remove("categorie-clicked");
    cat3.classList.remove("categorie-clicked");
});

cat3.addEventListener("click", function() {
    this.classList.add("categorie-clicked");
    cat1.classList.remove("categorie-clicked");
    cat2.classList.remove("categorie-clicked");
});

burger.addEventListener("click", function() {
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
    } else {
        nav.classList.add("hidden");
    }
});