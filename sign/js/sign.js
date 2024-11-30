let siteEmailInput = document.getElementById("signupEmail");
let sitePasswordInput = document.getElementById('signupPassword');
let userName = document.getElementById("signupName");
let sitelist = [];
function registerUser() {
    if(validationEmail() && validationPassword() ){
        let product = {
            email : siteEmailInput.value,
            password : sitePasswordInput.value,
            name : userName.value
         };
         sitelist.push(product);
        localStorage.setItem("siteinner", JSON.stringify(sitelist));
         console.log(product);
        alert('You have successfully signed up.');
    }
}
function validationPassword(){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let text = document.getElementById('signupPassword').value;
    if(regex.test(text)){
        sitePasswordInput.classList.add("is-valid");
        sitePasswordInput.classList.remove("is-invalid");

     return true
    }
    else{
     sitePasswordInput.classList.add("is-invalid");
     sitePasswordInput.classList.remove("is-valid");
     return false
    }
 }
function validationEmail(){
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let text = document.getElementById('signupEmail').value;
    if(regex.test(text)){
        siteEmailInput.classList.add("is-valid");
        siteEmailInput.classList.remove("is-invalid");
        return true
    }
    else{
        siteEmailInput.classList.add("is-invalid");
        siteEmailInput.classList.remove("is-valid");
        return false
    }
 }
