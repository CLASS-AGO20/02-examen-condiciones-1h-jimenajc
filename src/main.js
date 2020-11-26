export default class App {

    convertir(pesos){
        let resultado;

        if( pesos < 2000){
            resultado = pesos * 20.5;
        }else {
            resultado = pesos * 22.7;
        }

        return resultado;
        
    }

    costoRenta(kilometros){
        let resultado;

        if (kilometros < 50){
            resultado = kilometros * 3;
        } else if (kilometros < 100){
            resultado = kilometros * 5;
        } else if (kilometros < 200){
            resultado = kilometros * 6;
        } else {
            resultado = kilometros * 6.5;
        }
        return resultado;
    }
}

let app = new App();

console.log(app.convertir(100));
console.log(app.convertir(2000));
console.log(app.convertir(2100));

console.log(app.costoRenta(25));
console.log(app.costoRenta(50));
console.log(app.costoRenta(90));
console.log(app.costoRenta(100));
console.log(app.costoRenta(125));
console.log(app.costoRenta(200));
console.log(app.costoRenta(250));
