//--Ex01--------------------------------------
let nome: string = "Leonardo"
let idade: number = 36
let isCasado: boolean = true
let hobby: string[] = ["Jogar", "Pintar", "Jiu-Jitsu"]

const descricao = (`Nome: ${nome} | Idade: ${idade} | Casado: ${isCasado ? "sim" : "nao"} | Hobbies: ${hobby.join(', ')}`);
console.log(descricao);


//--Ex02--------------------------------------
interface Livro {
    titulo: string;
    autor: string;
    paginas: number;
    disponivel: boolean;
}

const livro: Livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    paginas: 310,
    disponivel: true
};

function sinopse(livro: Livro): string {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor} e tem ${livro.paginas} páginas. Está disponível? ${livro.disponivel ? 'Sim' : 'Não'}.`;
}

console.log(sinopse(livro));

//--Ex03--------------------------------------
function areaCirculo(raio: number = 1): number {
    return Math.PI * Math.pow(raio, 2);
}

console.log(areaCirculo());
console.log(areaCirculo(5));

//--Ex04--------------------------------------
function repetirPalavra(texto: string, vezes?: number): string {
    return texto.repeat(vezes ?? 3);
}

console.log(repetirPalavra('Birujuice'));
console.log(repetirPalavra('Birujuice', 3));

//--Ex05--------------------------------------
interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

const pessoa: Pessoa = {
    nome: 'Gandalf, o Cinzento',
    idade: 2000,
    profissao: 'Mago'
};

function descreverPessoa(pessoa: Pessoa): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e é um ${pessoa.profissao}.`;
}

console.log(descreverPessoa(pessoa));

//--Ex06--------------------------------------
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

function porCategoria(produtos: Produto[], categoria: string): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria);
}

const produtos: Produto[] = [
    { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
    { nome: 'Camiseta', preco: 50, categoria: 'Vestuário' },
    { nome: 'Smartphone', preco: 2000, categoria: 'Eletrônicos' },
];

console.log(porCategoria(produtos, 'Eletrônicos'));

//--Ex07 e Ex08--------------------------------------
class Carro {
    marca: string;
    modelo: string;
    ano: number;
    static contador = 0;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        Carro.contador++;
    }

    descrever(): string {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }

    static totalCarros(): number {
        return Carro.contador;
    }
}

const carro1 = new Carro('Chevrolet', 'Tracker', 2019);
const carro2 = new Carro('Ford', 'Fusion', 2020);

console.log(Carro.totalCarros());

//--Ex09--------------------------------------
class Animal {
    som(): string {
        return 'O animal faz um som';
    }
}

class Cachorro extends Animal {
    som(): string {
        return 'O cachorro late';
    }
}

class Gato extends Animal {
    som(): string {
        return 'O gato mia';
    }
}

const cachorro = new Cachorro();
const gato = new Gato();

console.log(cachorro.som());
console.log(gato.som());

//--Ex10--------------------------------------
class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario(): number {
        return this.salario;
    }
}

class FuncionarioHorista extends Funcionario {
    horasTrabalhadas: number;
    valorPorHora: number;

    constructor(nome: string, horasTrabalhadas: number, valorPorHora: number) {
        super(nome, horasTrabalhadas * valorPorHora);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorPorHora = valorPorHora;
    }

    calcularSalario(): number {
        return this.horasTrabalhadas * this.valorPorHora;
    }
}

class FuncionarioAssalariado extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularSalario(): number {
        return this.salario;
    }
}

const horista = new FuncionarioHorista('Finn', 40, 20);
const assalariado = new FuncionarioAssalariado('Jake', 3000);

console.log(horista.calcularSalario());
console.log(assalariado.calcularSalario());

//--Ex11--------------------------------------
function primeiroElemento<T>(array: T[]): T {
    return array[0];
}

console.log(primeiroElemento([1, 2, 3]));
console.log(primeiroElemento(['a', 'b', 'c']));
console.log(primeiroElemento([{ nome: 'Objeto1' }, { nome: 'Objeto2' }]));


//--Ex12--------------------------------------
class Caixa<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    armazenarValor(valor: T): void {
        this.valor = valor;
    }

    recuperarValor(): T {
        return this.valor;
    }
}

const caixaNumero = new Caixa<number>(100);
console.log(caixaNumero.recuperarValor());

const caixaString = new Caixa<string>('Parangaricutirimícuaro');
console.log(caixaString.recuperarValor());


