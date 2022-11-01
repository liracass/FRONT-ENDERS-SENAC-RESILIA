
$('#Buscar').click(function (e) {
    e.preventDefault();
    try {
        const CEP = BaseCadastro.CEP;
        if (CEP.val().length == 8) {
            Resposta.RetornaResBuscaPositivo()
            const Dados = new DadosCEP(CEP.val())
            AlteraDados(Dados.getCEP())
        } else throw error;
    } catch (error) {
        Resposta.RetornaResBuscaNegativo()
    }
});

function AlteraDados(Dados) {
    BaseCadastro.Logradouro.val(Dados[0])
    BaseCadastro.Complemento.val(Dados[1])
    BaseCadastro.Cidade.val(Dados[2])
    BaseCadastro.Estado.val(Dados[3])
    BaseCadastro.Bairro.val(Dados[4])
}

$('#Cadastrar').click(function (e) {
    e.preventDefault();
    Resposta.RetornaResForm()
});