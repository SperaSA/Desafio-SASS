const CART = [];
let total = 0;

console.log('Cart:',CART)

function newUserOn() { 

let newUser = prompt('Hola, ingrese su nuevo usuario')

if((newUser == '') || (newUser == ' ')) {

    console.log('Debe ingresar un usuario para poder continuar')

}else{

    alert(`Bienvenido a MiHomeDeco ${newUser}`)

}}

newUserOn();

class Product {

    constructor(id, name, price, stock){
        
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    
    }

}

const product1 = new Product (1,'Especieros corcho', 200, 20)
const product2 = new Product (2,'Dispenser', 300, 30)
const product3 = new Product (3,'Impresiones', 'solicite cotizacion', 0);
const product4 = new Product (4,'Aromatizadores', 300, 15);
const product5 = new Product (3,'Especieros rosca', 240, 35);
const product6 = new Product (4,'Macrame', "solicite cotizacion", 0);

const PRODUCTS = [product1,product2,product3,product4,product5,product6];
 
console.log(PRODUCTS)

PRODUCTS.forEach((prod) => alert(`Los productos de MiHomeDeco son: ${prod.name}`))

let condition = 1;

while(condition == 1){ 

let userBuy = parseInt(prompt('Que producto desea comprar?  1- Especieros corcho $200 2- Dispenser $300 3-Impresiones 4-Aromatizadores $300 5-Especieros rosca $240 6-Macrame'))

switch(userBuy){

    case 1:
        if(product1.stock > 0 ){

            CART.push(product1);
            total += product1.price
            product1.stock -= 1;
            alert(`Compraste ${product1.name} quedó ${product1.stock} de stock`)

        }
        else{
            alert("No hay stock")
        }

        break;
    case 2:
        if(product2.stock > 0 ){

            CART.push(product2);
            total += product2.price
            product2.stock -= 1;
            alert(`Compraste ${product2.name} quedó ${product2.stock} de stock`)
        }
        else{
            alert("No hay stock")
        }
        break;
    case 3:
        idea = prompt("Favor indiquenos su idea, medidas exactas e informacion sobre el producto que desea")
        console.log("Usted ha solicitado una cotizacion sobre " + idea + ". Favor aguarde, y a la brevedad nos estaremos contactando");
        break;

    case 4:
        if(product4.stock > 0 ){

            CART.push(product4);
            total += product4.price
            product4.stock -= 1;
            alert(`Compraste ${product4.name} quedó ${product4.stock} de stock`)
        }
        else{
            alert("No hay stock")
        }
        break;
    }


    condition = prompt('Desea seguir comprando? 1- Si 2- No')

    if(condition!=1){
    alert(`Tu compra ha sido realizada, el total del monto es: $${CART.map(el => el.price).reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0)}`)
    
    }
}

