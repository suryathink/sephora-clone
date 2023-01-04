var cartdata=[
    {
        image:"https://www.sephora.com/productimages/sku/s2372225-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
        brand:"SEPHORA COLLECTION",
        itemname:"Sephora ColorfulⓇ Eyeshadow",
        size: "Size 0.042 oz/ 1.2g",
        color:"Color: 365 Glazed Donut",
        p:"shipping restrictions",
        price:"$9.00"
    }
  ]
  
  var editcartData=JSON.parse(localStorage.getItem("cartDataObj"))||[];
  
  cartdata.map(function (elem){
  
    var cName=document.createElement("h1");
    cName.innerText=elem.brand;
    var pName=document.createElement("h2");
    pName.innerText=elem.itemname;
    var pPrice=document.createElement("p");
    pPrice.innerText=elem.price;
    document.querySelector("#page1").append(cName, pName, pPrice);
    
    var cColor=document.createElement("h2");
    cColor.innerText=elem.color;
    var pSize=document.createElement("p");
    pSize.innerText=elem.size;
    var radiant=document.createElement("p");
    radiant.innerText="Radiant finish - Standard size"
    
    var topDiv=document.createElement("div");
    topDiv.className="top-div";
    var imgArr1=["https://www.sephora.com/productimages/sku/s2050391+sw.jpg","https://www.sephora.com/productimages/sku/s2050375+sw.jpg","https://www.sephora.com/productimages/sku/s2050383+sw.jpg","https://www.sephora.com/productimages/sku/s2050425+sw.jpg","https://www.sephora.com/productimages/sku/s2050409+sw.jpg","https://www.sephora.com/productimages/sku/s2050417+sw.jpg","https://www.sephora.com/productimages/sku/s2050433+sw.jpg","https://www.sephora.com/productimages/sku/s2050508+sw.jpg","https://www.sephora.com/productimages/sku/s2050482+sw.jpg","https://www.sephora.com/productimages/sku/s2050466+sw.jpg","https://www.sephora.com/productimages/sku/s2050441+sw.jpg","https://www.sephora.com/productimages/sku/s2050458+sw.jpg","https://www.sephora.com/productimages/sku/s2050490+sw.jpg","https://www.sephora.com/productimages/sku/s2050516+sw.jpg","https://www.sephora.com/productimages/sku/s2050524+sw.jpg","https://www.sephora.com/productimages/sku/s2050532+sw.jpg","https://www.sephora.com/productimages/sku/s2050540+sw.jpg"];
  
  
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
  var h2=document.createElement("p");
  h2.innerText="Find Your Shade";
  h2.style.color="blue";
  h2.style.fontSize="15px"
  
  document.querySelector(".btn").addEventListener("click",function(){
    addToCart(elem);
  })
  
  
  document.querySelector("#page2").append(cColor, pSize, radiant, topDiv, matte, bottomDiv, h2);
  })
  
  function addToCart(elem){
    console.log(elem);
    editcartData.push(elem);
    localStorage.setItem("cartDataObj", JSON.stringify(editcartData));
    alert("Item Added to Basket");
    window.location="/cartPage/cart.html"
  }
  
  var text=document.createElement("h2");
  text.innerText="Get It Shipped";

  //product image
  var productImg1=["https://www.sephora.com/productimages/sku/s2372225-main-zoom.jpg?imwidth=612","https://www.sephora.com/productimages/product/p430932-av-01-zoom.jpg?imwidth=612","https://www.sephora.com/productimages/product/p430932-av-02-zoom.jpg?imwidth=612","https://www.sephora.com/productimages/product/p430932-av-04-zoom.jpg?imwidth=612","https://www.sephora.com/productimages/product/p430932-av-05-zoom.jpg?imwidth=612","https://www.sephora.com/productimages/product/p430932-av-03-zoom.jpg?imwidth=612","https://www.sephora.com/productimages/product/p430932-av-06-zoom.jpg?imwidth=612"];
  
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
  
  //   <!-- Initialize Swiper -->
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