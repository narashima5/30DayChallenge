let pswd = document.querySelector('.password');
let message = document.querySelector('.message');

pswd.addEventListener("input",() => {
    if(pswd.value.length > 0){
        message.style.display = "block";
    }
    if(pswd.value.length < 4){
        pswd.style.borderColor = "red";
        message.style.color = "red";
        message.innerHTML = "Your Password strength is Weak";
    }else if(pswd.value.length >= 4 & pswd.value.length < 8){
        pswd.style.borderColor = "yellow";
        message.style.color = "yellow";
        message.innerHTML = "Your Password strength is Moderate";
    }else{
        pswd.style.borderColor = "rgb(68, 255, 0)";
        message.style.color = "rgb(68, 255, 0)";
        message.innerHTML = "Your Password strength is strong";
    }
})