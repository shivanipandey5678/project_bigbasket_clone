let productsDiv=document.getElementById("products");
productsDiv.className="body_product";
function displayproducts(data){
   data.forEach((obj)=>{
    
    let div=document.createElement("div");
    div.className="containers"; 
    let card=document.createElement("div");
    card.className="card";
    let img=document.createElement("img");
    img.src=obj.img;
    img.className="image_product";

   
    let company_name=document.createElement("p")
    company_name.innerText=obj.company_name;
    
    let name=document.createElement("p");
    name.className="product_name";
    name.innerText=obj.product_name;
   ;


    let new_price=document.createElement("h3");
    new_price.innerText='₹'+ obj.new_price;
    new_price.className=" new_price";
    let old_price=document.createElement("p");
    old_price.className="light";
    old_price.innerText='₹'+obj.old_price;
    
    let addbtn=document.createElement("button");
    addbtn.className="add";
    addbtn.innerText="Add";
    addbtn.onclick=function(){
        addtocard(obj);
    }



    
    card.append(img,company_name,name,new_price, old_price,addbtn)
    div.append(card);
    productsDiv.appendChild(div);
   
   });
}


function addtocard(obj){
   console.log(obj);
   let cartDetails=JSON.parse(localStorage.getItem("cartDetails") ) || [];
   cartDetails.push(obj);
   localStorage.setItem("cartDetails",JSON.stringify(cartDetails));

}






function sortPriceHighToLow() {
    fetch("Fresh_Vegetable.json")
    .then((res) => res.json())
    .then((data) => {
        data.sort(function(a, b) {
            
           
            
            return b.new_price - a.new_price; 
        });
        productsDiv.innerHTML="";
        displayproducts(data)
    })
    .catch((err) => console.log(err));
}


function sortPriceLowToHigh(){
    fetch("Fresh_Vegetable.json")
.then((res)=>res.json())
.then((data)=>{
    data.sort(function(a,b){
        return a.new_price-b.new_price
    })
    productsDiv.innerHTML="";
    displayproducts(data)
})
.catch((err)=>console.log(err))
}


fetch("Fresh_Vegetable.json")
.then((res)=>res.json())
.then((data)=>displayproducts(data))
.catch((err)=>console.log(err))


let select_amount=document.querySelector("select");
let  Approx_Price=document.querySelector("#Approx_Price");
select_amount.addEventListener("change",function(){
    let value_of_select=select_amount.value;
    
    console.log( value_of_select);
})
