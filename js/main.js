//SE RECUPERAN LOS ELEMENTOS QUE CONTIENEN LA INFORMACION INGRESADA...
let txtName = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let btnAgregar = document.getElementById("btnAgregar")
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");


//OREJA PARA EL BOTON DE AGREGAR...
btnAgregar.addEventListener("click",function(event){

    event.preventDefault();
    txtName.value = txtName.value.trim();
    //txtName.innerText = txtName.value;

    txtNumber.value = txtNumber.value.trim();
    //xtNumber.innerText = txtNumber.value;

    if(txtName.value.length < 3){
        txtName.style.border = "dashed thin red";
        alertValidacionesTexto.innerHTML = "<strong> El nombre no es correcto </strong>";
        alertValidaciones.style.display = "block";
    }
    
    




});