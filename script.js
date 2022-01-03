// spread passa os valores separados como parâmetros
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); 
console.log("***********************************");

// rest combina os elementosa em um array
function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(1, 2, 3);

console.log("***********************************");

// object destructuring - pode filtrar os dados apenas que interessam
const user = {
    id: 42,
    displayName: 'Alex',
    fullName: {
        firstName: 'Wallace',
        lastName: 'Souza'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));

console.log(getFullName(user));

console.log("***********************************");


// condições
// if 
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return "Esse número é negativo!";
    } else if(!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!";
    }

    return "Esse número é positivo";
}

console.log(numeroPositivo(-1));
console.log(numeroPositivo(2));
console.log(numeroPositivo(25));
console.log("");

console.log("***********************************");

// switch/case
function getAnimel(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2: 
            return "gato";
        case 3:
            return "passaro";
        default:
            return "peixe";
    }
}

console.log(getAnimel(1));
console.log(getAnimel(2));
console.log(getAnimel(3));
console.log(getAnimel("xx"));
console.log("");

console.log("***********************************");

// for
// multiplicar todos os números de um array por dois
function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 4, 55, 456, 333, 25];

console.log(multiplicaPorDois(meusNumeros));

// for in - pegando as chaves do objeto
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop); // pega as chaves do obj
    }
}

const meuObjeto = {
    nome: "Jose",
    idade: "30",
    cidade: "Natal"
}

forInExemplo(meuObjeto);
console.log("");

// for in - pegando os valores do objeto
function forInExemplo2(obj2) {
    for(prop in obj2) {
        console.log(obj2[prop]); // pega os valores do obj
    }
}

const meuObjeto2 = {
    nome: "João",
    idade: "33",
    cidade: "Natal"
}

forInExemplo2(meuObjeto2);
console.log("");


// for of - loop entre estruturas iteráveis (arrays, strings)
function logLetras(palavra) {
    for(letra of palavra) { // para cada letra dentro de palavra 
        console.log(letra); 
    }
}

const palavra = "cachorro";

logLetras(palavra);

// for of
function logNumeros(nums) {
    for(num of nums) { // para cada número dentro de nums
        console.log(num);
    }
}

const nums = [30, 20, 150, 5];

logLetras(nums);

console.log("***********************************");

// while
function exemploWhile() {
    let num = 0;

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

exemploWhile();

// do...while
function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while(num <= 5)
}

exemploDoWhile();

console.log("***********************************");

// this - refere-se ao contexto
const pessoa = {
    firstName: "Andre",
    lastName: "Souza",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName());

console.log(pessoa.getId());


console.log("***********************************");

// arrow function - obs arrow function não faz hoisting
// arrow function basica
const helloWord = () => "Hello Word";

const teste = function() {
    return "Teste";
}

const soma = (a, b) => a + b;

console.log("***********************************");
// função que recebe um array e um número que irá representar a média final.
const alunos = [
    {
        nome: 'Jose',
        nota: 5,
        turma: '2C',
    },
    {
        nome: 'Sandra',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Mariana',
        nota: 7,
        turma: '2C',
    },
    {
        nome: 'Felipe',
        nota: 2,
        turma: '1C',
    }
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));


console.log("***********************************");

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Marcos",
    idade: 30
}

const pessoa2 = {
    nome: "Maria",
    idade: 28
}

const animal = {
    nome: "Max",
    idade: 15,
    raca: "pug"
}

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.call(animal, 10));

console.log(calculaIdade.apply(animal, [5]));


console.log("***********************************");

// map

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('João', 'Admin');
usuarios.set('Pedro', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));


console.log("***********************************");

// set
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));