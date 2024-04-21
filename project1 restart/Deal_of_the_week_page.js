let maindata=[];
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
    name.innerText=obj.tea_name;
   ;


    let new_price=document.createElement("h3");
    new_price.innerText= obj.new_price;
    new_price.className=" new_price";
    let old_price=document.createElement("p");
    old_price.className="light";
    old_price.innerText=obj.old_price;
    
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
  
   let cartDetails=JSON.parse(localStorage.getItem("cartDetails") ) || [];
   cartDetails.push(obj);
   localStorage.setItem("cartDetails",JSON.stringify(cartDetails));

}






function sortPriceHighToLow() {
    fetch("Deal_of_the_week_page.json")
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
    fetch("Deal_of_the_week_page.json")
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


fetch("Deal_of_the_week_page.json")
.then((res)=>res.json())
.then(function(data) {
    data.forEach(obj=>maindata.push(obj)) 
    displayproducts(data); 
})
.catch((err)=>console.log(err))


console.log(maindata);
function displayaccordingrange(selectvalue,rangevalue){
    fetch("Deal_of_the_week_page.jsonn")
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data)
        if(selectvalue==="below"){
            let arr=data.filter(obj=>obj.new_price<rangevalue);
            productsDiv.innerHTML="";
            displayproducts(arr)
        }else if(selectvalue==="equal"){
            let arr=data.filter(obj=>obj.new_price==rangevalue);
            productsDiv.innerHTML="";
            displayproducts(arr)
        }else if(selectvalue==="above"){
            let arr=data.filter(obj=>obj.new_price>rangevalue);
            productsDiv.innerHTML="";
            displayproducts(arr)
        }
        
      
    })
}




function sortlowtohighrate(){
    fetch("Deal_of_the_week_page.json")
    .then((res)=>res.json())
    .then((data)=>{
        data.sort(function(a,b){
            return a.rate-b.rate;
        })
        productsDiv.innerHTML="";
        displayproducts(data);
    })



}
function sorthightolowrate(){
    fetch("Deal_of_the_week_page.json")
    .then((res)=>res.json())
    .then((data)=>{
        data.sort(function(a,b){
            return b.rate-a.rate;
        })
        productsDiv.innerHTML="";
        displayproducts(data);
    })



}


let submit_btn=document.getElementById("submit");
let range=document.getElementById("Approx_Price");
let select=document.querySelector("#sortPriceHighToLow_select");
let sortRateHighToLow_select=document.querySelector("#sortRateHighToLow_select");
let rate_submit=document.querySelector("#rate_submit");
let sortdiscountHighToLow_select=document.querySelector("#sortdiscountHighToLow_select");
let discount_submit=document.getElementById("discount_submit");

submit_btn.addEventListener("click",function(){
    let selectvalue=select.value;
    let rangevalue=range.value;
    displayaccordingrange(selectvalue,rangevalue)
    // console.log(selectvalue);
    // console.log(rangevalue);
})

let search_btn=document.getElementById('search');
let search_box=document.getElementById("search-engine");


rate_submit.addEventListener('click',function(){
    let sortdiscountHighToLow_select=sortdiscountHighToLow_select.value;
   
    rate_submit.addEventListener('click',function(){
       
       if(sortRateHighToLow_select_value==1){ 
        let arr=maindata.filter(obj=>obj.rate<=1);
        productsDiv.innerHTML="";
        displayproducts(arr)
    }else if(sortRateHighToLow_select_value==2){ 
        let arr=maindata.filter(obj=>obj.rate<=2  && obj.rate>1);
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if(sortRateHighToLow_select_value==3){ 
        let arr=maindata.filter(obj=>obj.rate<=3 && obj.rate>2 );
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if(sortRateHighToLow_select_value==4  && obj.rate>3){ 
      
        let arr=maindata.filter(obj=>obj.rate<=4);
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if(sortRateHighToLow_select_value==5  && obj.rate>4){ 
        let arr=maindata.filter(obj=>obj.rate<=5);
        productsDiv.innerHTML="";
        displayproducts(arr)
    }
            
        });

        
    });





let main_content=document.getElementById("main");
let functionalities=document.getElementById("functionlity");
let products=document.getElementById("products");

// Event listener for double click on discount submit button
// discount_submit.addEventListener('dblclick', function() {
//     let selectedDiscount = (sortdiscountHighToLow_select.value);
//     console.log(selectedDiscount)
//     let filteredData;

    // if (!isNaN(selectedDiscount)) {
    //     filteredData = maindata.filter(function(product) {
    //         let [minDiscount, maxDiscount] = product.discount_percentage.split('-').map(val => parseFloat(val.replace('%', '')));
    //         return minDiscount <= selectedDiscount && (isNaN(maxDiscount) || selectedDiscount < maxDiscount);
    //     });
    // } else {
    //     // Handle invalid selection
    //     console.error("Invalid discount selection");
    //     return;
    // }

    // productsDiv.innerHTML = "";
    // displayproducts(filteredData);
// });
