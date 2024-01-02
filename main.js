document.addEventListener('DOMContentLoaded', () => {


// ===== START OF WINDOW SCROLL ANIMATION =====
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window_scroll_nav', window.scrollY > 600);



        if(window.scrollY >= 600) {
            document.querySelectorAll('nav a').forEach( function(link) {
                link.style.color="#fff";
            });

        }else{
            document.querySelectorAll('nav a').forEach( function(link) {
                link.style.color="#000";
            });

        };
    });
// ===== END OF WINDOW SCROLL ANIMATION =====


// ===== START OF NAVIGATION BUTTON OPEN/CLOSE =====
const barsIcon = document.querySelector('#bars'),
    timesIcon = document.querySelector('#times'),
    navUl = document.querySelector('nav div ul');


barsIcon.addEventListener("click", () => {
    barsIcon.style.display='none';
    timesIcon.style.display='inline-block';
    navUl.style.display='block';
});

const closeNav = () => {
    timesIcon.style.display='none';
    barsIcon.style.display='inline-block';
    navUl.style.display='none';
};

timesIcon.addEventListener("click", closeNav);


if(window.innerWidth < 769){
    document.querySelectorAll('nav ul li a').forEach(navItem => {
        navItem.addEventListener('click', closeNav);
    });
}

// ===== END OF NAVIGATION BUTTON OPEN/CLOSE =====







// ===== START OF PORTFOLIO SECTION =====
let websiteBtn = document.getElementById("websiteBtn"),
    appsBtn = document.getElementById("appsBtn"),
    formBtn = document.getElementById("formBtn");

// let website = document.getElementById("website"),
//     apps = document.getElementById("apps"),
//     form = document.getElementById("form");
    

websiteBtn.addEventListener("click", () => {
    websiteBtn.style.background="#faca10";
    appsBtn.style.background="transparent";
    formBtn.style.background="transparent";
});

appsBtn.addEventListener("click", () => {
    appsBtn.style.background="#faca10";
    websiteBtn.style.background="transparent";
    formBtn.style.background="transparent";
});

formBtn.addEventListener("click", () => {
    formBtn.style.background="#faca10";
    websiteBtn.style.background="none";
    appsBtn.style.background="none";
});
// ===== END OF PORTFOLIO SECTION =====






    



});

