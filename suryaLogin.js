import nevbar from "../sephora-clone/script/component.js"
document.getElementById("main").innerHTML =nevbar();

let name = localStorage.getItem("user");
console.log(name)

// if (name!=null){
// document.getElementById("hoverName").textContent = "Good Evening, "+name;
// document.getElementById("HomeSignIn").textContent = name;
// document.getElementById("HomePara").textContent  ="";
// }






document.getElementById("createAccount").addEventListener("click",()=>{
window.location.href="suryaSignup.html";
})


document.querySelector("#customer-login").addEventListener("submit", signIn);

var nameArr = JSON.parse(localStorage.getItem("account-data")) || [];

// <p id="hoverName" id="bold">Good Evening, Beautiful. 👋</p>
//                     <p id="hoverNull" >Sign in for a more personalized experience</p>


// <p id="HomePara" class="p"> <strong id="HomeSignIn"> Sign In </strong> <br> for free shipping </p>
function signIn() {
event.preventDefault();
let mail = document.getElementById("loginEmail").value;
let pass = document.getElementById("loginPassword").value;

nameArr.filter(function (elem) {
    return elem.mail == mail
}).map(function (elem) {
    if (elem.pass == pass) {
        document.getElementById("wrongPass").textContent = "Sign in Successful"
        window.location.href="index.html";

        // write code to redirect to home page



        // document.getElementById("showUsername").textContent = "Logged in as  "+mail+" ";
;
      console.log(elem);
        // showEmailUser  
        // document.getElementById("showEmailUser").textContent = elem.firstName+" "; 

        
        // storing emailID as user 
        localStorage.setItem("user",elem.firstName)  
        console.log(localStorage.getItem("user")); 
    } else {
        document.getElementById("wrongPass").textContent = "Wrong Credentials"
    }
})

// hompage redirect js.
document.getElementById("loginEmail").value = null;
document.getElementById("loginPassword").value = null;

}

