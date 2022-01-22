const burger = document.querySelector("#burger");

//console.log(burger);
burger.addEventListener("click", (e) => {
     document.body.classList.toggle("expand");
});
