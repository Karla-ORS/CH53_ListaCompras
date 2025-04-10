const txtName = document.getElementById("Name"); //nombre
const txtNumber = document.getElementById("Number"); // cantidad
const btnAgregar = document.getElementById("btnAgregar")
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");
const tablaListaCompras = document.getElementById ("tablaListaCompras");
const cuerpoTabla= tablaListaCompras.getElementsByTagName("tbody").item(0);


const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById ("productosTotal");
const precioTotal = document.getElementById ("precioTotal");


//Numeracion de la primera columna de la tabla 
let cont = 0;
let costoTotal = 0;
let totalEnProductos = 0;



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
//<------------ Visualizar el costo total de todos los productos ----------------
    costoTotal += precio * Number (txtNumber.value); 
    precioTotal.innerText = "$" + costoTotal.toFixed (2); //<---- Se coloca el (2) por los decimales que se utilizan

//<------------  Visualizar el total de los productos en la lista ------------------
     totalEnProductos += Number (txtNumber.value);
     productosTotal.innerText = totalEnProductos;


    contadorProductos.innerText = cont;  // <----  visualiza la cantidad de productos dentro de la lista 



    txtName.value = "";
    txtNumber.value ="";
    txtName.focus();

} //if isValid


}); //btnAgregar