var items=JSON.parse(localStorage.getItem("itemsData"))||[];
var fragranceItems=itemsData.filter(function(elem){
    return elem.category=="fragrance";
})
console.log(fragranceItems);
displayItems(fragranceItems);

function displayItems(arr){
    var container=document.getElementById("items");
    document.getElementById("items").innerHTML=null;
    arr.forEach(el => {
        var div=document.createElement("div");
        var img=document.createElement("img");
        img.src=el.imageUrl;
        var brand=document.createElement("p");
        brand.textContent=el.brand;
        var name=document.createElement("p");
        name.textContent=el.name;
        var rating=document.createElement("p");
        if(el.stars<5){
            rating.innerHTML=`<i class="fa-solid fa-star-half-stroke"></i>`+" "+el.stars;
        }
        else{
            rating.innerHTML=`<i class="fa-solid fa-star"></i>`+" "+el.stars;
        }
       
        var price=document.createElement("p");
        price.textContent="$ "+el.price;
        div.append(img, brand, name, rating, price);
        container.append(div);
    });
}