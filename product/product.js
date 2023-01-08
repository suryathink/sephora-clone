var cartdata=[
    {
        image:"https://www.sephora.com/productimages/sku/s2372225-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
        brand:"SEPHORA COLLECTION",
        itemname:"Sephora ColorfulⓇ Eyeshadow",
        size: "0.042 oz/ 1.2g",//Size 0.042 oz/ 1.2g
        color:"365 Glazed Donut",//Color: 365 Glazed Donut
        p:"shipping restrictions",
        price:9.00//$9.00
    }
]
  
  var editcartData=JSON.parse(localStorage.getItem("cartDataObj"))||[];
  
  cartdata.map(function (elem){
  
    var cName=document.createElement("h1");
    cName.innerText=elem.brand;
    var pName=document.createElement("h2");
    pName.innerText=elem.itemname;
    var pPrice=document.createElement("p");
    pPrice.innerText="$"+elem.price;
    var cColor=document.createElement("h2");
    cColor.innerText="Color: "+elem.color;
    var pSize=document.createElement("h2");
    pSize.innerText="Size: "+elem.size;
    document.querySelector("#page1").append(cName, pName, pPrice,cColor,pSize);


var metallic=document.createElement("p");
metallic.innerText="Metallic finish - Standard size"
var topDiv=document.createElement("div");
topDiv.className="top-div";
var imgArr1=["https://www.sephora.com/productimages/sku/s2234490+sw.jpg",
"https://www.sephora.com/productimages/sku/s2101160+sw.jpg",
"https://www.sephora.com/productimages/sku/s2234482+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372308+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372274+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372282+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372050+sw.jpg",
"https://www.sephora.com/productimages/sku/s2101145+sw.jpg",
"https://www.sephora.com/productimages/sku/s2234474+sw.jpg",
"https://www.sephora.com/productimages/sku/s2234516+sw.jpg",
"https://www.sephora.com/productimages/sku/s2413227+sw.jpg"];
imgArr1.map(function (elem){
  var img=document.createElement("img");
  img.src=elem
  topDiv.append(img);
})
  
var matte=document.createElement("p");
matte.innerText="Matte finish - Standard size";
var bottomDiv=document.createElement("div");
bottomDiv.className="top-div";
var imgArr2=["https://www.sephora.com/productimages/sku/s1943893+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943497+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944065+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943935+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943786+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943380+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943547+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944057+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943885+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943802+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943646+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943695+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943570+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943612+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943620+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943869+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944099+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944131+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943968+sw.jpg"];
imgArr2.map(function (elem){
  var img=document.createElement("img");
  img.src=elem
  bottomDiv.append(img);
})
  
var glitter=document.createElement("p");
glitter.innerText="Glitter finish - Standard size";
var middleDiv=document.createElement("div");
middleDiv.className="top-div";
var imgArr3=["https://www.sephora.com/productimages/sku/s2372266+sw.jpg",
"https://www.sephora.com/productimages/sku/s2192813+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372381+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943810+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372399+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372324+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943521+sw.jpg",
"https://www.sephora.com/productimages/sku/s2192805+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944172+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372340+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943505+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943430+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372407+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943554+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372365+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943679+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944016+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372373+sw.jpg"];
imgArr3.map(function (elem){
  var img=document.createElement("img");
  img.src=elem
  middleDiv.append(img);
})
  
var shimmer=document.createElement("p");
shimmer.innerText="Shimmer finish - Standard size";
var endDiv=document.createElement("div");
endDiv.className="top-div";
var imgArr4=["https://www.sephora.com/productimages/sku/s2372142+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372159+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372209+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372167+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944164+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943513+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372217+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372175+sw.jpg",
"https://www.sephora.com/productimages/sku/s1944024+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372225+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372100+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372068+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372183+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943463+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372118+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372233+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372076+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372191+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943794+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372126+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372084+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372241+sw.jpg",
"https://www.sephora.com/productimages/sku/s1956069+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372258+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372134+sw.jpg",
"https://www.sephora.com/productimages/sku/s2372092+sw.jpg",
"https://www.sephora.com/productimages/sku/s1943448+sw.jpg",
"https://www.sephora.com/productimages/sku/s1956077+sw.jpg"];
imgArr4.map(function (elem){
  var img=document.createElement("img");
  img.src=elem
  endDiv.append(img);
})
  
  

// var h2=document.createElement("p");
// h2.innerText="Find Your Shade";
// h2.style.color="blue";
// h2.style.fontSize="15px"

document.querySelector(".btn").addEventListener("click",function(){
  addToCart(elem);
})

document.querySelector(".wishlist").addEventListener("click",function(){
  addToWishlist(elem);
})


document.querySelector("#page2").append(metallic, topDiv, matte, bottomDiv, glitter, middleDiv, shimmer, endDiv);
})  //function ends

