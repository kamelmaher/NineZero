let header = document.querySelector("header");

let goTop = document.querySelector(".to-top");

window.addEventListener("scroll" , function () {
    if (scrollY >= 200) {
        goTop.style.cssText = `
        opacity: 1;
        `
    }else {
        goTop.style.cssText = `
        opacity: 0;
        `
    }
})

goTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

let links = document.querySelectorAll("ul li");

links[0].addEventListener("click" , function () {
    scrollTo({
        top:550,
        behavior:"smooth"
    })
})
links[1].addEventListener("click" , function () {
    scrollTo({
        top:1450,
        behavior:"smooth"
    })
})
links[2].addEventListener("click" , function () {
    scrollTo({
        top:2230,
        behavior:"smooth"
    })
})
links[3].addEventListener("click" , function () {
    scrollTo({
        top:3292,
        behavior:"smooth"
    })
})
links[4].addEventListener("click" , function () {
    scrollTo({
        top:4530,
        behavior:"smooth"
    })
})
links[5].addEventListener("click" , function () {
    scrollTo({
        top:5149,
        behavior:"smooth"
    })
}) 
let logo = document.querySelector(".logo");
logo.addEventListener("click" , function () {
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})