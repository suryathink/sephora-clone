import signIn from  "./signIncomponet.js"


document.getElementById("signIn").innerHTML=signIn();

document.getElementById("hoversignin").addEventListener("click",redirect)

function redirect(){
    window.location.href ="suryaLogin.html"
}

// <a href="suryaLogin.html"> <button id="hoversignin">Sign In</button></a>
// <a href="suryaSignup.html"> <button id="hoverCreateAccount">Create Account</button></a>