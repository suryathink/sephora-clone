var items=JSON.parse(localStorage.getItem("itemsData"))||[];
var fragranceItems=itemsData.filter(function(elem){
    return elem.category=="fragrance";
})
// console.log(fragranceItems);
let count=0;
for(const key in fragranceItems){
    count++;
}
document.getElementById("count").textContent=count;
displayItems(fragranceItems);

document.getElementById("fragrance").addEventListener("click", fragrancePro);
function fragrancePro(){
    let count=0;
    for(const key in fragranceItems){
        count++;
    }

    document.getElementById("count").textContent=count;
    displayItems(fragranceItems);
}

document.getElementById("women").addEventListener("click", filterWomen);
function filterWomen(){
    let womenItems=itemsData.filter(function(elem){
        return elem.type=="women";
    })
    let count=0;
    for(const key in womenItems){
        count++;
    }
    document.getElementById("count").textContent=count;
    displayItems(womenItems); 
}

document.getElementById("men").addEventListener("click", filterMen);
function filterMen(){
    let menItems=itemsData.filter(function(elem){
        return elem.type=="men";
    })
    let count=0;
    for(const key in menItems){
        count++;
    }

    document.getElementById("count").textContent=count;
    displayItems(menItems); 
}

function ratingFilter(){
    var selected=document.getElementById("rating").value;
    var filterItem;
    if(selected=="all"){
        filterItem=fragranceItems;
    }
    else{
        filterItem=fragranceItems.filter(function(elem){
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

function brandFilter(){
    var selected=document.getElementById("brand").value;
    var filterItem;
    if(selected=="all"){
        filterItem=fragranceItems;
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

function priceSort(){
    var selected=document.getElementById("selectSort").value;
    console.log(selected);
    var sortPrices;
    if(selected=="all"){
        sortPrices=fragranceItems;
    }
    else if(selected=="lth"){
        sortPrices=fragranceItems.sort(function(a, b){
            return a.price-b.price;
        })
    }
    else if(selected=="htl"){
        sortPrices=fragranceItems.sort(function(a, b){
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
        
        var price=document.createElement("p");
        price.textContent="$ "+el.price;
        div_price_rating.append( rating, price)
        div.append(img, brand, name,div_price_rating);
        container.append(div);
    });
}