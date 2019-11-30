//Comprovar se está funcionando
document.addEventListener('DOMContentLoaded', function(){
    console.log("Funciona!!");

    // mostrarErros();

    document.getElementById("buttonSave").onclick = criarLembrete;
});

//Function para verificar se tem texto
function textoValido(texto){
    if(texto == null || texto == "" || texto.lenght < 1 ){
        return false;
    }else{
        return true;
    }
}

//Function para mostrar erros
function mostrarErros(){
    var html = "";
    html += '<div class="alert alert-danger" role="alert">';
    html += 'Por favor, informe alguma coisa';
    html += '</div>';     

    document.getElementById('erro').innerHTML = html;
}

//Function para limpar o erro

function limparErros(){
    document.getElementById('erro').innerHTML = "";
}

//Function para criar lembrete

function criarLembrete(){
    var conteudoTextArea = document.getElementById("texto").value;
    if(!textoValido(conteudoTextArea)){
        return mostrarErros();
    }
    limparErros();

    //Criar as variaveis para tempo

    var referencia = new Date();
    var id = referencia.getTime();
    var data = referencia.toLocaleDateString();
    var texto =  conteudoTextArea;

    //JSON = js objetos

    var recordatorio = {"id": id, "data": data, "texto": texto};

    //Function para comprovar se existe lembrete
    comprovarRecordatorio(recordatorio);
}
//Function para comprovar se existe lembrete
function comprovarRecordatorio(recordatorio){
    var recordatorioExistentes = localStorage.getItem("recordatorio");
    if(recordatorioExistentes == null || recordatorioExistentes ==""){
        var recordatorios = [];
        recordatorios.push(recordatorio);

        //Salvar recordatorio
        saveRecordatorios(recordatorios);
    }else{
        var recordatoriosRecuperados = JSON.parse(recordatorioExistentes);

        //Salva recordatorio
        recordatoriosRecuperados.push(recordatorio);
        saveRecordatorios(recordatorios);
    }
}

//Function para salvar lembrete ou recordatorioo

function saveRecordatorios(recordatorios){
    var recordatoriosJSON = recordatoriosJSON.stringfy(recordatorios);
    localStorage.setItem("re]",recordatoriosJSON);
}

//Functio para exibir os itens
function mostrarRecordatorios(){
    var html="";

    var recordatorioExistentes = localStorage.getItem("recordatorios");
    if(recordatorioExistentes == null || recordatorioExistentes == ""){
        html ="Não existe nenhum lembrete";

        document.getElementById("recordatorios").innerHTML = ;
    }

}

