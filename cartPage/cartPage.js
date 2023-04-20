import { footer } from "/sephora-clone/script/component.js"
document.getElementById("footer").innerHTML = footer();

import  nevbar  from "/sephora-clone/script/component.js"
document.getElementById("navbar").innerHTML = nevbar();



  var wishData=JSON.parse(localStorage.getItem("wishData")) || [];  
  var cartproduct=JSON.parse(localStorage.getItem("cartproduct")) || [];

              // *** total price
   

    // var cartdata=JSON.parse(localStorage.getItem("cartdata")) || [];  
    // console.log(cartdata);

    var total = cartproduct.reduce(function (sum, el) {
        return sum + Number(el.price);
      }, 0);
    
    console.log(total)
    
    var length = cartproduct.length;
    
    console.log(length)
    
    
    document.querySelector("#subtotal2a").innerText = "$" + total
    
    
    document.querySelector("#total").innerText = "$" + total
    
    
    
    
    
    
    //**promo code */
    
    cart(cartproduct);
    
    var FinalPrice=JSON.parse(localStorage.getItem("FinalPrice")) || [];

    function cart(cartproduct){

      document.querySelector(".cart").innerHTML="";
      cartproduct.map(function(el,index){
      
      // if(cartproduct.length>=1)
      // {
      //   document.querySelector(".cart").innerHTML="";
      // }
    
    
        //checkout**   


        //  if(length>=1){
        //     document.getElementById("butta").style.backgroundColor = "#ce0404";
        //     document.getElementById("COI").style.color= "white";
        //     document.getElementById("COI").style.textDecoration= "none";
        // }
    
        
    
        // firstdiv
        var imgdiv=document.createElement("div");
        imgdiv.setAttribute("class", "imgdiv");
       
        // second div
        var cartdiv=document.createElement("div");
        cartdiv.setAttribute("class","cartdiv")
    
        // A
        var detaildiv=document.createElement("div")
        detaildiv.setAttribute("class","detaildiv");
    
        // B
        var pricediv=document.createElement("div")
        pricediv.setAttribute("class","pricediv");
    
        cartdiv.append(detaildiv,pricediv);
    
        var img =document.createElement("img")
        img.src=el.imageUrl;
       
        img.setAttribute("class","img");
    
        imgdiv.append(img);
    
        // ====================//
        // ====================//
        // ====================//
    
        var p1=document.createElement("strong");
        p1.setAttribute("class","firstP");
        p1.innerText=el.brand;
    
        var p2=document.createElement("p");
        p2.setAttribute("class","secondP");
        p2.innerText=el.name;
        // p2.innerText=el.detail;


        var p3=document.createElement("p")
        p3.setAttribute("class","thirdP")
        p3.innerText=el.stars;
    
        var p4=document.createElement("p")
        p4.setAttribute("class","fourthP")
        p4.innerText="color "+el.category;
    
        var p5=document.createElement("p")
        p5.setAttribute("class","fifthP")
        p5.innerText=el.price;
    
        var p6= document.createElement("div")
        p6.setAttribute("class","remove")
    
        var select= document.createElement("select")
        select.setAttribute("class","select")
       
        var option1= document.createElement("option")
        option1.innerText="1"
    
        var option2= document.createElement("option")
        option2.innerText="2"
    
        var option3= document.createElement("option")
        option3.innerText="3"
    
        var option4= document.createElement("option")
        option4.innerText="4"
    
        var option5= document.createElement("option")
        option5.innerText="5"
    
        select.append(option1,option2,option3,option4,option5)
        
        // =======================================================================//
    
        var remove=document.createElement("button")
        remove.innerText="  | Remove";
        remove.addEventListener("click",function(){
            removeItem(el,index)
        })
    
        p6.append(select,remove)
    
        detaildiv.append(p1,p2,p3,p4,p5,p6);
    
    
    // ======================//
    // ======================//
    // ======================//
    // ======================//
    
    
        var price=document.createElement("strong")
        price.setAttribute("class","itemprice");
        price.innerText="$ "+el.price;
    
        var button=document.createElement("button")
        button.innerText="Change Method"
    
        pricediv.append(price,button)
    
    
        var maindiv=document.createElement("div")
        maindiv.setAttribute("class","shipping1")
    
        maindiv.append(imgdiv,cartdiv)
    
        var hr=document.createElement("hr")
        hr.setAttribute("class","hr")
    
    
    
        document.querySelector(".cart").append(maindiv,hr);
    ////
    /////
    /////
    ////
        // document.querySelector(".select").addEventListener("click", changePrice);
       select.addEventListener("click", changePrice);
    function changePrice(){
         
        var selectedQuantity = document.querySelector(".select").value;
    
        document.getElementById("subtotal2a").innerText = "$" + (selectedQuantity*el.price + (total-el.price))
      
        // document.querySelector("#total").innerText = "$" + (selectedQuantity*el.price + (total-el.price))
    
        
        document.getElementById("total").innerText = "$" + (selectedQuantity*el.price+(total-el.price));

        var finalValue =  selectedQuantity*el.price + (total-el.price)
        console.log(finalValue);
    
        FinalPrice.push(finalValue)
    
        localStorage.setItem("FinalPrice",JSON.stringify(FinalPrice))

        //////promo code


       
        
    }
    
    })
    
    function removeItem(el,index){
      console.log(el,index)
      cartproduct.splice(index,1)
        localStorage.setItem("cartproduct",JSON.stringify(cartproduct));
        window.location.reload();
    }
    
  }
    

    
     