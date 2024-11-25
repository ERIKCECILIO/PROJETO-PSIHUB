var database = require("../database/config");


function totalPublicacoes() {  // terceiro de tudo PRIMEIRA DASHBOARD
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
       SELECT count(*) as acertos FROM aviso;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function publicacoesPorUsuarioGrafico() { // terceiro de tudo SEGUNDA DASHBOARD
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

function publicacoesPorHoraGrafico() { // terceiro de tudo TERCEIRA DASHBOARD
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
// função presente da pagina cards // terceiro de tudo
function listarPerfil(req, res) {
    var idUsuario = req.params.idUsuario;
    // criada lógica para buscar posts no banco de dados todos os posts do usuário que está em sessão
    db.query(`SELECT * FROM posts WHERE id_usuario = ${idUsuario}`, function (err, resultados) {
        if (err) {
            res.status(500).send({ erro: 'Erro no servidor!' });
        } else if (resultados.length === 0) {
            res.status(404).send({ mensagem: 'Nenhuma publicação encontrada!' });
        } else {
            res.status(200).json(resultados);
        }
    });
}






module.exports = {
    totalPublicacoes,
    publicacoesPorUsuarioGrafico,
    publicacoesPorHoraGrafico,
    listarPerfil
}