function aumentoSueldo() {
    var nombre = "Adrian"
    var apellido = "Zalazar"
    console.log("hola,estimado",nombre, apellido );
    
    
    var sueldoActual = 20000
    console.log("su sueldo actual es de : $", sueldoActual);
    
    var porcentajeAumento = 25
    var calculoAumento = (sueldoActual * porcentajeAumento)/100
    console.log("Ha recibido un aumento del 25%: $", calculoAumento);
    
    var nuevoSueldo = sueldoActual + calculoAumento
    console.log("y su nuevo sueldo es de : $", nuevoSueldo);
    
}

console.log(aumentoSueldo());
