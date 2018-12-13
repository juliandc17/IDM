var form
var IDVault

//Llame a esta funcion para que funcione el codigo en un evento onload, así:
//ini(form,IDVault)

function ini(formulario,vault){
	form = formulario
	IDVault = vault
}

function mostrar(campos){
    for(var i=0; i<campos.length; i++){
        form.show(campos[i]);
    }    
}
function ocultar(campos){
    for(var i=0; i<campos.length; i++){
        form.hide(campos[i]);
    }
}    
function obligatorio(campos){
    for(var i=0; i<campos.length; i++){
        form.setRequired(campos[i],true);
    }
}
function opcional(campos){
    for(var i=0; i<campos.length; i++){
        form.setRequired(campos[i],false);
    }
}
function limpiar(campos){
    for(var i=0; i<campos.length; i++){
        form.setValues(campos[i],"");
    }
}
function deshabilitar(campos){
    for(var i=0; i<campos.length; i++){
        form.disable(campos[i]);
    }
}
function habilitar(campos){
    for(var i=0; i<campos.length; i++){
        form.enable(campos[i]);
    }
}
function limpiarCampoHTML(id){
    $("#_"+id).html("")
}

function campoIgualA(campo,valor){
    if(campo.toUpperCase() == valor.toUpperCase()){
        return true
    }else{
        return false
    }
}

function campoVacio(campo){
    if(campo == "" || campo == null || campo == undefined){
        return true
    }else{
        return false
    }
}

function tieneCaracteresProhibidos(campo){
    if (/[&\/\\#,+";=|*<>]/g.test(campo)){
        //Solo contiene letras, numeros y dash
        return true
    }
    else{
        return false
    }
}

function tieneCaracteresEspeciales(campo){
    if (/^[0-9A-Za-z_\-]+$/.test(campo)){
        //Solo contiene letras, numeros y dash
        return false
    }
    else{
        return true
    }
}

function caracteresMayor(campo,limite){
    if(campo.length > limite){
        return true
    }else{
        return false
    }
}

function soloTieneNumeros(campo){
    if (/^[0-9]+$/.test(campo)){
        //Solo contiene numeros
        return true
    }
    else{
        return false
    } 
}

function emailValido(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function fechaValida(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(dateString.match){
        if(!dateString.match(regEx)) return false;  // Invalid format
        var d = new Date(dateString);
        if(!d.getTime() && d.getTime() !== 0) return false; // Invalid date
        return d.toISOString().slice(0,10) === dateString;
    }else{
        return false;
    }
}

function mostrarError(error){
    form.showError(error)
    form.alert(error)
}
