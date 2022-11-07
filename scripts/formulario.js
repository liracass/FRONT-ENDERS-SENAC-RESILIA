function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
  //Atualiza os campos com os valores.
  document.getElementById('rua').value=(conteudo.logradouro);
  document.getElementById('bairro').value=(conteudo.bairro);
  document.getElementById('cidade').value=(conteudo.localidade);
  document.getElementById('uf').value=(conteudo.uf);
  document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
  //CEP não Encontrado.
  limpa_formulário_cep();
  alert("CEP não encontrado.");
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
      alert("Formato de CEP inválido.");
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

confirma.addEventListener('click', (e) => {
  
  e.preventDefault()

  checkInputs()

})

function checkInputs() {
    
  if (nome.value == '') {
    errorValidation(nome, 'Preencha este campo!');
  } else {
    setSuccessFor(nome);
  }

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

  if (cSenha.value != senha.value) {

    errorValidation(cSenha, 'Senha não confere!');

  } else if (cSenha.value === '') {

    errorValidation(cSenha, 'Preencha este campo!')

  } else {

    setSuccessFor(cSenha)

  }

  if (cep.value == '' || num.value == '') {
    alert('Digite todos os campos');
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

