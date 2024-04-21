let arr = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80"
];

let count = 0;
let image = document.querySelector(".slides > img");

function showNextImage() {
    count++;
    if (count >= arr.length) {
        count = 0; 
    }
    image.setAttribute("src", arr[count]);
}


image.setAttribute("src", arr[count]);
let intervalId = setInterval(showNextImage, 3000); 

image.addEventListener("mouseenter", function() {
    clearInterval(intervalId);
});


image.addEventListener("mouseleave", function() {
    intervalId = setInterval(showNextImage, 3000);
});




// opening neupass
const neupassDiv = document.getElementById("neupass");
neupassDiv.addEventListener("click", function() {
const href = neupassDiv.querySelector("a").href;
window.open(href, "_blank");
});





document.getElementById("AYURVEDA").addEventListener("click", function() {
    window.open("./AYURVEDA.html", "_blank");
});


document.getElementById("nonvg_buying").addEventListener("click", function() {
    window.open("./Egg_Meat_page.html", "_blank"); 
});

document.getElementById("Buy_more_save_more_page").addEventListener("click", function() {
    window.open("./Buy_more_save_more_page.html", "_blank"); 
});

document.getElementById("Deal_of_the_week_page").addEventListener("click", function() {
    window.open("./Deal_of_the_week_page.html", "_blank"); 
});

document.getElementById("Combo_store_page").addEventListener("click", function() {
    window.open("./Combo_store_page.html", "_blank"); 
});
document.getElementById("cart").addEventListener("click", function() {
    let auth=JSON.parse(localStorage.getItem("auth"));
    if(auth=="Authenticated"){
        window.open("./cart.html", "_blank"); 
        alert("please refresh the page if its blinking")
    }
    
});

document.getElementById("Exotic_fruit_and_vege_page").addEventListener("click", function() {
    window.open("./Exotic_fruit_and_vege_page.html", "_blank"); 
});

document.getElementById("Tea_page").addEventListener("click", function() {
    window.open("./Tea_page.html", "_blank"); 
});

document.getElementById("Ghee_page").addEventListener("click", function() {
    window.open("./Ghee_page.html", "_blank"); 
});

document.getElementById("Nandini_page").addEventListener("click", function() {
    window.open("./Nandini_page.html", "_blank"); 
});

document.getElementById("Fresh_Vegetable").addEventListener("click", function() {
    window.open("./Fresh_Vegetable.html", "_blank"); 
});

let overflow_vegecard=document.getElementById("overflow_vegecard");
let default_section=document.getElementById(" default_vegecard");


    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
    const cardsContainer = document.querySelector(".cards_flex");
    leftButton.style.color="red";
    leftButton.addEventListener("click", function() {
       
        const cardWidth = cardsContainer.querySelector(".first_card").offsetWidth;
        const scrollAmount = cardWidth * 4;
        
       
        cardsContainer.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    rightButton.addEventListener("click", function() {
        
        const cardWidth = cardsContainer.querySelector(".first_card").offsetWidth;
        const scrollAmount = cardWidth * 4;

       
        cardsContainer.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: "smooth"
        });
    });



    