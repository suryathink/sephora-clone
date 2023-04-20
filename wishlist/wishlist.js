import { footer } from "/sephora-clone/script/component.js"
document.getElementById("footer").innerHTML = footer();

import  nevbar  from "/sephora-clone/script/component.js"
document.getElementById("navbar").innerHTML = nevbar();
  
import blank from "/sephora-clone/script/component.js";

  
  
  var wishData=JSON.parse(localStorage.getItem("wishData")) || [];  
  var cartproduct=JSON.parse(localStorage.getItem("cartproduct")) || [];
  



  
//  if(wishData.length==0) {
//   // console.log(wishData.length);
//   document.getElementById("footer").innerHTML = blank();
  
//  }



  
// var wishData=[
//   {
//     imageUrl:"https://www.sephora.com/productimages/sku/s2339539-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-value-2020&imwidth=97",
//     brand: "mascara",
//   name: "black ",
//   stars: "2.5",
//   category:"facial",
//   price: "2800",
// }
// ];

 if(wishData.length==0) {
  // console.log(wishData.length);
  // document.getElementById('idhar').innerHTML = blank();
  
 }else{
  wish(wishData);
    
  function wish(data){

    document.getElementById('product').innerHTML="";
     wishData.map(function(el,index){
  
 
//image
   let divImage=document.createElement('div');
   divImage.id="image";

   let img=document.createElement('img');
       img.src=el.imageUrl;
       divImage.append(img);
   

  //  name,detail,item
   let divNdi=document.createElement('div');
   divNdi.id="part1a";
   
   let h1=document.createElement('h1');
   h1.id="name";
   h1.innerText=el.brand;
         //detail
    let span=document.createElement('span');
    span.id="detail";
     span.innerText=el.name;
          //item
          let p=document.createElement('p');
          p.id="item";
          p.innerText=el.stars;


          
          let neu=document.createElement('p');
          neu.id="item";
          neu.innerText=el.category;
          //
          divNdi.append(h1,span,p,neu);
////////////////////



   //price
   let divPrice=document.createElement('div');
   divPrice.id="dim";
   let pr=document.createElement('p');
   pr.id="price";
   pr.innerText="$"+el.price;
   divPrice.append(pr);
   //
  //button

  var button=document.createElement('button');
  button.innerText="Add to Basket";
  button.id="butt";
  var buttDiv=document.createElement('div');
    

    var i= document.createElement('i');
    i.className="fa fa-heart";
    var buttHeart=document.createElement('button');
      buttHeart.id="buttheart";
      buttHeart.append(i);
      buttDiv.append(button,buttHeart);

      //**function */
      buttHeart.addEventListener('click', erase);
      button.addEventListener('click', function(){
        add(el, index);
      });
///


   let div1=document.createElement('div');
   div1.id="likhai";

   let div2=document.createElement('div');
   div2.id="part1";
   

   div2.append(divImage,divNdi);

   div1.append(div2);
// var pro= document.getElementById("product1");
//  pro.append(div1, divPrice,buttDiv);
var pro=document.createElement('div');
pro.id="product1";
pro.append(div1, divPrice,buttDiv);

       
 document.getElementById('product').append(pro)

     
 
    
        function erase(el, index){

          // pro.innerHTML="";
          wishData.splice(index, 1);
          localStorage.setItem("wishData", JSON.stringify(wishData));
         
          if(wishData.length==0) {
            // console.log(wishData.length);
            document.getElementById("product").innerHTML = blank();
            
           }
          //  alert("erase")
           window.location.reload();
         
        }
      
        function add(el, index){
         
          cartproduct.push(el);
         
    
        localStorage.setItem("cartproduct",JSON.stringify(cartproduct));
        pro.innerHTML="";
        wishData.splice(index, 1);
        localStorage.setItem("wishData", JSON.stringify(wishData));
        // window.location.href("/sephora-clone/cartPage/cartPage.html");
        }  
        // alert("add")  
        // window.location.reload();
})
  }

 }
 