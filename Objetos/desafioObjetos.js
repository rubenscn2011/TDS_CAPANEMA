/*shift + Alt + A -> Atalho para comentário de várias linhas

Desafio: Criar um objeto que contenha informações de um filme favorito, 
sendo necessário inserir uma nova propriedade, modificar uma existente, e
excluir uma propriedade. No final imprimir o objeto no console.

*/

const filmeFavorito = {
    titulo: "A Forja",
    lançamento: 2025
    genero: "Gospel"

}

    filmeFavorito.protagonista ="Jonas"; // Adionar
    console.log(filmeFavorito);


    filmeFavorito.lançamento =2025; // Modificar
    console.log(filmeFavorito);

    delete filmeFavorito.protagonista; // Excluir
    console.log(filmeFavorito);
