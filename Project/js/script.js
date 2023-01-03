window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("handling", window.scrollY > 0);
})

let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");


loginBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up ";
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
}


var nameError = document.getElementById('name-error');

var name2Error = document.getElementById('name2-error');
var emailError = document.getElementById('email-error');
var email2Error = document.getElementById('email2-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var passwordError=document.getElementById('password-Error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){ 
        nameError.innerHTML = 'User name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Full name please!";
        return false;

    }
    nameError.innerHTML = '<i class="fas fa-check-circle">';
    return true;
}


function validate2Name(){
    var name = document.getElementById('user-name').value;

    if(name.length == 0){ 
        name2Error.innerHTML = 'Username is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        
        name2Error.innerHTML = "No space allowed!";
        return false;

    }
    name2Error.innerHTML = '<i class="fas fa-check-circle">';
    return true;
}


function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){ 
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid email address!";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle">';
    return true;
}



function validate2Email(){
    var email = document.getElementById('lo-email').value;

    if(email.length == 0){ 
        email2Error.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email2Error.innerHTML = "Invalid email!";
        return false;
    }
    email2Error.innerHTML = '<i class="fas fa-check-circle">';
    return true;
}



function validatePassword(){
    var password = document.getElementById('password-error').value;

    if(password.length == 0){ 
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    passwordError.innerHTML ='<i class="fas fa-check-circle">';
    return true;
   
}



function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;
    
    if(left>0){
  messageError.innerHTML = left + ' ' + 'more characters required';
  return false;
    }
    
    messageError.innerHTML = '<i class="fas fa-check-circle">';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.innerHTML = 'Please fill the form first';
        return false;
    }
}