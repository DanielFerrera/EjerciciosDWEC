window.onload=inicio;

 function inicio(){
   document.formulario1.comprobar.onclick=calcular;
 }

function calcular(){
var cadena=document.formulario1.cadena.value;
var amirar=document.formulario1.vocalsubcadena.value;
document.formulario1.mensaje=contar(cadena,amirar);
}

function contar(cadena,amirar){
var contador=0;
var cadena1=amirar;
var cadena2=cadena;
var split;

if (cadena1==cadena2) {
  contador++;
}

split=cadena2.split(' ');
for (var i = 0; i < cadena2.length; i++) {
if (cadena1==split[i]) {
  contador++;
}
}

for (var i = 0; i < cadena2.length; i++) {
  if (cadena1==cadena2.charAt(i)) {
    contador++;
  }
}

document.formulario1.mensaje.value+=contador;

}
