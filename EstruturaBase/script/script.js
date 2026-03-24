// 1        
function limparCadastro() {
    const nomeCompleto = document.getElementById("inputNome").value;

    const nomeMinusculo = nomeCompleto.trim().toLowerCase().split(" "); //Nome minúsculo, sem espaços nas laterais e com array.

    const primeiroNome = nomeMinusculo[0];

    const elementoNome = document.getElementById("resultadoNome");
    elementoNome.innerHTML = elementoNome.innerHTML.replace("-", `${primeiroNome}`);
}

// 2
function verificarEmail() {
    const email = document.getElementById("inputEmail").value

    const verificacao = email.endsWith("@gmail.com")

    const verificacaoFinal = (verificacao) => {
        if (verificacao == true) {
            return (`O e-mail enviado termina com @gmail.`)
        }
        else {
            return (`O e-mail enviado não termina com @gmail.com.`)
        }
    }

    const elementoEmail = document.getElementById("resultadoEmail");
    elementoEmail.innerHTML = elementoEmail.innerHTML.replace("-", `${verificacaoFinal(verificacao)}`);
}

// 3
function mascararCartao() {
    const cartao = document.getElementById("inputCartao").value

    const ultimosDigitos = cartao.slice(-4,)
    const mascarado = ultimosDigitos.padStart(16, "*");

    const elementoCartao = document.getElementById("resultadoCartao");
    elementoCartao.innerHTML = elementoCartao.innerHTML.replace("-", `${mascarado}`);
}

// 4
function localizarUsuario() {
    const string = "admin:felipe:gerente";

    const primeiroPonto = string.indexOf(":");
    const ultimoPonto = string.lastIndexOf(":");

    const elemento1 = document.getElementById("resultadoPrimeiroPonto");
    elemento1.innerHTML = elemento1.innerHTML.replace("-", `${primeiroPonto}`);

    const elemento2 = document.getElementById("resultadoUltimoPonto");
    elemento2.innerHTML = elemento2.innerHTML.replace("-", `${ultimoPonto}`);
}

// 5
function transformarTitulo() {
    const titulo = document.getElementById("inputTitulo").value;

    const tituloFormatado = titulo.trim().toLowerCase();
    const tituloArray = tituloFormatado.split(" ");
    const tituloFinal = tituloArray.join('-');

    const elementoTitulo = document.getElementById("resultadoTitulo");
    elementoTitulo.innerHTML = elementoTitulo.innerHTML.replace("-", `${tituloFinal}`);
}

// 6

function censurar() {
    const texto = document.getElementById("inputCensura").value;

    const censurado = texto.replace("erro", "sucesso");

    const elementoCensura = document.getElementById("resultadoCensura");
    elementoCensura.innerHTML = elementoCensura.innerHTML.replace("-", `${censurado}`);
}

// 7
function extrairDominio() {
    const url = "https://google.com"

    const dominio = url.substring(8, 14);

    const elementoDominio = document.getElementById("resultadoDominio");
    elementoDominio.innerHTML = elementoDominio.innerHTML.replace("-", `${dominio}`);
}

// 8
function validar() {
    const sms = document.getElementById("inputSMS").value;
    const tamanhoSMS = sms.length;

    const elementoValidado = document.getElementById("resultadoValidacao");
    elementoValidado.innerHTML = elementoValidado.innerHTML.replace("-", `O SMS tem: ${tamanhoSMS} caracteres.`);
}

// 9
function formatar() {
    const cpf = document.getElementById("inputCPF").value;

    const cpfFormatado = (cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11))

    const cpfOk = document.getElementById("resultadoFormatado");
    cpfOk.innerHTML = cpfOk.innerHTML.replace("-", `${cpfFormatado}`);
}

// 10
function alertar() {
    const stringAlerta = document.getElementById("inputAlerta").value;
    const numAlerta = document.getElementById("inputNumAlerta").value;

    const repeticao = stringAlerta.repeat(numAlerta);

    const elementoAlerta = document.getElementById("resultadoAlerta");
    elementoAlerta.innerHTML = elementoAlerta.innerHTML.replace("-", `${repeticao}`);
}

