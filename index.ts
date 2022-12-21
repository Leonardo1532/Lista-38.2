class Carro {
    Marca: string
    Modelo: string
    Categoria: string
    Ano: number
    Quilometragem: number
    Valor: number
    constructor(marca: string, modelo: string, categoria: string, ano: number, quilometragem: number, valor: number) {
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

let Carro1 = new Carro("hyundai", "I30", "Compacto", 2012, 80000, 45000)

// 1. Crie uma função que retorne a lista de todos os carros;

function RetornarLista() {
    return fetch('https://apigenerator.dronahq.com/api/X6ku09AJ/Carro')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

// 2. Crie uma função que recebe como parâmetro o id de um carro e retorna apenas a
// marca, modelo, ano e valor desse carro;

async function GetData(id: string) {
    const response = await fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro/" + id, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

// 3. Crie uma função para adicionar um carro e solicite essas informações ao usuário;

function AdicionarCarro() {
    let marca = prompt("Insira a marca do veiculo")
    let modelo = prompt("Insira o modelo do veiculo")
    let categoria = prompt("Insira a categoria do veiculo")
    let ano = parseInt(prompt("Insira o ano do veiculo"))
    let quilometragem = parseInt(prompt("Insira a quilometragem do veiculo"))
    let valor = parseInt(prompt("Insira o valor do veiculo"))

    return new Carro(marca, modelo, categoria, ano, quilometragem, valor)
}

async function PostData() {
    let data = AdicionarCarro()
    const response = await fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}


// 4. Crie uma função para alterar o valor de um carro, essa função deve receber como
// parâmetro o id do carro e o objeto desse carro com o valor alterado;

async function PutData(id: string) {
    let data2 = AdicionarCarro()
    const response = await fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro/" + id, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data2)
    });
    return response.json();
}

// 5. Crie uma função para excluir um carro, essa função deve solicitar ao usuário o id do
// carro que deseja excluir;

async function DeleteData(id: string) {
    const response = await fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro/" + id, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
    return response.json();
}

// 6. Organize a execução do código dando a opção para o usuário do que ele deseja
// fazer e solicitando as informações necessárias.
let continuar = true
while (continuar) {
    let opcao = prompt("Insira uma opcao para continuar! Retornar todos os carros(1), Retornar po ID(2), Adicionar Carro(3), Alterar Valor(4), Excluir Carro(5)")
    switch (opcao) {
        case "1":
            RetornarLista()
            break;
        case "2":
            let idCarro = prompt("Insira um id")
            GetData(idCarro)
            break;
        case "3":
            PostData()
            break;
        case "4":
            let idAlterar = prompt("Insira um id")
            PutData(idAlterar)
            break;
        case "5":
            let idDeletar = prompt("Insira um id")
            DeleteData(idDeletar)
            break;
        default:
            console.log("Opção inválida")
            break;
    }
    let novamente = prompt("Deseja continuar executando? s ou n")
    if (novamente != "s") {
        continuar = false
    }
}