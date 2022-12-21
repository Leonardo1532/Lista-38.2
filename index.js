var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor;
    }
    return Carro;
}());
var Carro1 = new Carro("hyundai", "I30", "Compacto", 2012, 80000, 45000);
// 1. Crie uma função que retorne a lista de todos os carros;
function RetornarLista() {
    return fetch('https://apigenerator.dronahq.com/api/X6ku09AJ/Carro')
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); });
}
// 2. Crie uma função que recebe como parâmetro o id de um carro e retorna apenas a
// marca, modelo, ano e valor desse carro;
function GetData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro/" + id, {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) { return console.log(data); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 3. Crie uma função para adicionar um carro e solicite essas informações ao usuário;
function AdicionarCarro() {
    var marca = prompt("Insira a marca do veiculo");
    var modelo = prompt("Insira o modelo do veiculo");
    var categoria = prompt("Insira a categoria do veiculo");
    var ano = parseInt(prompt("Insira o ano do veiculo"));
    var quilometragem = parseInt(prompt("Insira a quilometragem do veiculo"));
    var valor = parseInt(prompt("Insira o valor do veiculo"));
    return new Carro(marca, modelo, categoria, ano, quilometragem, valor);
}
function PostData() {
    return __awaiter(this, void 0, void 0, function () {
        var data, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = AdicionarCarro();
                    return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro", {
                            method: 'POST',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer',
                            body: JSON.stringify(data)
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// 4. Crie uma função para alterar o valor de um carro, essa função deve receber como
// parâmetro o id do carro e o objeto desse carro com o valor alterado;
function PutData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data2, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data2 = AdicionarCarro();
                    return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro/" + id, {
                            method: 'PUT',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer',
                            body: JSON.stringify(data2)
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// 5. Crie uma função para excluir um carro, essa função deve solicitar ao usuário o id do
// carro que deseja excluir;
function DeleteData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/X6ku09AJ/Carro/" + id, {
                        method: 'DELETE',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// 6. Organize a execução do código dando a opção para o usuário do que ele deseja
// fazer e solicitando as informações necessárias.
var continuar = true;
while (continuar) {
    var opcao = prompt("Insira uma opcao para continuar! Retornar todos os carros(1), Retornar po ID(2), Adicionar Carro(3), Alterar Valor(4), Excluir Carro(5)");
    switch (opcao) {
        case "1":
            RetornarLista();
            break;
        case "2":
            var idCarro = prompt("Insira um id");
            GetData(idCarro);
            break;
        case "3":
            PostData();
            break;
        case "4":
            var idAlterar = prompt("Insira um id");
            PutData(idAlterar);
            break;
        case "5":
            var idDeletar = prompt("Insira um id");
            DeleteData(idDeletar);
            break;
        default:
            console.log("Opção inválida");
            break;
    }
    var novamente = prompt("Deseja continuar executando? s ou n");
    if (novamente != "s") {
        continuar = false;
    }
}
