// Função que retorna função = Closure

function criaMultiplicador(fator){
    return function(numero) {
        return numero * fator;

    }
}

const dobrar = criarMultiplicador(2);
const dobrar = criarMultiplicador(3);

console.log(dobrar(5));
console.log(triplicar(5));