// 11
function sortear() {

    const gerarNumeroAleatorio = (min, max) => {
        return Math.floor(Math.random() * (max - min + min)) + min;
    };

    const elementoSorteio = document.getElementById("resultadoSorteio");
    elementoSorteio.innerHTML = elementoSorteio.innerHTML.replace("-", `${gerarNumeroAleatorio(1,30)}`);
}

// 12
function arredondar() {
    const nota = document.getElementById("inputNota").value;

    const notaFinal = Math.ceil(nota);

    const elementoNota = document.getElementById("resultadoArredondar");
    elementoNota.innerHTML = elementoNota.innerHTML.replace("-", `${notaFinal}`);
}

// 13
function dado() {
    const gerarNumeroAleatorio = (min, max) => {
        return Math.floor(Math.random() * (max - min + min)) + min;
    };

    const elementoDado = document.getElementById("resultadoDado");
    elementoDado.innerHTML = elementoDado.innerHTML.replace("-", `${gerarNumeroAleatorio(1,6)}`);
}

// 14
function inteirar() {
    const precoDec = document.getElementById("inputPreco").value;

    const precoInt = Math.trunc(precoDec);

    const elementoPreco = document.getElementById("resultadoPreco");
    elementoPreco.innerHTML = elementoPreco.innerHTML.replace("-", `${precoInt}`);
}

// 15
function calcularRaiz() {
    const numeroRaiz = document.getElementById("inputNumeroRaiz").value;

    const calcularRaiz = Math.sqrt(numeroRaiz);

    const elementoNum = document.getElementById("resultadoRaiz");
    elementoNum.innerHTML = elementoNum.innerHTML.replace("-", `${calcularRaiz}`);
}

// 16
function calcularHip() {
    const cateto1 = 3
    const cateto2 = 4

    const hipotenusa = Math.hypot(cateto1, cateto2);
    const elementoHip = document.getElementById("resultadoHip");
    elementoHip.innerHTML = elementoHip.innerHTML.replace("-", `${hipotenusa}`);
}

// 17
function menorValor() {
    const valores = document.getElementById("inputArray").value;
    const array = valores.split(",").map(Number); // Converte a string em um array de números

    const menor = Math.min(...array);
    const elementoArray = document.getElementById("resultadoMenor");
    elementoArray.innerHTML = elementoArray.innerHTML.replace("-", `${menor}`);
}

// 18
function elevar() {
    const potenciacao = Math.pow(2, 10);

    const elementoArray = document.getElementById("resultadoPotencia");
    elementoArray.innerHTML = elementoArray.innerHTML.replace("-", `${potenciacao}`);
}

// 19
function converterTemp() {
    const celsius = document.getElementById("inputCelsius").value;

    const fahrenheit = (celsius * 1.8) + 32

    const elementoTemp = document.getElementById("resultadoTemp");
    elementoTemp.innerHTML = elementoTemp.innerHTML.replace("-", `${fahrenheit} °F`);
}

// 20
function verificarSinal() {

    const numRecebido = document.getElementById("inputNumRecebido").value;


    const sinal = Math.sign(numRecebido);
    let textoResultado = "";

    if (sinal === 1) {
        textoResultado = "O número é positivo";
    } else if (sinal === -1) {
        textoResultado = "O número é negativo";
    } else if (sinal === 0 || sinal === -0) { 
        textoResultado = "O número é zero";
    } else {
        textoResultado = "Insira um número válido";
    }

    document.getElementById("resultadoSinal").innerText = textoResultado;
}

// 21
function exibirHorario() {
    const agora = new Date()

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    console.log(`Horário: ${horas}:${minutos}`);
}

//22
function contagemRegressiva() {
    const hoje = new Date()
    console.log(hoje)

    const anoNovo = new Date("2027-01-01")

    const diferencaMS = anoNovo - hoje
    const resultadoContagem = Math.ceil(diferencaMS / (1000 * 60 * 60 * 24));

    const elementoContagem = document.getElementById("resultadoContagem");
    elementoContagem.innerHTML = elementoContagem.innerHTML.replace("-", `Faltam ${resultadoContagem} dias para o Ano Novo!`);
}

