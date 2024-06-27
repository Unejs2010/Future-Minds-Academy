//              CONST
const start = document.querySelector(".start");
const play_page = document.querySelector(".play_page");
const close_button = document.querySelector(".close_button");
const more_button = document.querySelector(".more_button");
const more_page = document.querySelector(".more_page");
const firstPage_button = document.querySelector(".firstPage_button");
const biography_button = document.querySelector(".biography_button");
const Biography_page = document.querySelector(".Biography_page");
const secondPage_button = document.querySelector(".secondPage_button");
const legacy_button = document.querySelector(".legacy_button");
const legacy_page = document.querySelector(".legacy_page");
const end_button = document.querySelector(".end_button");
const end_page = document.querySelector(".end_page");
const submit_button = document.querySelector(".submit_button");
const thnx_h1 = document.querySelector(".thnx_h1");
const thirdPage_button = document.querySelector(".thirdPage_button");
const closePage_button = document.querySelector(".closePage_button");

//            EventListeners 
start.addEventListener("click", function () {
    play_page.style.display = "block";
    start.style.display = "none";
});

close_button.addEventListener("click", function () {
    play_page.style.display = "none";
    start.style.display = "block";
});

more_button.addEventListener("click", function () {
    play_page.style.display = "none";
    more_page.style.display = "block";
});

firstPage_button.addEventListener("click", function () {
    play_page.style.display = "block";
    more_page.style.display = "none";
});

biography_button.addEventListener("click", function () {
    Biography_page.style.display = "block";
    more_page.style.display = "none";
});

secondPage_button.addEventListener("click", function () {
    Biography_page.style.display = "none";
    more_page.style.display = "block";
});

legacy_button.addEventListener("click", function () {
    Biography_page.style.display = "none";
    legacy_page.style.display = "block";
});

thirdPage_button.addEventListener("click", function () {
    Biography_page.style.display = "block";
    legacy_page.style.display = "none";
});

end_button.addEventListener("click", function () {
    end_page.style.display = "block";
    legacy_page.style.display = "none";
});

submit_button.addEventListener("click", function () {
    thnx_h1.style.display = "block";
    closePage_button.style.display = "block";
});


closePage_button.addEventListener("click", function () {
    end_page.style.display = "none";
    start.style.display = "block";
});