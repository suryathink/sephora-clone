 import { footer } from "./component.js"
 document.getElementById("footer").innerHTML = footer();

let namexyz = localStorage.getItem("user");

if (namexyz!=null){
  document.getElementById("HomeSignIn").innerText="Hi " + namexyz;
}










let arr1 = [{
    imageUrl: "https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Liquid Blush",
    stars: 4.5,
    numReviews: 2300,
    price: 20,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2116028-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Hollywood Flawless Filter",
    stars: 4.5,
    numReviews: 1700,
    price: 15,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2428837-main-zoom.jpg?imwidth=270&pb=allure-clean-2020&imwidth=164",
    brand: "ILIA",
    name: "Super Serum Skin Tint SPF 40 Foundation",
    stars: 4,
    numReviews: 2500,
    price: 48,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s1478403-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "NARS",
    name: "Radiant Creamy Concealer",
    stars: 4.5,
    numReviews: 12300,
    price: 13,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2551851-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Skin Foundation with Hyaluronic Acid",
    stars: 4.5,
    numReviews: 287,
    price: 44,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2431864-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Fenty Beauty by Rihanna",
    name: "Eaze Drop Blurring Skin Tint",
    stars: 4,
    numReviews: 1100,
    price: 32,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2116333-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Finish Setting Powder",
    stars: 4,
    numReviews: 1600,
    price: 25,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "NARS",
    name: "Light Reflecting Advanced Skincare Foundation",
    stars: 4.5,
    numReviews: 233,
    price: 49,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2407294-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Flawless Filter",
    stars: 4,
    numReviews: 218,
    price: 15,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Liquid Luminizer Highlight",
    stars: 4.5,
    numReviews: 634,
    price: 22,
    category: "makeup",
    type: "face"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2157659-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Eye Love Eyeshadow Palette",
    stars: 4,
    numReviews: 468,
    price: 10,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2370773-main-zoom.jpg?imwidth=270&pb=2020-03-allure-best-2019&imwidth=164",
    brand: "Kaja",
    name: "Beauty Bento Bouncy Eyeshadow Trio",
    stars: 4.5,
    numReviews: 1600,
    price: 21,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2418101-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Urban Decay",
    name: "24/7 Moondust Eyeshadow",
    stars: 4.5,
    numReviews: 189,
    price: 22,
    category: "makeup",
    type: "eye"
  },]

  let arr2 =[{
    imageUrl: "https://www.sephora.com/productimages/sku/s2288082-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "HUDA BEAUTY",
    name: "Nude Obsessions Eyeshadow Palette",
    stars: 4,
    numReviews: 821,
    price: 29,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s1987783-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "TOM FORD",
    name: "Eye Color Quad Eyeshadow Palette",
    stars: 4.5,
    numReviews: 200,
    price: 52,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2493732-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Violet Voss",
    name: "Fun Sized Mini Eyeshadow Palette",
    stars: 4,
    numReviews: 453,
    price: 18,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2343986-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Dior",
    name: "BACKSTAGE Eyeshadow Palette",
    stars: 4.5,
    numReviews: 305,
    price: 49,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2419588-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "HUDA BEAUTY",
    name: "Brown Obsessions Eyeshadow Palette",
    stars: 4.5,
    numReviews: 180,
    price: 29,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2417905-main-zoom.jpg?imwidth=270&pb=allure-best-2021-badge&imwidth=164",
    brand: "Urban Decay",
    name: "24/7 Eyeshadow",
    stars: 4.5,
    numReviews: 181,
    price: 19,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2191880-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "NARS",
    name: "Mini Voyageur Eyeshadow Palette",
    stars: 4,
    numReviews: 92,
    price: 32,
    category: "makeup",
    type: "eye"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s2255651-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Jelly Melt Glossy Lip Tint",
    stars: 4.5,
    numReviews: 396,
    price: 5,
    category: "makeup",
    type: "lip"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s1296060-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Cream Lip Stain Liquid Lipstick",
    stars: 4.5,
    numReviews: 10500,
    price: 15,
    category: "makeup",
    type: "lip"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s1691278-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Retractable Rouge Gel Lip Liner",
    stars: 4.5,
    numReviews: 995,
    price: 9,
    category: "makeup",
    type: "lip"
  }, {
    imageUrl: "https://www.sephora.com/productimages/sku/s2133528-main-zoom.jpg?imwidth=270&pb=2020-03-allure-best-2019&imwidth=164",
    brand: "LANEIGE",
    name: "Lip Sleeping Mask",
    stars: 4.5,
    numReviews: 14400,
    price: 20,
    category: "makeup",
    type: "lip"
  },
  {
    imageUrl: "https://www.sephora.com/productimages/sku/s1656032-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Lip Liner To Go",
    stars: 4,
    numReviews: 719,
    price: 6,
    category: "makeup",
    type: "lip"
  },]

  let arr3 =[ {imageurl:"https://www.sephora.com/productimages/sku/s2407344-main-zoom.jpg?imwidth=122",
  "css-1k6hmc8": "Quicklook",
  brand:"Charlotte Tilbury",
  name:"Mini Airbrush Flawless Finish Setting Powder",
  },
  
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2638971-main-zoom.jpg?imwidth=122",
  brand : "Sol de Janeiro",
  name :"Bum Bum Firmeza Firming & Debloating Body Oil",
  },
  
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2031425-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=122",
  brand : "The Ordinary",
  name :"Natural Moisturizing Factors + HA",
  },
  {imageurl: "https://www.sephora.com/productimages/sku/s2485142-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
  brand : "ITEM Beauty By Addison Rae",
  name :"Air Hug Clean Lightweight Full-Coverage Concealer",
  },
  {imageurl: "https://www.sephora.com/productimages/sku/s2495687-main-zoom.jpg?imwidth=122",
  brand : "The Ordinary",
  name :"Salicylic Acid 2% Anhydrous Solution Pore Clearing Serum",
  },
  
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2457299-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=122",
  brand : "MAKEUP BY MARIO",
  name :"SoftSculpt® Shaping Stick",
  },
  
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2211514-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
  brand : "The INKEY List",
  name :"Caffeine Eye Cream",
  },
  
  {imageurl: "https://www.sephora.com/productimages/sku/s1533439-main-zoom.jpg?imwidth=122",
  brand : "Too Faced",
  name :"Better Than Sex Volumizing & Lengthening Mascara",
  },
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2362416-main-zoom.jpg?imwidth=122",
  brand : "Rare Beauty by Selena Gomez",
  name :"Liquid Touch Multi-Tasking Makeup Sponge",
  
  },
  {imageurl: "https://www.sephora.com/productimages/sku/s2421360-main-zoom.jpg?imwidth=122",
  brand : "Paula's Choice",
  name: "Skin Perfecting 2% BHA Liquid Exfoliant",
  
  },
  {imageurl: "https://www.sephora.com/productimages/sku/s2137230-main-zoom.jpg?imwidth=122",
  brand : "HUDA BEAUTY",
  name: "Obsessions Eyeshadow Palette",
  },
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2368447-main-zoom.jpg?imwidth=122",
  brand : "Charlotte Tilbury",
  name: "Mini Airbrush Flawless Setting Spray",
  },
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2283109-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
  brand : "SEPHORA COLLECTION",
  name: "Clean Charcoal Nose Strip",
  },
  
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=122",
  brand : "NARS",
  name: "Radiant Creamy Concealer",
  },
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=122",
  brand : "Rare Beauty by Selena Gomez",
  name: "Soft Pinch Liquid Blush",
  },
  
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2484947-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=122",
  "css-1k6hmc8 16": "Quicklook",
  brand : "ITEM Beauty By Addison Rae",
  name: "Lash Snack Clean Lengthening Mascara",
  
  },
  {imageurl: "https://www.sephora.com/productimages/sku/s2606176-main-zoom.jpg?pb=allure-2022-clean-badge&imwidth=122",
  brand : "Tower 28 Beauty",
  name: "MakeWaves Lengthening + Volumizing Mascara",
  
  },
  
  {imageurl: "https://www.sephora.com/productimages/sku/s2115954-main-zoom.jpg?imwidth=122",
  brand : "Charlotte Tilbury",
  name: "Hollywood Contour Wand",}]
  

  const Display1=(data)=>{
    data.map((ele)=>{
      let box =document.createElement("div");
      let photo = document.createElement("img");
      photo.src = ele.imageUrl
      photo.setAttribute("class","photo");

      let brand = document.createElement("h5")
      brand.innerText = ele.brand;

      let title = document.createElement("p");
      title.innerText = ele.name;
      

      box.append(photo,brand,title);
      box.addEventListener("click",()=>{
        localdata(ele);
      })
      document.getElementById("container").append(box);


    })
  }
  const Display2=(data)=>{
    data.map((ele)=>{
      let box =document.createElement("div");
      let photo = document.createElement("img");
      photo.src = ele.imageUrl
      photo.setAttribute("class","photo");

      let brand = document.createElement("h5")
      brand.innerText = ele.brand;

      let title = document.createElement("p");
      title.innerText = ele.name;

      let tag = document.createElement("span");
      tag.innerText = "NEW";

      box.append(tag,photo,brand,title);
       box.addEventListener("click",()=>{
        localdata(ele);
      })
      document.getElementById("container2").append(box);


    })

  }

  const Display3 =(data)=>{
    data.map((ele,i)=>{
      let box =document.createElement("div");
      let photo = document.createElement("img");
      photo.src = ele.imageurl
      photo.setAttribute("class","photo");

      let brand = document.createElement("h5")
      brand.innerText = ele.brand;

      let title = document.createElement("p");
      title.innerText = ele.name;

      let tag = document.createElement("span");
      let num = Number(i)+1;
      // console.log(num)
      tag.innerText = "#"+num;

      box.append(tag,photo,brand,title);
      document.getElementById("container3").append(box);


    })

  }
  Display1(arr1)
  Display2(arr2)
  Display3(arr3)
  const localdata=(data)=>{

    localStorage.setItem("cartDataObj",JSON.stringify(data));
    // window.location.href="./product/product.html"
  }