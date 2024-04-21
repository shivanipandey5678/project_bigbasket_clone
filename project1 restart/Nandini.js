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
    name.innerText=obj.product_name;
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
   console.log(obj);
   let cartDetails=JSON.parse(localStorage.getItem("cartDetails") ) || [];
   cartDetails.push(obj);
   localStorage.setItem("cartDetails",JSON.stringify(cartDetails));

}






function sortPriceHighToLow() {
    fetch("Nandini.json")
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
    fetch("Nandini.json")
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



fetch("Nandini.json")
    .then((res) => res.json())
    .then(function(data) {
        data.forEach(obj=>maindata.push(obj)) 
        displayproducts(data); 
    })
    .catch((err) => console.log(err));


console.log(maindata);
function displayaccordingrange(selectvalue,rangevalue){
    fetch("Nandini.json")
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






let submit_btn=document.getElementById("submit");
let range=document.getElementById("Approx_Price");
let select=document.querySelector("#sortPriceHighToLow_select");
let sortRateHighToLow_select=document.querySelector("#sortRateHighToLow_select");
let rate_submit=document.querySelector("#rate_submit");


submit_btn.addEventListener("click",function(){
    let selectvalue=select.value;
    let rangevalue=range.value;
    displayaccordingrange(selectvalue,rangevalue)
    // console.log(selectvalue);
    // console.log(rangevalue);
})

let search_btn=document.getElementById('search');
let search_box=document.getElementById("search-engine");


sortRateHighToLow_select.addEventListener('change',function(){
    let sortRateHighToLow_select_value=sortRateHighToLow_select.value;
    console.log(sortRateHighToLow_select_value)
    rate_submit.addEventListener('click',function(){
       
       if(sortRateHighToLow_select_value==1){ 
        let arr=maindata.filter(obj=>obj.rate<=1);
        console.log(arr)
        productsDiv.innerHTML="";
        displayproducts(arr)
    }else if(sortRateHighToLow_select_value==2){ 
        let arr=maindata.filter(obj=>obj.rate<=2  && obj.rate>1);
        console.log(arr)
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if(sortRateHighToLow_select_value==3){ 
        let arr=maindata.filter(obj=>obj.rate<=3 && obj.rate>2 );
        console.log(arr)
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if(sortRateHighToLow_select_value==4 ){ 
      
        let arr=maindata.filter(obj=>obj.rate<=4  && obj.rate>3);
        console.log(arr)
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if(sortRateHighToLow_select_value==5 ){ 
        let arr=maindata.filter(obj=>obj.rate<=5  && obj.rate>4);
        console.log(arr)
        productsDiv.innerHTML="";
        displayproducts(arr)
    }
            
        });

        
    });



function displaysearchedpproduct(product_name){
    fetch("Nandini.json")
    .then((res)=>res.json())
    .then((data)=>{
        let product=data.filter(obj=>obj.name.toLowerCase()===product_name.toLowerCase());
        productsDiv.innerHTML="";
        displayproducts(product)
    })
    .catch((err)=>console.log(err))
}
search_box.addEventListener("change",function(){
    let product_name= search_box.value;
    displaysearchedpproduct( product_name);
    console.log(product_name)
})


let main_content=document.getElementById("main");
let functionalities=document.getElementById("functionlity");
let products=document.getElementById("products");



let sortdiscountHighToLow_select=document.querySelector("#sortdiscountHighToLow_select");
let discount_submit=document.getElementById("discount_submit");



sortdiscountHighToLow_select.addEventListener('change',function(){
    let sortdiscountHighToLow_select_value=sortdiscountHighToLow_select.value;
    console.log(sortdiscountHighToLow_select_value)
    discount_submit.addEventListener('click',function(){
   console.log(maindata)
    if (sortdiscountHighToLow_select_value == 10) { 
        let arr = maindata.filter(obj=>obj.discount < 10 && obj.discount > 0);
            
            
      
       
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if (sortdiscountHighToLow_select_value == 20) { 
        let arr = maindata.filter(obj=>obj.discount  >= 10  && obj.discount  <20);
            
            // return obj.discount >= 10 && obj.discount < 20;
   
       
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if (sortdiscountHighToLow_select_value == 30) { 
        let arr = maindata.filter(obj=>obj.discount  >= 20  && obj.discount  <30);
       
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if (sortdiscountHighToLow_select_value == 40) { 
        let arr = maindata.filter(obj=>obj.discount  >=30  && obj.discount  <40);
       
        productsDiv.innerHTML="";
        displayproducts(arr)
    } else if (sortdiscountHighToLow_select_value == 50) { 
        let arr = maindata.filter(obj=>obj.discount  >= 40  );
       
        productsDiv.innerHTML="";
        displayproducts(arr)
    } 
            
        });

        
    });








