//os arrays tambem sao indexados porem de uma forma diferente.

//               0       1          2          3            4       5    // ou seja cada array equivale a um numero index
let alunos = ['yan','carlos','edenilso', 'mbappe']; // mellisa , mel
alunos = 123;
console.log(typeof alunos);
console.log( alunos instanceof Array);

alunos.push('melissa'); 
alunos.push('mel');
console.log(alunos.slice(0,3))
//deste forma voce pode deletar uma array sem alterar os indices de dentro, porem o array ficara com um espaço vazio.
delete alunos[1];
console.log(alunos);

// funcao POP remove o ultimo array.
alunos.pop();

//funcao SHIFT remove o primeiro aray, assim mudando todos os indices do array
alunos.shift()

//tambem podemos salvar esse array excluido em uma variavel.
const arrayRemovido = alunos.shift()
console.log(arrayRemovido) // mostra o array que foi removido
console.log(alunos) // mostra os arrays que restaram




// UNSHIFT adiciona no comeco dos array, assim alterando todo o indice mostrado acima, neste caso o indice 0 vai ser o choice pois foi o ultimo a ser adicinado, caso adicionasse mais um choice seria passado para frente e seria o indice 1 e assim por diante
alunos.unshift('cesar');
alunos.unshift('choice');
console.log(alunos)


// funcao PUSH neste caso adiciona um array apos o ultimo array.
alunos.push('sant');
alunos.push('armando');

alunos[alunos.length] = 'sant' // tambem adiciona um array no final
alunos[alunos.length] = 'armando'
console.log(alunos)

alunos[0] = 'ph' // aqui ele edita o indice 0 
alunos[4] = 'carlin' // como nao tem o indice 4 ele cria.
console.log(alunos)

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[3]);