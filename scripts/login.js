const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

form.addEventListener('submit', (e) => {
  
  e.preventDefault()

  checkInputs()

})

function checkInputs() {
  
  if (email.value === "") {
    
    errorValidation(email, 'Preencha este campo!');
  
  } else if (!filtro.test(email.value)) {
    
    errorValidation(email, 'Email inválido')
  
  } else {

    setSuccessFor(email)
  
  }
  
  if (senha.value === "") {

    errorValidation(senha, 'Preencha este campo!');

  } else if (senha.value.length <= 4 ) {
    
    errorValidation(senha, 'Mínimo de 5 caracteres!');
  
  } else {

    setSuccessFor(senha)

  }

  if (senha.value.length > 4 && filtro.test(email.value)) {
    setTimeout (() => {
    
      window.location.href = 'index.html'
  
    }, 1500);
  }
}

function errorValidation(input, message) {
  
  const control = input.parentElement;
  const small = control.querySelector('small')

  small.innerText = message

  control.className = 'control error mb-4'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'control success'
}