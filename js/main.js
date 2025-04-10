//SE RECUPERAN LOS ELEMENTOS QUE CONTIENEN LA INFORMACION INGRESADA...
let txtName = document.getElementById("Name"); //nombre
let txtNumber = document.getElementById("Number"); // cantidad
let btnAgregar = document.getElementById("btnAgregar")
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let tablaListaCompras = document.getElementById ("tablaListaCompras");
const cuerpoTabla= tablaListaCompras.getElementsByTagName("tbody").item(0);

//Numeracion de la primera columna de la tabla 
let cont = 0;


function validarCantidad(){
    if(txtNumber.value.trim().length<=0){
        return false;
    }// length<=0


    if (isNaN(txtNumber.value)){
        return false;
    } //is NaN

    if (Number(txtNumber.value)<=0){
        return false;
    } //<=0


    //número
    
    return true;


} //validarCantidad

function getPrecio(){
    return Math.round(Math.random()*10000) / 100; //<---- Funcion para regresar el precio con dos decimales por eso se utilizo 4 numeros enteros (1000) que al dividir mostrara solo 2 decimales
}// getPrecio


//OREJA PARA EL BOTON DE AGREGAR...
btnAgregar.addEventListener("click",function(event){
    event.preventDefault();

    //<-------------------------------------------------------------------
    // Variable Bandera, al ser true permite agregar los datos a la tabla 
    let isValid = true;
//<-------------------------------------------------------------------------

   //Reiniciar campos vacios
    alertValidacionesTexto.innerHTML = ""; // <---------- VALIDACION DE LOS CAMPOS 
    alertValidaciones.style.display = "none";
    txtName.style.border = "";
    txtNumber.style.border = "";
    

    txtName.value = txtName.value.trim();
    //txtName.innerText = txtName.value;
    txtNumber.value = txtNumber.value.trim();
    //xtNumber.innerText = txtNumber.value;

    if(txtName.value.length < 3){  //<------------- VALIDACION DE LOS CAMPOS
        txtName.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML = "<strong> El nombre del producto no es correcto </strong>";
        alertValidaciones.style.display = "block";
        isValid= false;
    } //length >=3

    
    if(! validarCantidad ()){  //<------------- VALIDACION DE LOS CAMPOS

        txtNumber.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "<br/> <strong> La cantidad no es correcta </strong>";
        alertValidaciones.style.display = "block";
        isValid= false;
    } //validar cantidad


//<---------------- Va con la funcion let isValid (linea 41) que cuando la validacion de los campos es correcta permite agregar los datos a la tabla---->
    if(isValid){ 
        cont++;
        let precio= getPrecio();
        let row = `<tr>
                   <td>${cont}</td>
                   <td>${txtName.value}</td>
                   <td>${txtNumber.value}</td>
                   <td>${precio}</td>
                   </tr>`;
    cuerpoTabla.insertAdjacentHTML("beforeend", row); 

    }


}); //btnAgregar