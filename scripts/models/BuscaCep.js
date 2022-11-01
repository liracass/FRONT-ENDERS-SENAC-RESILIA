class DadosCEP {
    constructor(CEP) {
        this.CEP = CEP
    }
    getCEP = function () {
        let dado = []
        $.ajax({
            type: "GET",
            url: "https://viacep.com.br/ws/" + this.CEP + '/json/',
            async: false
        }).done(function (response) {
            dado[0] = response.logradouro
            dado[1] = response.complemento
            dado[2] = response.localidade
            dado[3] = response.uf
            dado[4] = response.bairro
        });
        return dado
    }
}


