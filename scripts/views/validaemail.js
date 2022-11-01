let email = document.getElementById('psw');
let btn = document.getElementById('btn1');
let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

btn.addEventListener('click',function(evt){
    evt.preventDefault()
})
btn.addEventListener('click', validacao)

function validacao() {
    
    if(email.value === ""){
        alert("Preencha o campo com o seu e-mail")
    }else if(!filtro.test(email.value)){
        alert("E-mail inválido. Tente novamente.")
    }else{
        alert("código enviado com sucesso, verifique seu email.");
        window.location.href = "login.html"
    }
} 