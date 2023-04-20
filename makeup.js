import nevbar from "./script/component.js";
document.querySelector("header").innerHTML=nevbar();
import { footer} from "./script/component.js";
document.querySelector("footer").innerHTML=footer();


var items=JSON.parse(localStorage.getItem("itemsData"))||[];
var makeupItems=itemsData.filter(function(elem){
    return elem.category=="makeup";
})
// console.log(fragranceItems);
let count=0;
for(const key in makeupItems){
    count++;
}
document.getElementById("count").textContent=count;
displayItems(makeupItems);

document.getElementById("makeup").addEventListener("click", fragrancePro);
function fragrancePro(){
    let count=0;
    for(const key in makeupItems){
        count++;
    }

    document.getElementById("count").textContent=count;
    displayItems(makeupItems);
}

document.getElementById("face").addEventListener("click", filterFace);
function filterFace(){
    let faceItems=itemsData.filter(function(elem){
        return elem.type=="face";
    })
    let count=0;
    for(const key in faceItems){
        count++;
    }
    document.getElementById("count").textContent=count;
    displayItems(faceItems); 
}

document.getElementById("eye").addEventListener("click", filterEye);
function filterEye(){
    let eyeItems=itemsData.filter(function(elem){
        return elem.type=="eye";
    })
    let count=0;
    for(const key in eyeItems){
        count++;
    }

    document.getElementById("count").textContent=count;
    displayItems(eyeItems); 
}

document.getElementById("lip").addEventListener("click", filterLip);
function filterLip(){
    let lipsItems=itemsData.filter(function(elem){
        return elem.type=="lip";
    })
    let count=0;
    for(const key in lipsItems){
        count++;
    }

    document.getElementById("count").textContent=count;
    displayItems(lipsItems); 
}
document.getElementById("rating").addEventListener('change', ratingFilter);
function ratingFilter(){

    var selected=document.getElementById("rating").value;
    var filterItem;
    if(selected=="all"){
        filterItem=makeupItems;
    }
    else{
        filterItem=makeupItems.filter(function(elem){
            return elem.stars==selected;
        })
    }
    let count=0;
    for(const key in filterItem){
        count++;
    }

    document.getElementById("count").textContent=count;
    displayItems(filterItem);
}
document.getElementById("brand").addEventListener('change', brandFilter);
function brandFilter(){
    var selected=document.getElementById("brand").value;
    var filterItem;
    if(selected=="all"){
        filterItem=makeupItems;
    }
    else{
        filterItem=itemsData.filter(function(elem){
            return elem.brand==selected;
        })
    }
    let count=0;
    for(const key in filterItem){
        count++;
    }
    document.getElementById("count").textContent=count;

    displayItems(filterItem);
}
document.getElementById("selectSort").addEventListener("change", priceSort);
function priceSort(){
    var selected=document.getElementById("selectSort").value;
    console.log(selected);
    var sortPrices;
    if(selected=="all"){
        sortPrices=makeupItems;
    }
    else if(selected=="lth"){
        sortPrices=makeupItems.sort(function(a, b){
            return a.price-b.price;
        })
    }
    else if(selected=="htl"){
        sortPrices=makeupItems.sort(function(a, b){
            return b.price-a.price;
        })
    }
    
    displayItems(sortPrices);
}

function displayItems(arr){
    var container=document.getElementById("items");
    document.getElementById("items").innerHTML=null;
    arr.forEach(el => {
        var div=document.createElement("div");
        var img=document.createElement("img");
        img.src=el.imageUrl;
        var brand=document.createElement("p");
        brand.setAttribute("id","brand");
        brand.textContent=el.brand;
        var name=document.createElement("p");
        name.textContent=el.name;
        var div_price_rating=document.createElement("div");
        var rating=document.createElement("p");
        if(el.stars<5){
            rating.innerHTML=`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`+" "+el.stars;
        }
        else{
            rating.innerHTML=`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`+" "+el.stars;
        }
        rating.setAttribute("class", "rating");
        
        var price=document.createElement("p");
        price.textContent="$ "+el.price;
        div_price_rating.append( rating, price)
        div.append(img, brand, name,div_price_rating);
        div.addEventListener("click", function(){
            addItem(el);
        })
        container.append(div);
    });
}
var cartData=[];
function addItem(el){
    
    cartData.push(el);
    console.log(cartData);
    localStorage.setItem("cartDataObj", JSON.stringify(cartData));
    window.location.href="./product/product.html";
}