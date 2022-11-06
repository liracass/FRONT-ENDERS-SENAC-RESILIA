const form = document.getElementById('form');
const emailRecup = document.getElementById('emailRecup');
const filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

form.addEventListener('submit', (e) => {
  
  e.preventDefault()

  checkInputs()

})

function checkInputs() {
  
  if (emailRecup.value === "") {
    
    errorValidation(emailRecup, 'Preencha este campo!');
  
  } else if (!filtro.test(emailRecup.value)) {
    
    errorValidation(emailRecup, 'Email inválido')
  
  } else {

    setSuccessFor(emailRecup)
    window.location.href = "login.html"
  
  }   
}

function errorValidation(input, message) {
  
  const control = input.parentElement;
  const small = control.querySelector('small')

  small.innerText = message

  control.className = 'control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'control success'
}