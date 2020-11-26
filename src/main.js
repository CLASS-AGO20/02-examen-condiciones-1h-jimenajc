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

    puedeCircular(dia, terminacion){
        let resultado;

        switch(terminacion){
            case 0:
                if(dia === 1){
                    resultado = true;
                } else {
                    resultado = false;
                }
                break;
            case 1:
                if(dia === 2){
                    resultado = true;
                } else {
                    resultado = false;
                }
                break;
            case 2:
                if (dia === 3){
                    resultado = true;
                } else if (dia === 4){
                    resultado = true;
                } else {
                    resultado = false;
                }
                break;
            default:
                resultado = true;
        }
        if (dia !== 1 && dia !== 2 && dia !== 3 && dia !== 4 && dia !== 5 && dia !== 6 && dia !== 7 ){
            resultado = false;
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

console.log(app.puedeCircular(1, 0));
console.log(app.puedeCircular(1, 2));
console.log(app.puedeCircular(2, 1));
console.log(app.puedeCircular(2, 0));
console.log(app.puedeCircular(3, 2));
console.log(app.puedeCircular(3, 0));
console.log(app.puedeCircular(20, 0));
console.log(app.puedeCircular(1, 8));
console.log(app.puedeCircular(1, 9));
console.log(app.puedeCircular(5, 7));