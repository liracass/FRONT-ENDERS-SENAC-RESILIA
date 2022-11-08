function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
  //Atualiza os campos com os valores.
  document.getElementById('rua').value=(conteudo.logradouro);
  document.getElementById('bairro').value=(conteudo.bairro);
  document.getElementById('cidade').value=(conteudo.localidade);
  document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
  //CEP não Encontrado.
  limpa_formulário_cep();
  const control = cep.parentElement;
  const small = control.querySelector('small')

  small.innerText = 'CEP não encotrado!';

  control.classList.remove('success');
  control.classList.add('error');
  
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

  //Expressão regular para validar o CEP.
  var validacep = /^[0-9]{8}$/;

  //Valida o formato do CEP.
  if(validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('uf').value="...";
      

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

  } //end if.
  else {
      //cep é inválido.
      limpa_formulário_cep();
  }
} //end if.
else {
  //cep sem valor, limpa formulário.
  limpa_formulário_cep();
}
};

const nome = document.getElementById("Nome");
const email = document.getElementById("Email");
const senha = document.getElementById("Senha");
const cSenha = document.getElementById("ConfirmaSenha");
const confirma = document.getElementById("Cadastrar");
const cep = document.getElementById('cep');
const num = document.getElementById('num');
const filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const cepF = /^[0-9]{8}$/;

confirma.addEventListener('click', (e) => {
  
  e.preventDefault()

  checkInputs()

})

function checkInputs() {
  
  let cont = 0; 
  
  if (nome.value == '') {
    errorValidation(nome, 'Preencha este campo!');
  } else {
    setSuccessFor(nome);
    cont++;
  }

  if (email.value === "") { 
    errorValidation(email, 'Preencha este campo!');
  } else if (!filtro.test(email.value)) {
    errorValidation(email, 'Email inválido')
  } else {
    setSuccessFor(email)
    cont++;
  }

  if (senha.value === "") {
    errorValidation(senha, 'Preencha este campo!');
  } else if (senha.value.length <= 4 ) {
    errorValidation(senha, 'Mínimo de 5 caracteres!');
  } else {
    setSuccessFor(senha)
    cont++;
  }

  if (cSenha.value != senha.value) {
    errorValidation(cSenha, 'Senha não confere!');
  } else if (cSenha.value === '') {
    errorValidation(cSenha, 'Preencha este campo!')
  } else {
    setSuccessFor(cSenha)
    cont++;
  }

  if (cep.value == '') {
    errorValidation(cep, 'Preencha este campo!');
  } else if (!(cepF.test(cep)) && cep.value.length != 8 && rua.value === '') {
    errorValidation(cep, 'CEP Inválido');
  } else {
    setSuccessFor(cep)
    cont++;
  }

  if (num.value == '') {
    errorValidation(num, 'Preencha este campo!');
  } else {
    setSuccessFor(num)
    cont++;
  }

  if (cont == 6) {
    setTimeout (() => {
    
      window.location.href = 'produto.html'
  
    }, 1500);
  }

}

function errorValidation(input, message) {
  
  const control = input.parentElement;
  const small = control.querySelector('small')

  small.innerText = message

  control.classList.remove('success');
  control.classList.add('error');
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.classList.remove('error');
  formControl.classList.add('success');
  
}

