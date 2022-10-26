const comprar = () =>{

console.log("Bienvenidos a la tienda Oficial de HiHome Deco");
alert("Bienvenidos a la tienda Oficial de HiHome Deco");

var nombreUsuario = prompt("¿Posee usuario y contraseña?");
if((nombreUsuario=="si")||(nombreUsuario=="Si")||(nombreUsuario=="sI")){
    var usuario = prompt("Indique su usuario");
    var contraseña = prompt("Indique su contraseña");
}else{
    alert("Favor cree un usuario antes de continuar");
    var usuario = prompt("Indique su usuario");
    var contraseña = prompt("Indique su contraseña");
}

console.log("Bienvenido " + usuario + ", ya puedes comenzar a comprar");
alert("Bienvenido " + usuario + ", ya puedes comenzar a comprar");


do{
    
    var pedido = prompt("Favor indique el producto deseado, basandose en los numeros o nombre que figuran al principio de cada item")
    cantidad = Number(prompt("Indique la cantidad del producto")); 

    if((pedido==1)||(pedido=="Especieros")||(pedido=="ESPECIEROS")||(pedido=="especieros")){
    
    Especieros = 200;
    ESPECIEROS = 200;
    especieros = 200;
    console.log("Usted a seleccionado " + cantidad + " unidades de " + pedido + ": Sumando un total de $" + (especieros*cantidad));

    }if(cantidad<20){

    }else{
        alert("No hay Stock sobre la cantidad deseada")
    }

    if((pedido==2)||(pedido=="Dispenser")||(pedido=="DISPENSER")||(pedido=="dispenser")){
    
        Dispenser = 300;
        DISPENSER = 300;
        dispenser = 300;
        console.log("Usted a seleccionado " + cantidad + " unidades de " + pedido + ": Sumando un total de $" + (dispenser*cantidad));
    
    }if(cantidad<30){

    }else{
        alert("No hay Stock sobre la cantidad deseada")
    }

    if((pedido==3)||(pedido=="Impresiones")||(pedido=="IMPRESIONES")||(pedido=="impresiones")){
    
        idea = prompt("Favor indiquenos su idea, medidas exactas e informacion sobre el producto que desea")
        console.log("Usted ha solicitado una cotizacion sobre " + idea + ". Favor aguarde, y a la brevedad nos estaremos contactando");
    
    }if(cantidad<100){

    }else{
        alert("No hay Stock sobre la cantidad deseada")
    }

    if((pedido==4)||(pedido=="Aromatizadores")||(pedido=="AROMATIZADORES")||(pedido=="aromatizadores")){
    
        Aromatizadores = 300;
        AROMATIZADORES = 300;
        aromatizadores = 300;
        console.log("Usted a seleccionado " + cantidad + " unidades de " + pedido + ": Sumando un total de $" + (aromatizadores*cantidad));
    
        }if(cantidad<15){
    
        }else{
            alert("No hay Stock sobre la cantidad deseada")
        }

        if((pedido==5)||(pedido=="Especieros a rosca")||(pedido=="ESPECIEROS A ROSCA")||(pedido=="especieros a rosca")){
    
            EspecierosR = 240;
            ESPECIEROSR = 240;
            especierosR = 240;
            console.log("Usted a seleccionado " + cantidad + " unidades de " + pedido + ": Sumando un total de $" + (especierosR*cantidad));
        
            }if(cantidad<35){
        
            }else{
                alert("No hay Stock sobre la cantidad deseada")
            }
              
        if((pedido==6)||(pedido=="Macrame")||(pedido=="MACRAME")||(pedido=="macrame")){
    
            idea = prompt("Favor indiquenos su idea, medidas exactas e informacion sobre el producto que desea")
            console.log("Usted ha solicitado una cotizacion sobre " + idea + ". Favor aguarde, y a la brevedad nos estaremos contactando");
    
        }if(cantidad<100){

        }else{
            alert("No hay Stock sobre la cantidad deseada")
        }
    

    var continuar = prompt("¿Desea seguir comprando?")

}while((continuar=="Si")||(continuar=="SI")||(continuar=="si"))

}