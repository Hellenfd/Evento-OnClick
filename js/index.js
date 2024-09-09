var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    this.innerText = "Cerrar Sesión";
});

function disappear(elemento){
    let navegacion = document.querySelector('.add');
    navegacion.remove();
}

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    let textoActual = this.innerText;
    let numeroActual = parseInt(textoActual);
    numeroActual++;
this.innerText = numeroActual + " me gusta";
})

var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    let textoActual = this.innerText;
    let numeroActual = parseInt(textoActual);
    numeroActual++;
this.innerText = numeroActual + " me gusta";
})

function mostrarAlerta1() {
    alert("Gato atigrado was liked");
}

function mostrarAlerta2() {
    alert("Golden retriever was liked");
}