function addToCart(elem){
  console.log(elem);
  editcartData.push(elem);
  localStorage.setItem("cartDataObj", JSON.stringify(editcartData));
  alert("Item Added to Basket");
  window.location="cartPage.html"  //cart location
}
function addToWishlist(elem){
  console.log(elem);
  editcartData.push(elem);
  localStorage.setItem("cartDataObj", JSON.stringify(editcartData));
  alert("Added to wishlist");
  window.location="cartPage.html"  //whishlist location
}

// var text=document.createElement("h2");
// text.innerText="Get It Shipped";

/*----------------------------------product image------------------------------------*/
var productImg1=["https://www.sephora.com/productimages/sku/s2372225-main-zoom.jpg?imwidth=612",
"https://www.sephora.com/productimages/product/p430932-av-01-zoom.jpg?imwidth=612",
"https://www.sephora.com/productimages/product/p430932-av-02-zoom.jpg?imwidth=612",
"https://www.sephora.com/productimages/product/p430932-av-04-zoom.jpg?imwidth=612",
"https://www.sephora.com/productimages/product/p430932-av-05-zoom.jpg?imwidth=612",
"https://www.sephora.com/productimages/product/p430932-av-03-zoom.jpg?imwidth=612",
"https://www.sephora.com/productimages/product/p430932-av-06-zoom.jpg?imwidth=612"];
  
productImg1.map(function (elem){
  var img=document.createElement("img");
  img.src=elem;
  document.querySelector("#div1").append(img);
})
  
productImg1.map(function (elem){
    
    var img=document.createElement("img");
    img.src=elem;

    var div3=document.createElement("div")
    div3.className="image";
    div3.append(img);

    var div2=document.createElement("div")
    div2.className="card-content";
    div2.append(div3);
    
    var div1=document.createElement("div")
    div1.className="swiper-slide card";
    div1.append(div2);
    
    document.querySelector(".swiper-wrapper").append(div1);
})
  
/*----------------- Initialize Swiper---------------------------------*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// whishlist
// var wish1 = document.querySelectorAll('.add-wishlist');

// for(let i=0; i<wish1.length; i++) {
// 	wish1[i].addEventListener('click', () => {
// 		Wishh(latest_products[i]);
// 		pdt_wishh(latest_products[i])
// 	})
// }


// function pdt_wishh(product) {
// 	var wish_pdt = localStorage.getItem('productsInWishlist');
// 	wish_pdt = JSON.parse(wish_pdt);

// 	if(wish_pdt != null) {
// 		if(wish_pdt[product.tag] == undefined) {
// 			wish_pdt = {
// 				...wish_pdt,
// 				[product.tag]: product
// 			}
// 		}
// 	}
// 	else {
// 		wish_pdt = {
// 			[product.tag]: product
// 		}
// 	}
// 	localStorage.setItem("productsInWishlist", JSON.stringify(wish_pdt));
// }

// function Wishh() {
// 	var tot_wish = localStorage.getItem('wishlist');
// 	tot_wish = JSON.parse(tot_wish);
// 	tot_wish += 1;
// 	localStorage.setItem('wishlist',JSON.stringify(tot_wish));
// }


// //function myFunction() {
// //	document.getElementsByClassName('wsh').style.color = 'red';
// //}

// function delette(x) {
// 	var wish_pdt = localStorage.getItem('productsInWishlist');
// 	wish_pdt = JSON.parse(wish_pdt);
// 	delete wish_pdt[x];
// 	localStorage.setItem("productsInWishlist", JSON.stringify(wish_pdt));
// 	displayWishlist();
// }


// function displayWishlist() {
// 	let wishItems = localStorage.getItem("productsInWishlist");
// 	wishItems = JSON.parse(wishItems);
// 	let productContainer = document.querySelector(".wList");

// 	if(wishItems && productContainer) {
// 		productContainer.innerHTML = '';
// 		Object.values(wishItems).map(item => {
// 			productContainer.innerHTML += `
// 			<div class="product">
// 				<img src="./images/${item.tag}.png">
// 				<span>${item.name}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
// 				<div class="price">
// 					<span>&#8377</span>${item.price}
// 				</div>
// 				<div>
// 					<span><i class="fa fa-times" style="color:#123C69" onclick="delette('${item.tag}')"></i></span>
// 				</div>
// 			</div>
// 			`;
// 		});
// 	}
// }

// displayWishlist();