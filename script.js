let productImg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");


btn[0].addEventListener("click", () => {
    productImg.src = "first.jpg";

    for (bt of btn) {
        bt.classList.remove("active")
    }
    btn[0].classList.add("active");
    console.log("First image ")
});

btn[1].addEventListener("click", () => {
    productImg.src = "second.jpg";

    for (bt of btn) {
        bt.classList.remove("active")
    }
   btn[1].classList.add("active");
    console.log("second image ")
});


btn[2].addEventListener("click", () => {
    productImg.src = "third.jpg";


    for (bt of btn) {
        bt.classList.remove("active")
    }
    btn[2].classList.add("active");
    // this.classList.add("active");
    console.log("third image ")
});
