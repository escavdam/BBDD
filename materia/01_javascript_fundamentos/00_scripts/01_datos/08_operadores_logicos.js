//Los operadores lógicos nos permiten combinar dos o más condiciones lógicas en una sola.

// Operador lógico AND (&&)
// Operador lógico OR (||)
// Operador lógico NOT (!)

//AND devuelve true cuando ambas condiciones son true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//OR devuelve true cuando al menos una de las condiciones es true
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//NOT devuelve true cuando la condicion es false y false cuando la condicion es true
console.log(!true);
console.log(!false);

// Analiza el siguiente código:

let despierto = true
let relajado = true
let concentrado = true
let listo_para_programar = despierto && relajado && concentrado

if(despierto){
  console.log("Estoy despierto")
}else{
  console.log("Tengo sueño")
}

if(relajado){
  console.log("Estoy relajado")
}else{
  console.log("Estoy intranquilo")
}

if(concentrado){
  console.log("Estoy concentrado")
}else{
  console.log("Tengo la cabeza hecha un lio")
}

if(despierto && relajado && concentrado){
  console.log("Estoy listo para programar")
}else{
  console.log("Necesito unos minutos aún")
}

// Analiza el siguiente código:

let sensorLimite = false
let pulsadorEmergencia = false
let alarmaPLC = false

let apagadoEmergencia = sensorLimite || pulsadorEmergencia || alarmaPLC

console.log(`El sensor tiene un estado ${sensorLimite}`)
console.log(`El pulsador tiene un estado ${pulsadorEmergencia}`)
console.log(`La alarma PLC tiene un estado ${alarmaPLC}`)
if(apagadoEmergencia){
  console.log("Emergencia! Algun error")
}else{
  console.log("Todo OK")
}