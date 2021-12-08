var dados = []

function PopulaTabela() { 
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function (item){
            //TEMPALTE STRING
            $("tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome-Completo}</td>
                <td>${item.CPF}</td>
                <td>${item.Telefone}</td>
                <td>${item.Endereço}</td>
                <td>${item.Data-de-vencimento}</td>
            </tr>`)
        })
    }
}

$(function () {
    //executa ao carregar da tela
    dados = JSON.parse(localStorage.getItem("_dados_"))

    if (dados) {
        PopulaTabela()
    }

    $("btnSalvar").click(function() {
        //EVENTO Click do botão Salvar

        let Nome = $("#txtNome").val()
        let CPF = $("#txtCPF").val()
        let Telefone = $("#txtTelefone").val()
        let Endereço = $("#txtEndereço").val()
        let DataDevencimento = new Date($("#txtDt").val()).toLocaleDateString("pt-br", { timeZone: "UTC"})
        

        let registro = {}

        registro.Nome = Nome
        registro.CPF = CPF
        registro.Telefone = Telefone
        registro.Endereço = Endereço
        registro.DT = Data-De-Vencimento 

        registro.ID = dados.length + 1

        dados.push(registro)

        alert("Registro Salvo com Sucesso")
        $("#modalRegistro").modal("hide")

        //LIMPEZA DOS NOMES
        $("#txtNome").val("")
        $("#txtCPF").val("")
        $("#txtTelefone").val("")
        $("#txtEndereço").val("")
        $("#txtDt").val("")

        PopulaTabela()

})

})