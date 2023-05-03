let item1 = document.getElementById("item-1");
let item2 = document.getElementById("item-2");
let item3 = document.getElementById("item-3");
let text1 = document.getElementById("item-1").innerHTML.toUpperCase();
let text2 = document.getElementById("item-2").innerHTML.toUpperCase();
let text3 = document.getElementById("item-3").innerHTML.toUpperCase();
let tabs = document.querySelectorAll(".active");

item1.addEventListener("click", () => {
    if (item1.innerText.includes(text1.toUpperCase())) {
        tabs[index].classList.add("active");
    }
    else
    {
        tabs[index].classList.add("hide");
    }
});

item2.addEventListener("click", () => {
    if (item2.innerText.includes(text2.toUpperCase())) {
        tabs[index].classList.add("active");
    }
    else
    {
        tabs[index].classList.add("hide");
    }
});

item3.addEventListener("click", () => {
    if (item3.innerText.includes(text3.toUpperCase())) {
        tabs[index].classList.add("active");
    }
    else
    {
        tabs[index].classList.add("hide");
    }
});