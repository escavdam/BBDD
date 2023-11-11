//Los bucles for son buenos para repetir instrucciones varias veces.
//Ejemplo:
  
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
//Para crear un for loop, necesitamos siempre:
//1. Inicializacion
//2. Condición
//3. Incremento
//4. Cuerpo del for loop
  
//Un for es muy util para iterar sobre elementos como arrays:

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

for (let i = 0; i < items.length; i++) { //Fijate bien en la condicion de salida
  console.log(items[i])
}


