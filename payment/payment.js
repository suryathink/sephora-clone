

document.querySelector("form").addEventListener("submit",SubmitFunction);

var UserInfo= JSON.parse(localStorage.getItem("userinfo")) || [];

function SubmitFunction(){
  event.preventDefault();

  
    
    // var userData={
    //   sirname:document.querySelector("#sirname").value,
    //   tilename: document.querySelector("#tilename").value,
    //   phoneno: document.querySelector("#phone-no").value,
    //   pata:document.querySelector("#pata").value,
    //   postal : document.querySelector("#postal").value,
    //   cardpay: document.querySelector("#cardpay").value
    // }
    

    // UserInfo.push(userData);

    // localStorage.setItem("userinfo", JSON.stringify(UserInfo));

        // document.querySelector("#sirname").value=""
        // document.querySelector("#tilename").value=""
        //  document.querySelector("#phone-no").value=""
        // document.querySelector("#pata").value=""
        //  document.querySelector("#postal").value=""
        //  document.querySelector("#cardpay").value=""

        document.getElementById("placefinal-butt").style.backgroundColor="#ce0404"
    document.getElementById("placefinal-butt").style.color="white"
  //  alert("yaha h");
   
}


var FinalPrice = JSON.parse(localStorage.getItem("FinalPrice")) || [];

console.log(FinalPrice)

FinalPrice.map(function(el){
  document.querySelector("#subtotal2").innerText = "$" + el
  document.querySelector("#total").innerText = "$" + el
})


document.querySelector("#promobutt").addEventListener("click", discountfun);

function discountfun(){

    var code=document.querySelector("#promo-codi").value;
    console.log(code)

    if(code== "masai10"){
    document.querySelector("#subtotal").innerText = "$" +(FinalPrice- (FinalPrice*0.10))
    document.querySelector("#total").innerText = "$" + (FinalPrice- (FinalPrice*0.10))
    }

}




// Get the button that placeorder
document.getElementById("placefinal-butt").addEventListener('click', last);


//after clicking to placeorder alert and then redirect to main page
// btn.onclick = function() {
 
 async function last(event){
    event.preventDefault();
    
 
    swal("Congratulation", "Your order has been placed","success")
    //  try{
    //   alert("pehle mein");
    //   window.location.href="/index.html"
    //  }
    //  catch(er){
    //   console.log(er);
    //  }
    
     setTimeout (function(){
      window.location.href="/sephora-clone/index.html";
     }, 3000);
     

  // alert("congratulation, your order has been placed");
  // window.location.href="/sephora-clone/index.html"
  
}

