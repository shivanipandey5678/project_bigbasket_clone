// let isAuth=localStorage.getItem("auth") || "Not-Authenticated";
// if(isAuth!=="Authenticated"){
//     window.location.href="./login.html"
// }else{
//     window.location.href="./cart.html"
// }

function delfromcard(obj) {
    // Find the index of the object to be deleted in the maindata array
    const index = maindata.indexOf(obj);
    
    // Remove the object from the maindata array
    maindata.splice(index, 1);

    // Remove the corresponding card element from the DOM
    const cardToRemove = document.getElementById(`card-${index}`);
    if (cardToRemove) {
        cardToRemove.remove();
    }
}



let productsDiv=document.getElementById("products");
let maindata=JSON.parse(localStorage.getItem("cartDetails")) || [];
displayproducts(maindata);
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
     company_name.className="light";
     let name=document.createElement("p");
     name.className="product_name";
     name.innerText=obj.vegetable_name;
    ;
 
 
     let new_price=document.createElement("h3");
     new_price.innerText=obj.new_price;
     let old_price=document.createElement("p");
     old_price.className="light";
     old_price.innerText=obj.old_price;
     
     
     let delbtn=document.createElement("button");
     delbtn.className="del";
     delbtn.innerText="del";
     delbtn.onclick=function(){
  
        delfromcard(obj);
    }
     
     card.append(img,company_name,name,new_price, old_price,delbtn)
     div.append(card);
     productsDiv.appendChild(div);
    
    });
 }


 
 