//--Ex13--------------------------------------
function calcularDistancia([x, y]: [number, number]): number {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

console.log(calcularDistancia([3, 4]));


//--Ex14--------------------------------------
enum DiaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

function diaUtil(dia: DiaSemana): boolean {
    return dia !== DiaSemana.Domingo && dia !== DiaSemana.Sabado;
}

console.log(diaUtil(DiaSemana.Segunda));
console.log(diaUtil(DiaSemana.Domingo));


//--Ex15--------------------------------------
function maiorMenor(numeros: number[]): [number, number] {
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    return [maior, menor];
}

console.log(maiorMenor([10, 5, 20, 15]));


//--Ex16--------------------------------------
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

function filtrarPorPreco(produto: Produto[], valor: number): Produto[] {
    return produto.filter(produto => produto.preco > valor);
}

const produto: Produto[] = [
    { nome: 'Macbook Pro M3', preco: 15000, categoria: 'Eletrônicos' },
    { nome: 'Camiseta Osklen', preco: 300, categoria: 'Vestuário' },
    { nome: 'Rog Ally', preco: 8000, categoria: 'Eletrônicos' },
];

console.log(filtrarPorPreco(produtos, 1000));


//--Ex17--------------------------------------
function inversa(frase: string): string {
    return frase.split(' ').reverse().join(' ');
}

console.log(inversa('Socorram-me, subi no ônibus em Marrocos!'));


//--Ex18--------------------------------------
function contarVogais(frase: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return frase.split('').filter(letra => vogais.includes(letra.toLowerCase())).length;
}

console.log(contarVogais('Parangaricutirimícuaro'));


//--Ex19--------------------------------------
async function buscarDados(): Promise<string> {
    return new Promise((aceito, rejeitado) => {
        setTimeout(() => {
            const sucesso = true;
            if (sucesso) {
                aceito('Dados encontrados');
            } else {
                rejeitado('Erro ao buscar dados');
            }
        }, 2000);
    });
}

async function executarBusca() {
    try {
        const dados = await buscarDados();
        console.log(dados);
    } catch (erro) {
        console.log(erro);
    }
}

executarBusca();


//--Ex20--------------------------------------
async function chamada1(): Promise<number> {
    return new Promise(resultado => setTimeout(() => resultado(10), 1000));
}

async function chamada2(): Promise<number> {
    return new Promise(resultado => setTimeout(() => resultado(20), 1500));
}

async function combinarResultados() {
    const [resultado1, resultado2] = await Promise.all([chamada1(), chamada2()]);
    return { resultado1, resultado2 };
}

combinarResultados().then(console.log);


//--Ex21--------------------------------------
function adicionarDiv(texto: string): void {
    const novaDiv = document.createElement('div');
    novaDiv.textContent = texto;
    document.body.appendChild(novaDiv);
}

adicionarDiv('Texto dinâmico');


//--Ex22--------------------------------------
function adicionarItens(itens: string[]): void {
    const ul = document.querySelector('ul');
    if (ul) {
        itens.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    }
}

adicionarItens(['Item 1', 'Item 2', 'Item 3']);


//--Ex25--------------------------------------
interface Permissoes {
    criar: boolean;
    editar: boolean;
    deletar: boolean;
}

interface Usuario {
    nome: string;
    email: string;
}

interface PermissoesUsuarios extends Usuario, Permissoes { }

const usuario: PermissoesUsuarios = {
    nome: 'Beemo',
    email: 'beemo@bmo.com',
    criar: true,
    editar: false,
    deletar: false
};

console.log(usuario);


//--Ex26--------------------------------------
function pegarValor<T, K extends keyof T>(objeto: T, chave: K): T[K] {
    return objeto[chave];
}

const pessoa1 = { nome: 'Marceline', idade: 1003 };
console.log(pegarValor(pessoa, 'nome'));


//--Ex27--------------------------------------
function verificarTipo(valor: string | number): string {
    if (typeof valor === 'string') {
        return `Você digitou uma string: ${valor}`;
    } else {
        return `Você digitou um número: ${valor}`;
    }
}

console.log(verificarTipo('Opa'));
console.log(verificarTipo(123));


//--Ex28--------------------------------------
class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Empresa {
    nome: string;
    cnpj: string;
    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
}

function verificarInstancia(objeto: Pessoa | Empresa): string {
    if (objeto instanceof Pessoa) {
        return `Pessoa: ${objeto.nome}`;
    } else {
        return `Empresa: ${objeto.nome} - CNPJ: ${objeto.cnpj}`;
    }
}

const pessoa2 = new Pessoa('Poring');
const empresa2 = new Empresa('Gravity', '51.805.874/0001-57');

console.log(verificarInstancia(pessoa2));
console.log(verificarInstancia(empresa2));

//--Ex29--------------------------------------
interface ProdutoLista {
    preco: number;
    quantidade: number;
}

function valorTotal(produtosLista: ProdutoLista[]): number {
    return produtosLista.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
}

const produtosLista: ProdutoLista[] = [
    { preco: 10, quantidade: 2 },
    { preco: 20, quantidade: 1 },
    { preco: 15, quantidade: 3 },
];

console.log(valorTotal(produtosLista));


//--Ex30--------------------------------------
interface ProdutoCategoria {
    nome: string;
    categoria: string;
}

function procurar(produtosCategoria: ProdutoCategoria[], categoria: string): ProdutoCategoria[] {
    return produtosCategoria.reduce((listaFiltrada, produtoC) => {
        if (produtoC.categoria === categoria) {
            listaFiltrada.push(produtoC);
        }
        return listaFiltrada;
    }, [] as ProdutoCategoria[]);
}

const produtoC: ProdutoCategoria[] = [
    { nome: 'Macbook Pro M3', categoria: 'Eletrônicos' },
    { nome: 'Camiseta Osklen', categoria: 'Vestuário' },
    { nome: 'Rog Ally', categoria: 'Eletrônicos' },
];

console.log(procurar(produtoC, 'Eletrônicos'));

