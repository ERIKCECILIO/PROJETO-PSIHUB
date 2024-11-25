var database = require("../database/config");


function totalPublicacoes() {  // terceiro de tudo
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
       SELECT count(*) as acertos FROM aviso;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function publicacoesPorUsuarioGrafico() { // terceiro de tudo
    console.log("ACESSEI O AVISO MODEL");
    var instrucaoSql = `
        SELECT fkPsicologo AS usuario, COUNT(*) AS total_publicacoes
        FROM aviso
        GROUP BY fkPsicologo
        ORDER BY total_publicacoes DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicacoesPorHoraGrafico() { // terceiro de tudo
    console.log("ACESSEI O AVISO MODEL");
    var instrucaoSql = `
         SELECT 
            HOUR(dataHora) AS hora, 
            COUNT(*) AS total_publicacoes
            FROM aviso
            GROUP BY HOUR(dataHora)
            ORDER BY hora;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPerfil(idUsuario) {
    console.log("ACESSEI O AVISO MODEL");
    var instrucaoSql = `
        SELECT 
            id AS idAviso,
            titulo,
            descricao,
            DATE_FORMAT(dataHora, '%Y-%m-%d %H:%i:%s') AS dataHora
        FROM 
            aviso
        WHERE 
            fkPsicologo = ${idUsuario}
        ORDER BY 
            dataHora DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql); // Verifique se a função executar está implementada corretamente
}






module.exports = {
    totalPublicacoes,
    publicacoesPorUsuarioGrafico,
    publicacoesPorHoraGrafico,
    listarPerfil
}