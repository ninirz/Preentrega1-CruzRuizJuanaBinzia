/*Tiene de ropa
Se da N productos que se compraran y por cada producto, se ingresa la cantidad de ese producto
Se agrega el iva
Aplicar descuento por HOT SALE
-Menos de 500 5%
-Entre 500-1500 10%
-Mas de 1500 25%
*/

let precio=0
function mostrarprecios(){
    console.log("1.Pantalones: $1250")
    console.log("2.Camisa: $120")
    console.log("3.Calcetines: $20")
    console.log("4.Zapatos: $350")
    console.log("5.falda: $22")
    console.log("6.Short: $140")
}
function identificador(ropa){
    switch(ropa){
        case 1:
            precio=1250
            return "Pantalon"
            break;
        case 2:
            precio=120
            return "Camisa"
            break
        case 3:
            precio=20
            return "Calcetines"
            break
        case 4:
            precio=350
            return "Zapatos"
            break
        case 5:
            precio=22
            return "Falda"
            break
        case 6:
            precio=140
            return "Short"
            break;

    }
}

let multi=(tipo,cantidad)=>{
    switch(tipo){
        case 1:
            return 1250*cantidad
            break;
        case 2:
            return 120 * cantidad
            break
        case 3:
            return 20 * cantidad          
            break
        case 4:
            return 350 * cantidad
            break
        case 5:
            return 22 * cantidad
            break
        case 6:
            return 140 * cantidad
            break;
    }
}
let iva=function(precio){return precio*1.16}

console.log("Tienda de ropa")
console.log("Producto    Precio Cantidad SinIVA   ConIVA")
let sumaSINIVA=0;
let sumaCONIVA=0;
mostrarprecios()

while(true){
    precio=0
    let tipo=parseInt(prompt("¿Qué prenda deseas llevar? Si ya no deseas más prendas ingresa el 0"))

    if(tipo==0){
        break;
    }
    let ropa=identificador(tipo)
    let cantidad=parseInt(prompt("¿Cuant@s deseas llevar? La cantidad"))
    let ParcialSINIVA=multi(tipo,cantidad)
    let ParcialCONIVA=iva(ParcialSINIVA)
    sumaSINIVA+=ParcialSINIVA;
    sumaCONIVA+=ParcialCONIVA
    console.log(ropa+"      "+precio+"  "+cantidad+"  "+ParcialSINIVA+ "   "+ ParcialCONIVA)
}

console.log("Total")
console.log(`Sin IVA: ${sumaSINIVA}`)
console.log(`Con IVA: ${sumaCONIVA}`)

alert('TOTAL CON IVA: $'+sumaCONIVA)