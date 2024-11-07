import { expresionesRegulares } from "../../../helpers/expresiones.js";



      
      document
      .querySelector("#btnFormRegistro")
      .addEventListener("click", function () {
        document.querySelector("#form-login").style.display = "flex";
        document.querySelector("#form-register").style.display = "none";
  });
document.querySelector("#btnFormLogin").addEventListener("click", function () {
  document.querySelector("#form-login").style.display = "none";
  document.querySelector("#form-register").style.display = "flex";
});
let inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("keyup", validarFormulario);
}
function validarFormulario(e) {
  switch (e.target.name) {
    case "register-nombre":
      if(expresionesRegulares.nombre.test(e.target.value)){
        console.log('Paso la validacion');
        
      }else{
        console.log('El campo solo permite letra en mayúscula');
        
      }

      
      break;

    default:
      break;
  }
}

// console.log(document.querySelectorAll('input'))

// let arreglo = [1, 'jaime', true, function () { }, { nombre: 'jaime' }, []]
// console.log(arreglo)
// console.log(arreglo[4])
// console.log(arreglo[2])
