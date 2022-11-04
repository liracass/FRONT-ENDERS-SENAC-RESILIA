let btn = document.getElementById('btn');
let email = document.getElementById('email');
let senha = document.getElementById('password');

btn.addEventListener('click', (e)=>{
  e.preventDefault()
})
btn.addEventListener('click', function(){
  if(email.value === "" || senha.value === ""){
    alert('Preencha todos os campos')
  }else{
    window.location.href = "index.html"
  }
})