// 23
function verificarDiaSemana() {
    const inputDia = document.getElementById('inputDiaSemana').value

    const transformarData = new Date (inputDia)

    const diaSemana = transformarData.getDay();

    let textoDiaSemana = ""

    if (diaSemana === 0) {
        textoDiaSemana = "Domingo"
    } else if (diaSemana === 1) {
        textoDiaSemana = "Segunda-feira"
    } else if (diaSemana === 2) {
        textoDiaSemana = "Terça-feira"
    } else if (diaSemana === 3) {
        textoDiaSemana = "Quarta-feira"
    } else if (diaSemana === 4) {
        textoDiaSemana = "Quinta-feira"
    } else if (diaSemana === 5) {
        textoDiaSemana = "Sexta-feira"
    } else if (diaSemana === 6) {
        textoDiaSemana = "Sábado"
    }


    const elementoDiaSemana = document.getElementById("resultadoDiaSemana");
    elementoDiaSemana.innerText = textoDiaSemana;
}

// 24
function vencimentoBoleto() {
    const inputDiaCompra = document.getElementById("inputDiaCompra").value

    const transformarDataCompra = new Date(inputDiaCompra)

    transformarDataCompra.setDate(transformarDataCompra.getDate() + 3)

    const dataFormatada = transformarDataCompra.toLocaleDateString('pt-BR')

    const elementoBoleto = document.getElementById("resultadoBoleto");
    elementoBoleto.innerHTML = elementoBoleto.innerHTML.replace("-", `${dataFormatada}`);
}

// 25
function validarIdade() {
    const inputIdade = document.getElementById("inputIdade").value

    const dataNascimento = new Date(inputIdade)
    const hoje = new Date();

    const dataMaioridade = new Date(dataNascimento);
    dataMaioridade.setFullYear(dataMaioridade.getFullYear() + 18);

    let mensagem = ""

    if (dataMaioridade <= hoje) {
        mensagem = "Você é maior de idade!";
    } else {
        mensagem = "Você é menor de idade!";
    }

    const elementoMaioridade = document.getElementById("resultadoMaioridade");
    elementoMaioridade.innerHTML = elementoMaioridade.innerHTML.replace("-", `${mensagem}`);
}

// 26
function timestamp() {
    const codigoUnico = Date.now();

    const elementoLog = document.getElementById("resultadoTimestamp");
    elementoLog.innerText = `Código de Log gerado: ${codigoUnico}`;
}

// 27
function subtracao(num1, num2) {
    let dataHoje = new Date();
    let subtracao = num1 - num2
    return subtracao
}

// 28
function buscarClientes() {
    const nomes = document.getElementById("inputArrayNomes").value;
    const termo = document.getElementById("inputTermo").value

    const nomesFormatados = nomes.trim().toLowerCase();
    const termoFormatado = termo.trim().toLowerCase();

    const nomesArray = nomesFormatados.split(" ");

    const resultado = nomesArray.filter(nomesArray => nomesArray.includes(termoFormatado));

     const elementoClientes = document.getElementById("resultadoClientes");

    if (resultado.length > 0) {
        elementoClientes.innerText = resultado.join(" "); 
    } else {
        elementoClientes.innerText = "Nenhum cliente encontrado.";
    }

   
}

// 29
function simularFinanciamento() {
    const valorTotal = Number(document.getElementById("inputValorTotal").value);
    const nomeCliente = document.getElementById("inputNomeCliente").value;

    const nomeClienteFormatado = nomeCliente.trim().toUpperCase()
    const idAleatorio = Math.floor(Math.random() * 10000) + 1;


    const parcelas = (valorTotal/12)
    const parcelasArredondadas = Math.ceil(parcelas);

    const clienteFinal = {
        id: idAleatorio,
        nome: nomeClienteFormatado,
        parcelas: parcelasArredondadas,
    };

    const elementoFinanciamento = document.getElementById("resultadoFinanciamento");
    elementoFinanciamento.innerText = `Cliente: ${clienteFinal.nome} (ID: ${clienteFinal.id}) - Financiamento em 12x de R$ ${clienteFinal.parcelas}`;}

// 30
function formatarMoeda() {
    const moeda = 1500.5

    const brlFormatado = new Intl.NumberFormat("pt-br", {
        style: 'currency',
        currency: 'BRL'
    }).format(moeda);

    const elementoMoeda = document.getElementById("resultadoMoedaInternacional");
    elementoMoeda.innerText = `${brlFormatado}`;
}