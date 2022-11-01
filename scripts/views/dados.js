const BaseCadastro = {
    _Nome: $('#Nome'),
    _Senha: $('#Senha'),
    _Email: $('#Email'),
    _ConfirmaSenha: $('#ConfirmaSenha'),
    CEP: $('#CEP'),
    Logradouro: $('#Logradouro'),
    Complemento: $('#Complemento'),
    _Numero: $('#Numero'),
    Cidade: $('#Cidade'),
    Estado: $('#Estado'),
    Bairro: $('#Bairro'),


    TodosCampos: function () {
        let dados = []
        dados[0] = this._Nome
        dados[2] = this._Senha
        dados[1] = this._Email
        dados[3] = this._ConfirmaSenha
        dados[4] = this.CEP
        dados[5] = this.Logradouro
        dados[6] = this._Numero
        dados[7] = this.Cidade
        dados[8] = this.Estado
        dados[9] = this.Bairro
        return dados
    }
}

