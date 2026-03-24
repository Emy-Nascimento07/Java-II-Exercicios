// 2.3 - Date
const agora = new Date(); // Data e hora exata do sistema

console.log(`3. Date:`);

console.log(`Ano com 'getFullYear()': ${agora.getFullYear()}`); // 2024
console.log(`Mês com 'getMonth()': ${agora.getMonth()}`); // 2 (Se for Março, retorna 2!)
console.log(`Dia com 'getDate()': ${agora.getDate()}`); // 15 (Dia do mês)
console.log(`Dia da semana com 'getDay()': ${agora.getDay()}`); // 5 (Dia da semana: 0=Dom, 1=Seg...)
console.log(` `);

console.log(`Formatando data:`);

const dataEvento = new Date("2024-12-25T10:00:00");

// Formato Brasileiro: 25/12/2024
console.log(`Formato Brasileiro: ${dataEvento.toLocaleDateString('pt-BR')}`);

// Formato Completo: sexta-feira, 25 de dezembro de 2024
console.log(`Formato Completo: ${dataEvento.toLocaleDateString('pt-BR', { dateStyle: "full" })}`);
console.log(` `);

console.log(`Calculando diferença entre datas:`);

const dataHoje = new Date();
const dataVencimento = new Date("2024-03-25");

// A diferença em milissegundos
const diferencaEmMS = dataVencimento - dataHoje;

// Converter milissegundos para dias: (1000ms * 60s * 60m * 24h)
const diferencaEmDias = Math.ceil(diferencaEmMS / (1000 * 60 * 60 * 24));
if (diferencaEmDias < 0) {
    console.log(`Boleto vencido há ${Math.abs(diferencaEmDias)} dias!`);
} else {
    console.log(`Faltam ${diferencaEmDias} dias para o vencimento.`);
}

console.log(`-------------------------------------`);