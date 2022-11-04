let btn = document.getElementById('btn2');
let emailRecup = document.getElementById('emailRecup');

btn.addEventListener('click', (e)=>{
  e.preventDefault()
})

btn.addEventListener('click', function(){
  if(emailRecup.value === ""){
    alert('Campo vazio. Preencha o e-mail')
  }else{
    alert("E-mail de recuperação enviado. Verifique a sua caixa de entrada.")
    window.location.href = "login.html"
  }
})
