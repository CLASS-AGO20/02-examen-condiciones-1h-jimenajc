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
}

let app = new App();

console.log(app.convertir(100));
console.log(app.convertir(2000));
console.log(app.convertir(2100));